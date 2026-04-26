import { ref, mergeProps, useSSRContext } from "vue";
import { useRouter } from "vue-router";
import { a as useRuntimeConfig } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/hookable/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/unctx/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/h3/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/defu/dist/defu.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  setup() {
    const router = useRouter();
    const activeTab = ref("text");
    const isAnalyzing = ref(false);
    const dragOver = ref(false);
    const selectedFile = ref(null);
    ref(null);
    const form = ref({
      title: "",
      text: ""
    });
    const handleFileSelect = (event) => {
      selectedFile.value = event.target.files[0];
    };
    const handleDrop = (event) => {
      dragOver.value = false;
      if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        selectedFile.value = event.dataTransfer.files[0];
      }
    };
    const submitAnalysis = async () => {
      isAnalyzing.value = true;
      const config = useRuntimeConfig();
      try {
        let response;
        const apiUrl = config.public.apiBase;
        if (activeTab.value === "text") {
          response = await fetch(`${apiUrl}/analyze/text`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
              title: form.value.title || "Untitled Assessment",
              text: form.value.text
            })
          });
        } else {
          const formData = new FormData();
          formData.append("document", selectedFile.value);
          formData.append("title", form.value.title || "Untitled File Report");
          response = await fetch(`${apiUrl}/analyze`, {
            method: "POST",
            credentials: "include",
            body: formData
          });
        }
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Analysis failed");
        }
        const data = await response.json();
        const reportId = data.report?._id || data._id;
        console.log("Analysis successful, Report ID:", reportId);
        router.push("/dashboard");
      } catch (error) {
        console.error("Analysis error:", error);
        alert(`Analysis Failed: ${error.message}`);
      } finally {
        isAnalyzing.value = false;
      }
    };
    return {
      activeTab,
      isAnalyzing,
      dragOver,
      selectedFile,
      form,
      handleFileSelect,
      handleDrop,
      submitAnalysis
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fade-in-up" }, _attrs))} data-v-6abce0ec><header class="mb-margin flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/20 pb-margin" data-v-6abce0ec><div class="space-y-2" data-v-6abce0ec><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-tint/10 border border-surface-tint/20 text-surface-tint font-label-caps text-[10px] tracking-widest" data-v-6abce0ec><span class="material-symbols-outlined text-sm" data-v-6abce0ec>terminal</span> COMMAND CENTER </div><h1 class="font-headline-xl text-4xl md:text-5xl text-on-surface text-glow-cyan" data-v-6abce0ec>Initiate Risk Scan</h1><p class="font-body-lg text-outline opacity-70 max-w-xl" data-v-6abce0ec>Harness Gemini AI to detect, analyze, and mitigate complex business threats in real-time.</p></div><div class="flex items-center gap-4 bg-surface-variant/20 dark:bg-black/20 p-1 rounded-xl border border-outline-variant/20 dark:border-white/5" data-v-6abce0ec><button class="${ssrRenderClass([_ctx.activeTab === "text" ? "text-background z-10" : "text-outline hover:text-on-surface", "px-6 py-3 rounded-lg font-label-caps text-[10px] tracking-widest transition-all relative overflow-hidden group"])}" data-v-6abce0ec>`);
  if (_ctx.activeTab === "text") {
    _push(`<div class="absolute inset-0 bg-surface-tint shadow-[0_0_20px_rgba(0,219,233,0.5)] z-[-1] animate-in fade-in zoom-in duration-300" data-v-6abce0ec></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="flex items-center gap-2" data-v-6abce0ec><span class="material-symbols-outlined text-sm" data-v-6abce0ec>subject</span> DIRECT INPUT </span></button><button class="${ssrRenderClass([_ctx.activeTab === "file" ? "text-background z-10" : "text-outline hover:text-on-surface", "px-6 py-3 rounded-lg font-label-caps text-[10px] tracking-widest transition-all relative overflow-hidden group"])}" data-v-6abce0ec>`);
  if (_ctx.activeTab === "file") {
    _push(`<div class="absolute inset-0 bg-surface-tint shadow-[0_0_20px_rgba(0,219,233,0.5)] z-[-1] animate-in fade-in zoom-in duration-300" data-v-6abce0ec></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="flex items-center gap-2" data-v-6abce0ec><span class="material-symbols-outlined text-sm" data-v-6abce0ec>upload_file</span> FILE UPLOAD </span></button></div></header><div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch" data-v-6abce0ec><div class="lg:col-span-7 xl:col-span-8" data-v-6abce0ec><div class="glass-panel rounded-2xl p-8 md:p-10 border border-outline-variant/20 dark:border-white/10 shadow-2xl relative overflow-hidden h-full" data-v-6abce0ec><div class="absolute top-0 right-0 p-8 opacity-5 pointer-events-none" data-v-6abce0ec><span class="material-symbols-outlined text-[140px] text-on-surface" data-v-6abce0ec>shield_person</span></div><div class="space-y-margin relative z-10" data-v-6abce0ec><div class="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500" style="${ssrRenderStyle(_ctx.activeTab === "text" ? null : { display: "none" })}" data-v-6abce0ec><div class="group" data-v-6abce0ec><label class="font-label-caps text-[10px] text-surface-tint block mb-2 uppercase tracking-[0.3em] opacity-70 group-focus-within:opacity-100 transition-opacity" data-v-6abce0ec>Investigation Title</label><div class="relative" data-v-6abce0ec><input type="text" class="w-full bg-surface-variant/20 dark:bg-white/5 border border-outline-variant/30 dark:border-white/10 rounded-xl focus:border-surface-tint focus:bg-surface-variant/30 dark:focus:bg-white/[0.08] text-on-surface font-body-md text-base p-5 outline-none transition-all shadow-inner"${ssrRenderAttr("value", _ctx.form.title)} placeholder="e.g. Q4 Supply Chain Integrity Audit" data-v-6abce0ec><div class="absolute bottom-0 left-0 h-0.5 bg-surface-tint w-0 group-focus-within:w-full transition-all duration-500" data-v-6abce0ec></div></div></div><div class="group" data-v-6abce0ec><label class="font-label-caps text-[10px] text-surface-tint block mb-2 uppercase tracking-[0.3em] opacity-70 group-focus-within:opacity-100 transition-opacity" data-v-6abce0ec>Core Analysis Data</label><div class="relative" data-v-6abce0ec><textarea class="w-full bg-surface-variant/20 dark:bg-white/5 border border-outline-variant/30 dark:border-white/10 rounded-xl focus:border-surface-tint focus:bg-surface-variant/30 dark:focus:bg-white/[0.08] text-on-surface font-body-md text-base p-5 outline-none transition-all resize-none h-64 md:h-80 shadow-inner" placeholder="Paste contracts, security logs, or business intelligence for extraction..." data-v-6abce0ec>${ssrInterpolate(_ctx.form.text)}</textarea><div class="absolute bottom-0 left-0 h-0.5 bg-surface-tint w-0 group-focus-within:w-full transition-all duration-500" data-v-6abce0ec></div></div></div></div><div class="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500" style="${ssrRenderStyle(_ctx.activeTab === "file" ? null : { display: "none" })}" data-v-6abce0ec><div class="group" data-v-6abce0ec><label class="font-label-caps text-[10px] text-surface-tint block mb-2 uppercase tracking-[0.3em] opacity-70 group-focus-within:opacity-100 transition-opacity" data-v-6abce0ec>Dataset Title</label><input type="text" class="w-full bg-surface-variant/20 dark:bg-white/5 border border-outline-variant/30 dark:border-white/10 rounded-xl focus:border-surface-tint focus:bg-surface-variant/30 dark:focus:bg-white/[0.08] text-on-surface font-body-md text-base p-5 outline-none transition-all shadow-inner"${ssrRenderAttr("value", _ctx.form.title)} placeholder="e.g. Regional Risk Logs 2024.csv" data-v-6abce0ec></div><div class="${ssrRenderClass([{ "border-surface-tint bg-surface-tint/10": _ctx.dragOver || _ctx.selectedFile }, "border-2 border-dashed border-outline-variant/30 dark:border-white/10 rounded-2xl p-12 flex flex-col items-center justify-center transition-all relative group overflow-hidden bg-surface-variant/20 dark:bg-white/5 hover:border-surface-tint/50 hover:bg-surface-tint/5"])}" data-v-6abce0ec>`);
  if (_ctx.dragOver) {
    _push(`<div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-surface-tint)_0%,_transparent_70%)] opacity-10 animate-pulse" data-v-6abce0ec></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="relative z-10 flex flex-col items-center" data-v-6abce0ec><div class="w-20 h-20 rounded-full bg-surface-tint/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500" data-v-6abce0ec><span class="${ssrRenderClass([{ "animate-bounce": _ctx.dragOver }, "material-symbols-outlined text-4xl text-surface-tint"])}" data-v-6abce0ec>cloud_upload</span></div><h3 class="font-headline-md text-2xl text-on-surface mb-2" data-v-6abce0ec>Ingest Security Data</h3><p class="font-body-md text-outline text-center mb-8" data-v-6abce0ec>Drop CSV or JSON files into the matrix</p><button class="px-8 py-3 rounded-full bg-surface-variant/50 dark:bg-white/10 border border-outline-variant/30 dark:border-white/10 text-on-surface font-label-caps text-[10px] tracking-widest hover:bg-surface-variant/80 dark:hover:bg-white/20 transition-all" data-v-6abce0ec> BROWSE LOCAL STORAGE </button></div><input type="file" class="absolute inset-0 opacity-0 cursor-pointer" accept=".csv, .json" data-v-6abce0ec>`);
  if (_ctx.selectedFile) {
    _push(`<div class="mt-8 flex items-center gap-3 bg-surface-tint/20 px-6 py-3 rounded-xl border border-surface-tint/30 animate-in fade-in zoom-in" data-v-6abce0ec><span class="material-symbols-outlined text-surface-tint" data-v-6abce0ec>verified</span><div class="flex flex-col" data-v-6abce0ec><span class="font-data-mono text-xs text-on-surface" data-v-6abce0ec>${ssrInterpolate(_ctx.selectedFile.name)}</span><span class="text-[9px] text-outline uppercase tracking-tighter" data-v-6abce0ec>${ssrInterpolate((_ctx.selectedFile.size / 1024).toFixed(1))} KB READY</span></div><button class="ml-4 p-1 hover:text-error transition-colors" data-v-6abce0ec><span class="material-symbols-outlined text-sm" data-v-6abce0ec>close</span></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><button class="group relative w-full py-5 rounded-xl bg-surface-tint text-background font-label-caps tracking-[0.4em] text-sm overflow-hidden transition-all shadow-[0_20px_40px_rgba(0,219,233,0.2)] hover:shadow-[0_20px_60px_rgba(0,219,233,0.4)] disabled:opacity-50 disabled:grayscale disabled:shadow-none"${ssrIncludeBooleanAttr(_ctx.isAnalyzing || !_ctx.form.text && !_ctx.selectedFile) ? " disabled" : ""} data-v-6abce0ec><div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" data-v-6abce0ec></div>`);
  if (!_ctx.isAnalyzing) {
    _push(`<span class="flex items-center justify-center gap-3" data-v-6abce0ec> GENERATE INTELLIGENCE REPORT <span class="material-symbols-outlined text-lg" data-v-6abce0ec>bolt</span></span>`);
  } else {
    _push(`<span class="flex items-center justify-center gap-3" data-v-6abce0ec><span class="animate-spin material-symbols-outlined" data-v-6abce0ec>sync</span> PROCESSING NEURAL VECTORS... </span>`);
  }
  _push(`</button></div></div></div><div class="lg:col-span-5 xl:col-span-4 flex flex-col h-full gap-gutter" data-v-6abce0ec><div class="glass-panel rounded-2xl p-8 h-full border border-outline-variant/20 dark:border-white/10 flex flex-col relative overflow-hidden" data-v-6abce0ec>`);
  if (_ctx.isAnalyzing) {
    _push(`<div class="absolute left-0 w-full h-0.5 bg-surface-tint shadow-[0_0_15px_#00dbe9] z-20 animate-scan" data-v-6abce0ec></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex items-center gap-3 mb-8" data-v-6abce0ec><span class="${ssrRenderClass([_ctx.isAnalyzing ? "bg-surface-tint animate-pulse shadow-[0_0_10px_#00dbe9]" : "bg-outline", "w-3 h-3 rounded-full"])}" data-v-6abce0ec></span><h3 class="font-label-caps text-[10px] tracking-[0.3em] text-outline uppercase" data-v-6abce0ec>System Monitor</h3></div>`);
  if (!_ctx.isAnalyzing) {
    _push(`<div class="flex-1 flex flex-col items-center justify-center text-center space-y-6" data-v-6abce0ec><div class="w-24 h-24 rounded-full border-2 border-outline-variant/10 dark:border-white/5 flex items-center justify-center relative" data-v-6abce0ec><div class="absolute inset-0 border-t-2 border-surface-tint/20 rounded-full animate-spin-slow" data-v-6abce0ec></div><span class="material-symbols-outlined text-4xl text-outline opacity-40" data-v-6abce0ec>radar</span></div><div class="space-y-2" data-v-6abce0ec><h3 class="font-headline-md text-xl text-on-surface" data-v-6abce0ec>Awaiting Payload</h3><p class="font-body-md text-sm text-outline px-4" data-v-6abce0ec>Provide intelligence input to initialize the risk evaluation sequence.</p></div></div>`);
  } else {
    _push(`<div class="flex-1 space-y-10" data-v-6abce0ec><div class="space-y-6" data-v-6abce0ec><div class="flex items-center justify-between font-data-mono text-[10px] text-surface-tint" data-v-6abce0ec><span class="tracking-widest uppercase" data-v-6abce0ec>Analyzing Data Stream</span><span data-v-6abce0ec>CALCULATING...</span></div><div class="h-1.5 w-full bg-surface-variant dark:bg-white/5 rounded-full overflow-hidden" data-v-6abce0ec><div class="h-full bg-surface-tint animate-progress-indeterminate" data-v-6abce0ec></div></div></div><div class="space-y-4" data-v-6abce0ec><div class="flex items-center gap-3 p-4 rounded-xl bg-surface-tint/5 border border-surface-tint/10 animate-in fade-in slide-in-from-bottom-2" data-v-6abce0ec><span class="material-symbols-outlined text-surface-tint text-sm animate-spin" data-v-6abce0ec>sync</span><span class="font-data-mono text-[11px] text-on-surface uppercase tracking-wider" data-v-6abce0ec>Parsing unstructured vectors</span></div><div class="flex items-center gap-3 p-4 rounded-xl bg-surface-variant/20 dark:bg-white/5 border border-outline-variant/10 dark:border-white/5 opacity-50" data-v-6abce0ec><span class="material-symbols-outlined text-outline text-sm" data-v-6abce0ec>schedule</span><span class="font-data-mono text-[11px] text-outline uppercase tracking-wider" data-v-6abce0ec>Evaluating risk gradients</span></div><div class="flex items-center gap-3 p-4 rounded-xl bg-surface-variant/20 dark:bg-white/5 border border-outline-variant/10 dark:border-white/5 opacity-30" data-v-6abce0ec><span class="material-symbols-outlined text-outline text-sm" data-v-6abce0ec>lock_open</span><span class="font-data-mono text-[11px] text-outline uppercase tracking-wider" data-v-6abce0ec>Generating remediation roadmap</span></div></div><div class="mt-auto bg-black/40 dark:bg-black/40 rounded-xl p-4 font-data-mono text-[10px] text-green-500/70 space-y-1 h-32 overflow-hidden border border-outline-variant/20 dark:border-white/5 shadow-inner" data-v-6abce0ec><div class="animate-pulse" data-v-6abce0ec>&gt; [SYSTEM] INITIALIZING GEMINI-1.5-PRO...</div><div data-v-6abce0ec>&gt; [AUTH] CONNECTION ESTABLISHED</div><div data-v-6abce0ec>&gt; [DATA] BUFFERING STREAM...</div><div class="text-surface-tint" data-v-6abce0ec>&gt; [SCAN] DETECTING VULNERABILITIES...</div><div class="animate-pulse" data-v-6abce0ec>_</div></div></div>`);
  }
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/analyze.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const analyze = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6abce0ec"]]);
export {
  analyze as default
};
//# sourceMappingURL=analyze-CJlut82D.js.map
