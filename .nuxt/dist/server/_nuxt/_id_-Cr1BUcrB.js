import { _ as __nuxt_component_0 } from "./nuxt-link-wMN7anpV.js";
import { ref, computed, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "vue-chartjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/unctx/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/h3/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/defu/dist/defu.mjs";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(
      RadialLinearScale,
      PointElement,
      LineElement,
      Filler,
      Tooltip,
      Legend
    );
    useRoute();
    useRouter();
    const report = ref(null);
    const error = ref(null);
    const getRiskColorClass = (score, type = "text") => {
      if (score >= 66) {
        return type === "text" ? "text-secondary-container" : type === "border" ? "border-secondary-container/50" : "bg-secondary-container";
      }
      if (score >= 33) {
        return type === "text" ? "text-yellow-500" : type === "border" ? "border-yellow-500/50" : "bg-yellow-500";
      }
      return type === "text" ? "text-surface-tint" : type === "border" ? "border-surface-tint/50" : "bg-surface-tint";
    };
    const getRiskLevelLabel = (score) => {
      if (score >= 66) return "CRITICAL";
      if (score >= 33) return "MODERATE";
      return "MINIMAL";
    };
    const chartData = computed(() => {
      if (!report.value || !report.value.categoryScores) return null;
      const cats = report.value.categoryScores;
      return {
        labels: ["Financial", "Operational", "Market", "Legal", "Reputational"],
        datasets: [{
          label: "Risk Score",
          backgroundColor: "rgba(0, 219, 233, 0.2)",
          borderColor: "rgba(0, 219, 233, 1)",
          pointBackgroundColor: "rgba(0, 219, 233, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(0, 219, 233, 1)",
          data: [
            cats.financial || 0,
            cats.operational || 0,
            cats.market || 0,
            cats.legal || 0,
            cats.reputational || 0
          ]
        }]
      };
    });
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: "rgba(255, 255, 255, 0.1)" },
          grid: { color: "rgba(255, 255, 255, 0.05)" },
          pointLabels: {
            color: "#849495",
            font: {
              size: 11,
              family: "Space Grotesk",
              weight: "600"
            }
          },
          ticks: { display: false, min: 0, max: 100 }
        }
      },
      plugins: {
        legend: { display: false }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (report.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fade-in-up" }, _attrs))} data-v-f598f5a3><div class="flex flex-col md:flex-row md:items-center justify-between mb-margin gap-4" data-v-f598f5a3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/dashboard",
          class: "flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-surface-tint font-label-caps text-[10px] md:text-label-caps hover:bg-surface-tint hover:text-background transition-all shadow-[0_0_15px_rgba(0,219,233,0.1)] hover:shadow-[0_0_30px_rgba(0,219,233,0.3)] min-h-[44px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="material-symbols-outlined text-sm" data-v-f598f5a3${_scopeId}>arrow_back</span> Back to Dashboard `);
            } else {
              return [
                createVNode("span", { class: "material-symbols-outlined text-sm" }, "arrow_back"),
                createTextVNode(" Back to Dashboard ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-surface-tint text-background font-label-caps text-[10px] md:text-label-caps shadow-[0_0_20px_rgba(0,219,233,0.3)] hover:shadow-[0_0_40px_rgba(0,219,233,0.5)] transition-all min-h-[44px]" data-v-f598f5a3><span class="material-symbols-outlined text-sm" data-v-f598f5a3>print</span> Export PDF </button></div><div class="glass-panel rounded-2xl mb-margin p-8 md:p-10 overflow-hidden relative border border-outline-variant/20 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]" data-v-f598f5a3><div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-surface-tint via-primary to-surface-tint opacity-70" data-v-f598f5a3></div><div class="absolute -top-24 -right-24 w-64 h-64 bg-surface-tint/10 rounded-full blur-[100px] pointer-events-none" data-v-f598f5a3></div><div class="flex flex-col lg:flex-row lg:items-start justify-between gap-8 relative z-10" data-v-f598f5a3><div class="space-y-6 flex-1" data-v-f598f5a3><div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-tint/10 border border-surface-tint/20 text-surface-tint font-label-caps text-[10px] tracking-[0.2em] shadow-[0_0_15px_rgba(0,219,233,0.1)]" data-v-f598f5a3><span class="material-symbols-outlined text-sm animate-pulse" data-v-f598f5a3>verified_user</span> SECURE RISK ASSESSMENT </div><div class="space-y-2" data-v-f598f5a3><h1 class="font-headline-xl text-4xl md:text-5xl lg:text-6xl text-on-surface text-glow-cyan tracking-tight leading-tight" data-v-f598f5a3>${ssrInterpolate(report.value.title)}</h1><p class="text-on-surface-variant font-body-lg text-lg opacity-80 max-w-2xl" data-v-f598f5a3> Comprehensive threat analysis and vulnerability assessment generated by Gemini AI Engine. </p></div><div class="flex flex-wrap items-center gap-6 font-data-mono text-xs text-outline pt-4 border-t border-outline-variant/10 dark:border-white/5" data-v-f598f5a3><div class="flex items-center gap-2 px-3 py-1 rounded-md bg-surface-variant/30 dark:bg-white/5" data-v-f598f5a3><span class="material-symbols-outlined text-sm text-surface-tint" data-v-f598f5a3>calendar_today</span><span class="opacity-70" data-v-f598f5a3>GENERATED:</span><span class="text-on-surface" data-v-f598f5a3>${ssrInterpolate(new Date(report.value.createdAt).toLocaleDateString())}</span></div><div class="flex items-center gap-2 px-3 py-1 rounded-md bg-surface-variant/30 dark:bg-white/5" data-v-f598f5a3><span class="material-symbols-outlined text-sm text-surface-tint" data-v-f598f5a3>database</span><span class="opacity-70" data-v-f598f5a3>SOURCE:</span><span class="text-on-surface uppercase" data-v-f598f5a3>${ssrInterpolate(report.value.sourceType)}</span></div><div class="flex items-center gap-2 px-3 py-1 rounded-md bg-surface-variant/30 dark:bg-white/5" data-v-f598f5a3><span class="material-symbols-outlined text-sm text-surface-tint" data-v-f598f5a3>fingerprint</span><span class="opacity-70" data-v-f598f5a3>ID:</span><span class="text-on-surface" data-v-f598f5a3>#${ssrInterpolate(report.value._id.substring(0, 8))}</span></div></div></div><div class="flex flex-col items-center justify-center p-8 rounded-2xl bg-surface-variant/20 dark:bg-black/40 border border-outline-variant/20 dark:border-white/5 min-w-[240px] relative group" data-v-f598f5a3><div class="absolute inset-0 bg-surface-tint/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" data-v-f598f5a3></div><div class="text-outline font-label-caps text-[10px] tracking-[0.3em] mb-4 uppercase" data-v-f598f5a3>Risk Index</div><div class="relative w-32 h-32 flex items-center justify-center" data-v-f598f5a3><svg class="w-full h-full transform -rotate-90" data-v-f598f5a3><circle class="text-outline-variant/20" stroke="currentColor" stroke-width="8" fill="transparent" r="58" cx="64" cy="64" data-v-f598f5a3></circle><circle class="${ssrRenderClass([getRiskColorClass(report.value.overallScore, "text"), "transition-all duration-1000 ease-out"])}" stroke="currentColor" stroke-width="8"${ssrRenderAttr("stroke-dasharray", 2 * Math.PI * 58)}${ssrRenderAttr("stroke-dashoffset", 2 * Math.PI * 58 * (1 - report.value.overallScore / 100))} stroke-linecap="round" fill="transparent" r="58" cx="64" cy="64" data-v-f598f5a3></circle></svg><div class="absolute flex flex-col items-center" data-v-f598f5a3><span class="font-display-lg text-4xl md:text-5xl text-on-surface" data-v-f598f5a3>${ssrInterpolate(report.value.overallScore)}</span><span class="font-label-caps text-[8px] text-outline tracking-widest" data-v-f598f5a3>/ 100</span></div></div><div class="${ssrRenderClass([getRiskColorClass(report.value.overallScore), "mt-4 font-label-caps text-xs tracking-widest"])}" data-v-f598f5a3>${ssrInterpolate(getRiskLevelLabel(report.value.overallScore))} CRITICALITY </div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-margin" data-v-f598f5a3><div class="lg:col-span-7" data-v-f598f5a3><div class="glass-panel rounded-2xl p-8 h-full flex flex-col border border-white/10" data-v-f598f5a3><div class="flex items-center justify-between mb-8" data-v-f598f5a3><h3 class="font-headline-md text-2xl text-on-surface flex items-center gap-3" data-v-f598f5a3><span class="p-2 rounded-lg bg-surface-tint/10 text-surface-tint" data-v-f598f5a3><span class="material-symbols-outlined block" data-v-f598f5a3>radar</span></span> Risk Vector Analysis </h3><div class="flex items-center gap-2 text-[10px] font-label-caps text-outline bg-surface-variant/30 dark:bg-white/5 px-3 py-1 rounded-full border border-outline-variant/10" data-v-f598f5a3><span class="w-2 h-2 rounded-full bg-surface-tint animate-pulse" data-v-f598f5a3></span> LIVE PROFILE </div></div><div class="flex-1 min-h-[350px] relative flex items-center justify-center" data-v-f598f5a3>`);
        if (chartData.value) {
          _push(ssrRenderComponent(unref(Radar), {
            data: chartData.value,
            options: chartOptions
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="lg:col-span-5" data-v-f598f5a3><div class="glass-panel rounded-2xl p-8 h-full border border-white/10 relative overflow-hidden" data-v-f598f5a3><div class="absolute top-0 right-0 p-8 opacity-10 pointer-events-none" data-v-f598f5a3><span class="material-symbols-outlined text-[120px]" data-v-f598f5a3>security</span></div><h3 class="font-headline-md text-2xl text-on-surface flex items-center gap-3 mb-8" data-v-f598f5a3><span class="p-2 rounded-lg bg-secondary-container/10 text-secondary-container" data-v-f598f5a3><span class="material-symbols-outlined block" data-v-f598f5a3>person_search</span></span> Threat Profile </h3><div class="space-y-8 relative z-10" data-v-f598f5a3><div class="space-y-4" data-v-f598f5a3><div class="flex items-center justify-between" data-v-f598f5a3><span class="font-label-caps text-[10px] tracking-widest text-outline uppercase" data-v-f598f5a3>AI Certainty Index</span><span class="font-data-mono text-sm text-surface-tint" data-v-f598f5a3>${ssrInterpolate(report.value.confidenceScore)}%</span></div><div class="h-3 w-full bg-surface-variant/30 dark:bg-white/5 rounded-full overflow-hidden p-0.5 border border-outline-variant/20 dark:border-white/5" data-v-f598f5a3><div class="h-full bg-gradient-to-r from-surface-tint to-primary rounded-full shadow-[0_0_15px_rgba(0,219,233,0.5)] transition-all duration-1000" style="${ssrRenderStyle({ width: report.value.confidenceScore + "%" })}" data-v-f598f5a3></div></div></div><div class="grid grid-cols-2 gap-4" data-v-f598f5a3><div class="p-4 rounded-xl bg-surface-variant/20 dark:bg-white/5 border border-outline-variant/20 dark:border-white/5 space-y-2" data-v-f598f5a3><span class="text-[9px] font-label-caps text-outline tracking-wider uppercase" data-v-f598f5a3>Intent Level</span><p class="text-on-surface font-medium" data-v-f598f5a3>${ssrInterpolate(report.value.overallScore > 70 ? "Hostile / Targeted" : "Opportunistic")}</p></div><div class="p-4 rounded-xl bg-surface-variant/20 dark:bg-white/5 border border-outline-variant/20 dark:border-white/5 space-y-2" data-v-f598f5a3><span class="text-[9px] font-label-caps text-outline tracking-wider uppercase" data-v-f598f5a3>Capability</span><p class="text-on-surface font-medium" data-v-f598f5a3>${ssrInterpolate(report.value.overallScore > 60 ? "Advanced / Persistent" : "Moderate")}</p></div></div><div class="space-y-4" data-v-f598f5a3><span class="text-[10px] font-label-caps text-outline tracking-widest uppercase block border-b border-outline-variant/10 dark:border-white/5 pb-2" data-v-f598f5a3>Primary Attack Vectors</span><div class="space-y-3" data-v-f598f5a3><!--[-->`);
        ssrRenderList(report.value.categoryScores, (score, cat) => {
          _push(`<div class="flex items-center justify-between p-3 rounded-lg bg-surface-tint/5 border-l-2 border-surface-tint" style="${ssrRenderStyle(score > 50 ? null : { display: "none" })}" data-v-f598f5a3><span class="text-xs font-medium text-on-surface capitalize" data-v-f598f5a3>${ssrInterpolate(cat)}</span><span class="text-[10px] font-data-mono text-surface-tint" data-v-f598f5a3>${ssrInterpolate(score)} PTS</span></div>`);
        });
        _push(`<!--]--></div></div></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-gutter mb-margin" data-v-f598f5a3><div class="glass-panel rounded-2xl p-8 border border-white/10" data-v-f598f5a3><h3 class="font-headline-md text-2xl text-on-surface flex items-center gap-3 mb-8" data-v-f598f5a3><span class="p-2 rounded-lg bg-surface-tint/10 text-surface-tint" data-v-f598f5a3><span class="material-symbols-outlined block" data-v-f598f5a3>find_in_page</span></span> Critical Findings </h3><div class="space-y-4" data-v-f598f5a3><!--[-->`);
        ssrRenderList(report.value.findings, (finding, index) => {
          _push(`<div class="group flex gap-5 p-6 rounded-2xl bg-surface-variant/10 dark:bg-white/[0.03] border border-outline-variant/10 dark:border-white/5 hover:border-surface-tint/30 hover:bg-surface-variant/20 dark:hover:bg-white/[0.05] transition-all" data-v-f598f5a3><div class="w-10 h-10 rounded-full bg-surface-tint/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" data-v-f598f5a3><span class="material-symbols-outlined text-surface-tint text-xl" data-v-f598f5a3>priority_high</span></div><div class="space-y-1" data-v-f598f5a3><span class="text-[9px] font-label-caps text-outline tracking-widest uppercase" data-v-f598f5a3>Finding #${ssrInterpolate(index + 1)}</span><p class="text-on-surface-variant leading-relaxed" data-v-f598f5a3>${ssrInterpolate(finding)}</p></div></div>`);
        });
        _push(`<!--]--></div></div><div class="glass-panel rounded-2xl p-8 border border-white/10" data-v-f598f5a3><h3 class="font-headline-md text-2xl text-on-surface flex items-center gap-3 mb-8" data-v-f598f5a3><span class="p-2 rounded-lg bg-secondary-container/10 text-secondary-container" data-v-f598f5a3><span class="material-symbols-outlined block" data-v-f598f5a3>gavel</span></span> Remediation Roadmap </h3><div class="space-y-4" data-v-f598f5a3><!--[-->`);
        ssrRenderList(report.value.recommendations, (rec, index) => {
          _push(`<div class="group flex gap-5 p-6 rounded-2xl bg-secondary-container/5 border border-outline-variant/10 dark:border-white/5 hover:border-secondary-container/30 hover:bg-secondary-container/10 transition-all" data-v-f598f5a3><div class="w-10 h-10 rounded-full bg-secondary-container/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" data-v-f598f5a3><span class="material-symbols-outlined text-secondary-container text-xl" data-v-f598f5a3>task_alt</span></div><div class="space-y-1" data-v-f598f5a3><span class="text-[9px] font-label-caps text-outline tracking-widest uppercase" data-v-f598f5a3>Action Item</span><p class="text-on-surface-variant leading-relaxed" data-v-f598f5a3>${ssrInterpolate(rec)}</p></div></div>`);
        });
        _push(`<!--]--></div></div></div><div class="flex items-center justify-center pt-8 border-t border-outline-variant/20 dark:border-white/5" data-v-f598f5a3><button class="flex items-center gap-3 px-8 py-4 rounded-xl bg-surface-tint text-background font-label-caps tracking-widest hover:brightness-110 transition-all shadow-2xl hover:shadow-surface-tint/40" data-v-f598f5a3><span class="material-symbols-outlined" data-v-f598f5a3>download</span> DOWNLOAD FULL PDF DOSSIER </button></div></div>`);
      } else if (error.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[60vh] flex flex-col items-center justify-center text-center space-y-stack-lg" }, _attrs))} data-v-f598f5a3><span class="material-symbols-outlined text-display-lg text-error opacity-50" data-v-f598f5a3>error</span><h2 class="font-headline-xl text-on-surface" data-v-f598f5a3>Report Not Found</h2><p class="text-outline" data-v-f598f5a3>The report you&#39;re looking for doesn&#39;t exist or has been removed.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "px-stack-lg py-stack-md bg-surface-tint text-background rounded-lg font-label-caps text-label-caps shadow-[0_0_20px_rgba(0,219,233,0.3)]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Return Home`);
            } else {
              return [
                createTextVNode("Return Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[60vh] flex items-center justify-center" }, _attrs))} data-v-f598f5a3><div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-surface-tint" data-v-f598f5a3></div></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/report/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f598f5a3"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-Cr1BUcrB.js.map
