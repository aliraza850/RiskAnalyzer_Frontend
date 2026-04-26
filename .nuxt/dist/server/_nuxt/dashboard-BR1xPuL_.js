import { mergeProps, useSSRContext, withCtx, createTextVNode, toDisplayString, ref, watch, computed } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BYieriE7.js";
import { a as useAuth, b as useRuntimeConfig } from "../server.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ufo/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/defu/dist/defu.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/hookable/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/unctx/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
const _sfc_main$4 = {
  props: {
    score: {
      type: Number,
      default: 0
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-panel risk-score-card" }, _attrs))} data-v-5cd372d0><div class="hover-overlay" data-v-5cd372d0></div><h3 class="card-label" data-v-5cd372d0>Average Risk Score</h3><div class="chart-container" data-v-5cd372d0><svg class="chart-svg" viewBox="0 0 100 100" data-v-5cd372d0><circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" class="chart-bg" stroke-width="4" data-v-5cd372d0></circle><circle class="chart-fill" cx="50" cy="50" fill="none" r="45" stroke="currentColor" stroke-width="4"${ssrRenderAttr("stroke-dasharray", 283)}${ssrRenderAttr("stroke-dashoffset", 283 - 283 * _ctx.score / 100)} data-v-5cd372d0></circle></svg><div class="score-display" data-v-5cd372d0><span class="score-value text-glow-cyan" data-v-5cd372d0>${ssrInterpolate(_ctx.score)}</span><span class="score-max" data-v-5cd372d0>/100</span></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StitchRiskScore.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-5cd372d0"]]);
const _sfc_main$3 = {
  props: {
    total: {
      type: Number,
      default: 0
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-panel total-analyses-card" }, _attrs))} data-v-c5998510><h3 class="card-label" data-v-c5998510>Total Analyses</h3><div class="card-content" data-v-c5998510><span class="total-value" data-v-c5998510>${ssrInterpolate(_ctx.total)}</span><div class="chart-sparkline" data-v-c5998510><svg class="sparkline-svg" preserveAspectRatio="none" viewBox="0 0 100 40" data-v-c5998510><polyline class="sparkline-path" fill="none" points="0,30 20,25 40,35 60,15 80,20 100,5" stroke="currentColor" stroke-width="2" data-v-c5998510></polyline></svg></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StitchTotalAnalyses.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-c5998510"]]);
const _sfc_main$2 = {
  __name: "StitchCriticalRisks",
  __ssrInlineRender: true,
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-panel col-span-1 lg:col-span-4 md:col-span-12 rounded-xl p-glass-padding flex flex-col items-center justify-center relative group border-secondary-container/30" }, _attrs))}><div class="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-secondary-container to-transparent opacity-50"></div><h3 class="font-label-caps text-label-caps text-outline w-full text-left mb-stack-lg uppercase tracking-[0.3em]">Critical Risks</h3><div class="flex-1 flex items-center justify-center"><span class="font-display-lg text-[80px] md:text-[120px] leading-none font-bold text-secondary-container text-glow-magenta animate-pulse">${ssrInterpolate(__props.count)}</span></div><p class="font-data-mono text-data-mono text-secondary-container/80 mt-stack-md w-full text-right flex items-center justify-end gap-2"><span class="material-symbols-outlined text-sm">warning</span> Action Required </p></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StitchCriticalRisks.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  props: {
    reports: Array,
    loading: Boolean
  },
  setup() {
    const getRiskBadgeClass = (score) => {
      if (score >= 66) return "risk-high";
      if (score >= 33) return "risk-medium";
      return "risk-low";
    };
    const getRiskLabel = (score) => {
      if (score >= 66) return "High";
      if (score >= 33) return "Medium";
      return "Low";
    };
    return {
      getRiskBadgeClass,
      getRiskLabel
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-panel reports-card" }, _attrs))} data-v-3b374500><div class="card-header" data-v-3b374500><h3 class="font-headline-md text-xl" data-v-3b374500>Recent Reports</h3><button class="view-all-btn" data-v-3b374500> VIEW ALL <span class="material-symbols-outlined" style="${ssrRenderStyle({ "font-size": "14px" })}" data-v-3b374500>arrow_forward</span></button></div><div class="table-wrapper custom-scrollbar" data-v-3b374500><table class="reports-table" data-v-3b374500><thead data-v-3b374500><tr data-v-3b374500><th data-v-3b374500>Date</th><th data-v-3b374500>Title</th><th data-v-3b374500>Source</th><th data-v-3b374500>Risk Score</th><th style="${ssrRenderStyle({ "width": "25%" })}" data-v-3b374500>Confidence</th></tr></thead><tbody data-v-3b374500>`);
  if (_ctx.loading) {
    _push(`<tr data-v-3b374500><td colspan="5" style="${ssrRenderStyle({ "padding": "2.5rem", "text-align": "center", "color": "var(--color-outline)" })}" data-v-3b374500>Loading analyses...</td></tr>`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.reports, (report) => {
      _push(`<tr data-v-3b374500><td style="${ssrRenderStyle({ "color": "var(--color-on-surface-variant)" })}" data-v-3b374500>${ssrInterpolate(new Date(report.createdAt).toLocaleDateString())}</td><td data-v-3b374500>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/report/${report._id}`,
        class: "report-title-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(report.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(report.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</td><td style="${ssrRenderStyle({ "color": "var(--color-outline)" })}" data-v-3b374500>${ssrInterpolate(report.sourceType)}</td><td data-v-3b374500><span class="${ssrRenderClass([_ctx.getRiskBadgeClass(report.overallScore), "risk-badge"])}" data-v-3b374500>${ssrInterpolate(_ctx.getRiskLabel(report.overallScore))} ${ssrInterpolate(report.overallScore)}</span></td><td style="${ssrRenderStyle({ "padding-right": "1rem" })}" data-v-3b374500><div class="confidence-bar" data-v-3b374500><div class="confidence-fill" style="${ssrRenderStyle({ width: report.confidenceScore + "%" })}" data-v-3b374500></div></div></td></tr>`);
    });
    _push(`<!--]-->`);
  }
  _push(`</tbody></table></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StitchRecentReports.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-3b374500"]]);
const _sfc_main = {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_StitchRiskScore = __nuxt_component_0;
  const _component_StitchTotalAnalyses = __nuxt_component_1;
  const _component_StitchCriticalRisks = _sfc_main$2;
  const _component_StitchRecentReports = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fade-in-up dashboard-page" }, _attrs))} data-v-6d3b0896>`);
  if (_ctx.user) {
    _push(`<div class="dashboard-header" data-v-6d3b0896><h1 class="dashboard-title" data-v-6d3b0896>Command Center</h1>`);
    if (!_ctx.loading) {
      _push(`<div data-v-6d3b0896><p class="welcome-text" data-v-6d3b0896> Welcome back, <span class="user-name" data-v-6d3b0896>${ssrInterpolate(_ctx.user.email.split("@")[0].replace(/[\._-]/g, " "))}</span>. Reviewing ${ssrInterpolate(_ctx.reports.length)} active risk assessments. </p></div>`);
    } else {
      _push(`<div class="sync-container" data-v-6d3b0896><span class="sync-dot" data-v-6d3b0896></span><p class="sync-text" data-v-6d3b0896>Synchronizing intelligence data...</p></div>`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.errorMsg) {
    _push(`<div class="error-banner" data-v-6d3b0896><span class="material-symbols-outlined" data-v-6d3b0896>warning</span><p data-v-6d3b0896>${ssrInterpolate(_ctx.errorMsg)}</p><button class="retry-btn" data-v-6d3b0896>Retry Connection</button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="stats-grid" data-v-6d3b0896>`);
  if (_ctx.loading && !_ctx.reports.length) {
    _push(`<!--[-->`);
    ssrRenderList(3, (i) => {
      _push(`<div class="skeleton-card" data-v-6d3b0896></div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!--[-->`);
    _push(ssrRenderComponent(_component_StitchRiskScore, { score: _ctx.averageRiskScore }, null, _parent));
    _push(ssrRenderComponent(_component_StitchTotalAnalyses, {
      total: _ctx.reports.length
    }, null, _parent));
    _push(ssrRenderComponent(_component_StitchCriticalRisks, { count: _ctx.criticalRisksCount }, null, _parent));
    _push(`<!--]-->`);
  }
  _push(`</div><div class="reports-section" data-v-6d3b0896>`);
  _push(ssrRenderComponent(_component_StitchRecentReports, {
    reports: _ctx.reports,
    loading: _ctx.loading
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6d3b0896"]]);
export {
  dashboard as default
};
//# sourceMappingURL=dashboard-BR1xPuL_.js.map
