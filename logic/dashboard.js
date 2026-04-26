import { ref, onMounted, computed, watch, nextTick } from 'vue';
import { useAuth, useRuntimeConfig } from '#imports';

export default {
  setup() {
    const { user, initialized } = useAuth();
    const reports = ref([]);
    const loading = ref(true);
    const errorMsg = ref(null);
    const config = useRuntimeConfig();

    const getReports = async () => {
      // Don't fetch if no user or already fetching
      if (!user.value) {
        loading.value = false;
        return;
      }
      
      loading.value = true;
      errorMsg.value = null;

      try {
        const response = await fetch(`${config.public.apiBase}/reports`, {
          credentials: 'include',
          // Add a timeout signal to prevent hanging requests
          signal: AbortSignal.timeout(10000)
        });
        
        if (response.ok) {
          const data = await response.json();
          // Safely handle different response formats
          reports.value = Array.isArray(data) ? data : (data.reports || []);
        } else {
          const errData = await response.json().catch(() => ({}));
          errorMsg.value = errData.error || `Server error: ${response.status}`;
          reports.value = [];
        }
      } catch (error) {
        console.error('Dashboard data fetch error:', error);
        errorMsg.value = 'Failed to connect to intelligence server. Please check your connection.';
        reports.value = [];
      } finally {
        loading.value = false;
      }
    };

    // Watch user — fires when user becomes available (login, or page nav with pre-set state)
    watch(
      user,
      async (newUser, oldUser) => {
        // Only fetch if user just became available, or on initial render with a user
        if (newUser && newUser !== oldUser) {
          await nextTick();
          getReports();
        } else if (newUser && !reports.value.length) {
          // Initial render where user is already set
          await nextTick();
          getReports();
        }
      },
      { immediate: true }
    );

    onMounted(async () => {
      // Guarantee a fetch on mount regardless of watch timing
      if (user.value && !reports.value.length) {
        await nextTick();
        getReports();
      }
    });

    // Computed stats with safety fallbacks
    const averageRiskScore = computed(() => {
      if (!reports.value || reports.value.length === 0) return 42; // Neutral default
      const total = reports.value.reduce((acc, report) => acc + (report.overallScore || 0), 0);
      return Math.round(total / reports.value.length);
    });

    const criticalRisksCount = computed(() => {
      if (!reports.value || reports.value.length === 0) return 0;
      return reports.value.filter(report => (report.overallScore || 0) >= 66).length;
    });

    return {
      user,
      reports,
      loading,
      errorMsg,
      averageRiskScore,
      criticalRisksCount,
      getReports
    };
  }
};
