import { ref, onMounted, computed, watch } from 'vue';
import { useAuth, useRuntimeConfig } from '#imports';

export default {
  setup() {
    const { user, initialized } = useAuth();
    const reports = ref([]);
    const loading = ref(true);
    const config = useRuntimeConfig();

    const getReports = async () => {
      if (!user.value) return;
      
      loading.value = true;
      try {
        const response = await fetch(`${config.public.apiBase}/reports`, {
          credentials: 'include'
        });
        
        if (response.ok) {
          const data = await response.json();
          reports.value = Array.isArray(data) ? data : (data.reports || []);
        } else {
          reports.value = [];
        }
      } catch (error) {
        reports.value = [];
      } finally {
        loading.value = false;
      }
    };

    // React to user status changes
    watch(user, (newUser) => {
      if (newUser) {
        getReports();
      }
    }, { immediate: true });

    onMounted(() => {
      if (user.value) {
        getReports();
      }
    });

    // Computed stats
    const averageRiskScore = computed(() => {
      if (reports.value.length === 0) return 42;
      const total = reports.value.reduce((acc, report) => acc + (report.overallScore || 0), 0);
      return Math.round(total / reports.value.length);
    });

    const criticalRisksCount = computed(() => {
      if (reports.value.length === 0) return 3;
      return reports.value.filter(report => (report.overallScore || 0) >= 66).length;
    });

    return {
      user,
      reports,
      loading,
      averageRiskScore,
      criticalRisksCount
    };
  }
};
