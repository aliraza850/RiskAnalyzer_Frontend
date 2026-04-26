import { ref, watch, computed } from 'vue';
import { a as useAuth, b as useRuntimeConfig } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const dashboard = {
  setup() {
    const { user } = useAuth();
    const reports = ref([]);
    const loading = ref(true);
    const errorMsg = ref(null);
    const config = useRuntimeConfig();
    const getReports = async () => {
      if (!user.value) {
        loading.value = false;
        return;
      }
      loading.value = true;
      errorMsg.value = null;
      try {
        const response = await fetch(`${config.public.apiBase}/reports`, {
          credentials: "include",
          // Add a timeout signal to prevent hanging requests
          signal: AbortSignal.timeout(1e4)
        });
        if (response.ok) {
          const data = await response.json();
          reports.value = Array.isArray(data) ? data : data.reports || [];
        } else {
          const errData = await response.json().catch(() => ({}));
          errorMsg.value = errData.error || `Server error: ${response.status}`;
          reports.value = [];
        }
      } catch (error) {
        console.error("Dashboard data fetch error:", error);
        errorMsg.value = "Failed to connect to intelligence server. Please check your connection.";
        reports.value = [];
      } finally {
        loading.value = false;
      }
    };
    watch(user, (newUser) => {
      if (newUser && !reports.value.length) {
        getReports();
      }
    }, { immediate: true });
    const averageRiskScore = computed(() => {
      if (!reports.value || reports.value.length === 0) return 42;
      const total = reports.value.reduce((acc, report) => acc + (report.overallScore || 0), 0);
      return Math.round(total / reports.value.length);
    });
    const criticalRisksCount = computed(() => {
      if (!reports.value || reports.value.length === 0) return 0;
      return reports.value.filter((report) => (report.overallScore || 0) >= 66).length;
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

export { dashboard as default };
//# sourceMappingURL=dashboard-nYXcMAe-.mjs.map
