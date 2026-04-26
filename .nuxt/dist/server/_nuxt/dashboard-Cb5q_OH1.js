import { ref, watch, computed } from "vue";
import { a as useAuth, b as useRuntimeConfig } from "../server.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/hookable/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/unctx/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/defu/dist/defu.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ufo/dist/index.mjs";
import "vue/server-renderer";
const dashboard = {
  setup() {
    const { user } = useAuth();
    const reports = ref([]);
    const loading = ref(true);
    const config = useRuntimeConfig();
    const getReports = async () => {
      if (!user.value) return;
      loading.value = true;
      try {
        const response = await fetch(`${config.public.apiBase}/reports`, {
          credentials: "include"
        });
        if (response.ok) {
          const data = await response.json();
          reports.value = Array.isArray(data) ? data : data.reports || [];
        } else {
          reports.value = [];
        }
      } catch (error) {
        reports.value = [];
      } finally {
        loading.value = false;
      }
    };
    watch(user, (newUser) => {
      if (newUser) {
        getReports();
      }
    }, { immediate: true });
    const averageRiskScore = computed(() => {
      if (reports.value.length === 0) return 42;
      const total = reports.value.reduce((acc, report) => acc + (report.overallScore || 0), 0);
      return Math.round(total / reports.value.length);
    });
    const criticalRisksCount = computed(() => {
      if (reports.value.length === 0) return 3;
      return reports.value.filter((report) => (report.overallScore || 0) >= 66).length;
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
export {
  dashboard as default
};
//# sourceMappingURL=dashboard-Cb5q_OH1.js.map
