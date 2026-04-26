import { mergeProps, useSSRContext, ref, watch, nextTick, computed, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useAuth } from "./useAuth-CgcXupjx.js";
import { a as useRuntimeConfig } from "../server.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/hookable/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/unctx/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/defu/dist/defu.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ufo/dist/index.mjs";
const _sfc_main$4 = {
  props: {
    score: {
      type: Number,
      default: 0
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "risk-score-card stat-card glass-panel" }, _attrs))} data-v-53fb625d><div class="hover-overlay" data-v-53fb625d></div><p class="card-label" data-v-53fb625d>Aggregated Risk Velocity</p><div class="chart-container" data-v-53fb625d><svg class="chart-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-53fb625d><circle class="chart-bg" cx="60" cy="60" r="54" stroke="currentColor" stroke-width="8" fill="none" data-v-53fb625d></circle><circle class="chart-fill" cx="60" cy="60" r="54" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round"${ssrRenderAttr("stroke-dasharray", 339.3)}${ssrRenderAttr("stroke-dashoffset", 339.3 - 339.3 * _ctx.score / 100)} data-v-53fb625d></circle></svg><div class="score-display" data-v-53fb625d><span class="score-value" data-v-53fb625d>${ssrInterpolate(_ctx.score)}</span><span class="score-max" data-v-53fb625d>/100</span></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StitchRiskScore.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-53fb625d"]]);
const _sfc_main$3 = {
  props: {
    total: {
      type: Number,
      default: 0
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "total-analyses-card stat-card glass-panel" }, _attrs))} data-v-726f7dbe><div data-v-726f7dbe><p class="card-label" data-v-726f7dbe>Cumulative Intelligence</p><span class="total-value" data-v-726f7dbe>${ssrInterpolate(_ctx.total)}</span><p class="card-sublabel" data-v-726f7dbe>Total Assessments</p></div><div class="chart-sparkline" data-v-726f7dbe><svg class="sparkline-svg" viewBox="0 0 100 40" preserveAspectRatio="none" data-v-726f7dbe><polyline class="sparkline-path" fill="none" stroke="currentColor" stroke-width="2" points="0,35 15,28 30,32 45,18 60,22 75,10 90,15 100,8" data-v-726f7dbe></polyline></svg></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StitchTotalAnalyses.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-726f7dbe"]]);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "critical-risks-card stat-card glass-panel" }, _attrs))} data-v-258fb9b6><p class="card-label" data-v-258fb9b6>Critical Risks</p><div class="critical-count-container" data-v-258fb9b6><span class="critical-count" data-v-258fb9b6>${ssrInterpolate(__props.count)}</span></div><p class="action-required" data-v-258fb9b6><span class="material-symbols-outlined" data-v-258fb9b6>warning</span> Action Required </p></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StitchCriticalRisks.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-258fb9b6"]]);
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "reports-card glass-panel" }, _attrs))} data-v-7db3234a><div class="card-header" data-v-7db3234a><h2 class="card-title" data-v-7db3234a>Recent Intelligence Reports</h2>`);
  if (_ctx.loading) {
    _push(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "0.5rem", "font-size": "11px", "color": "var(--color-outline)" })}" data-v-7db3234a><span style="${ssrRenderStyle({ "width": "6px", "height": "6px", "border-radius": "50%", "background": "var(--color-surface-tint)", "display": "inline-block", "animation": "pulse-dot 1.5s infinite" })}" data-v-7db3234a></span> Syncing... </div>`);
  } else {
    _push(`<button class="view-all-btn" data-v-7db3234a> VIEW ALL <span class="material-symbols-outlined" style="${ssrRenderStyle({ "font-size": "14px" })}" data-v-7db3234a>arrow_forward</span></button>`);
  }
  _push(`</div><div class="table-wrapper" data-v-7db3234a><table class="reports-table" data-v-7db3234a><thead data-v-7db3234a><tr data-v-7db3234a><th data-v-7db3234a>Assessment Title</th><th data-v-7db3234a>Risk Level</th><th data-v-7db3234a>Confidence</th><th data-v-7db3234a>Date</th></tr></thead><tbody data-v-7db3234a><!--[-->`);
  ssrRenderList(_ctx.reports, (report) => {
    _push(`<tr class="report-row" style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-7db3234a><td data-v-7db3234a><a class="report-title-link" data-v-7db3234a>${ssrInterpolate(report.title)}</a></td><td data-v-7db3234a><span class="${ssrRenderClass([_ctx.getRiskBadgeClass(report.overallScore), "risk-badge"])}" data-v-7db3234a>${ssrInterpolate(_ctx.getRiskLabel(report.overallScore))} · ${ssrInterpolate(report.overallScore)}</span></td><td data-v-7db3234a><div class="confidence-bar" data-v-7db3234a><div class="confidence-fill" style="${ssrRenderStyle({ width: (report.overallScore || 50) + "%" })}" data-v-7db3234a></div></div></td><td data-v-7db3234a>${ssrInterpolate(new Date(report.createdAt).toLocaleDateString())}</td></tr>`);
  });
  _push(`<!--]-->`);
  if (!_ctx.loading && _ctx.reports.length === 0) {
    _push(`<tr data-v-7db3234a><td colspan="4" style="${ssrRenderStyle({ "text-align": "center", "padding": "3rem", "color": "var(--color-outline)", "font-style": "italic" })}" data-v-7db3234a> No risk assessments found. Run your first analysis. </td></tr>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.loading && _ctx.reports.length === 0) {
    _push(`<!--[-->`);
    ssrRenderList(3, (i) => {
      _push(`<tr data-v-7db3234a><td colspan="4" style="${ssrRenderStyle({ "padding": "1rem 0" })}" data-v-7db3234a><div style="${ssrRenderStyle({ "height": "1.5rem", "border-radius": "0.5rem", "background": "linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%)", "background-size": "200%", "animation": "skeleton-shimmer 1.5s infinite" })}" data-v-7db3234a></div></td></tr>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StitchRecentReports.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7db3234a"]]);
const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
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
    watch(
      user,
      async (newUser, oldUser) => {
        if (newUser && newUser !== oldUser) {
          await nextTick();
          getReports();
        } else if (newUser && !reports.value.length) {
          await nextTick();
          getReports();
        }
      },
      { immediate: true }
    );
    const averageRiskScore = computed(() => {
      if (!reports.value || reports.value.length === 0) return 42;
      const total = reports.value.reduce((acc, report) => acc + (report.overallScore || 0), 0);
      return Math.round(total / reports.value.length);
    });
    const criticalRisksCount = computed(() => {
      if (!reports.value || reports.value.length === 0) return 0;
      return reports.value.filter((report) => (report.overallScore || 0) >= 66).length;
    });
    const userName = computed(() => {
      if (!user.value || !user.value.email) return "Agent";
      return user.value.email.split("@")[0].replace(/[\._-]/g, " ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StitchRiskScore = __nuxt_component_0;
      const _component_StitchTotalAnalyses = __nuxt_component_1;
      const _component_StitchCriticalRisks = __nuxt_component_2;
      const _component_StitchRecentReports = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fade-in-up dashboard-page" }, _attrs))} data-v-c5fa1a44>`);
      if (unref(user)) {
        _push(`<div class="dashboard-header" data-v-c5fa1a44><h1 class="dashboard-title" data-v-c5fa1a44>Command Center</h1><div class="welcome-container" data-v-c5fa1a44><p class="welcome-text" data-v-c5fa1a44> Welcome back, <span class="user-name" data-v-c5fa1a44>${ssrInterpolate(userName.value)}</span>. `);
        if (!loading.value) {
          _push(`<span data-v-c5fa1a44>Reviewing ${ssrInterpolate(reports.value.length)} active risk assessments.</span>`);
        } else {
          _push(`<span class="sync-inline" data-v-c5fa1a44><span class="sync-dot-small" data-v-c5fa1a44></span> Synchronizing intelligence... </span>`);
        }
        _push(`</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMsg.value) {
        _push(`<div class="error-banner" data-v-c5fa1a44><span class="material-symbols-outlined" data-v-c5fa1a44>warning</span><p data-v-c5fa1a44>${ssrInterpolate(errorMsg.value)}</p><button class="retry-btn" data-v-c5fa1a44>Retry Connection</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="stats-grid" data-v-c5fa1a44>`);
      if (loading.value && !reports.value.length) {
        _push(`<!--[-->`);
        ssrRenderList(3, (i) => {
          _push(`<div class="skeleton-card" data-v-c5fa1a44></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_StitchRiskScore, { score: averageRiskScore.value }, null, _parent));
        _push(ssrRenderComponent(_component_StitchTotalAnalyses, {
          total: reports.value.length
        }, null, _parent));
        _push(ssrRenderComponent(_component_StitchCriticalRisks, { count: criticalRisksCount.value }, null, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div><div class="reports-section" data-v-c5fa1a44>`);
      _push(ssrRenderComponent(_component_StitchRecentReports, {
        reports: reports.value,
        loading: loading.value
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c5fa1a44"]]);
export {
  dashboard as default
};
//# sourceMappingURL=dashboard-D2XwWfy6.js.map
