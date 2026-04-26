import { mergeProps, ref, useSSRContext } from 'vue';
import { useRouter } from 'vue-router';
import { u as useAuth, a as useRuntimeConfig } from './server.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$1 = {
  emits: ["close"],
  setup(props, { emit }) {
    const router = useRouter();
    const { checkAuth } = useAuth();
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const error = ref("");
    const handleLogin = async () => {
      loading.value = true;
      error.value = "";
      const config = useRuntimeConfig();
      try {
        const response = await fetch(`${config.public.apiBase}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            email: email.value,
            password: password.value
          })
        });
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("user", JSON.stringify(data.user));
          await checkAuth();
          emit("close");
          router.push("/dashboard");
        } else {
          const data = await response.json();
          error.value = data.error || "Authentication failed. Access denied.";
        }
      } catch (err) {
        error.value = "Neural link failure. Check system connectivity.";
      } finally {
        loading.value = false;
      }
    };
    return {
      email,
      password,
      loading,
      error,
      handleLogin
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" }, _attrs))} data-v-07f23a32><div class="absolute inset-0 bg-black/80 backdrop-blur-sm" data-v-07f23a32></div><div class="relative w-full max-w-md glass-card rounded-2xl p-8 overflow-hidden animate-fade-in" data-v-07f23a32><div class="absolute -top-24 -right-24 w-48 h-48 bg-secondary-fixed/10 rounded-full blur-3xl" data-v-07f23a32></div><button class="absolute top-4 right-4 text-on-primary-container hover:text-white transition-colors" data-v-07f23a32><span class="material-symbols-outlined" data-v-07f23a32>close</span></button><div class="space-y-6" data-v-07f23a32><div class="text-center" data-v-07f23a32><h2 class="font-headline-md text-headline-md text-white mb-2" data-v-07f23a32>Access Intelligence</h2><p class="text-body-sm text-on-primary-container" data-v-07f23a32>Initialize secure session to Command Center.</p></div><form class="space-y-4" data-v-07f23a32><div class="space-y-1 group" data-v-07f23a32><label for="email" class="block text-label-md text-primary mb-1 uppercase tracking-widest opacity-70 group-focus-within:opacity-100 transition-opacity" data-v-07f23a32>COGNITIVE IDENTITY (EMAIL)</label><input${ssrRenderAttr("value", _ctx.email)} type="email" id="email" required placeholder="name@intelligence.ai" class="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-white placeholder:text-on-primary-container/40 focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-all" data-v-07f23a32></div><div class="space-y-1 group" data-v-07f23a32><label for="password" class="block text-label-md text-primary mb-1 uppercase tracking-widest opacity-70 group-focus-within:opacity-100 transition-opacity" data-v-07f23a32>ACCESS TOKEN (PASSWORD)</label><input${ssrRenderAttr("value", _ctx.password)} type="password" id="password" required placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" class="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-white placeholder:text-on-primary-container/40 focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-all" data-v-07f23a32></div><button type="submit"${ssrIncludeBooleanAttr(_ctx.loading) ? " disabled" : ""} class="group relative w-full bg-secondary-fixed text-on-secondary-fixed font-headline-md py-4 rounded-xl hover:bg-secondary-fixed-dim transition-all shadow-lg shadow-secondary-fixed/20 flex items-center justify-center gap-2 overflow-hidden mt-6" data-v-07f23a32><div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" data-v-07f23a32></div>`);
  if (_ctx.loading) {
    _push(`<span class="material-symbols-outlined animate-spin" data-v-07f23a32>progress_activity</span>`);
  } else {
    _push(`<span style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "0.5rem" })}" data-v-07f23a32> INITIATE LOGIN <span class="material-symbols-outlined" style="${ssrRenderStyle({ "font-size": "14px" })}" data-v-07f23a32>bolt</span></span>`);
  }
  _push(`</button></form>`);
  if (_ctx.error) {
    _push(`<p class="error-msg" data-v-07f23a32>${ssrInterpolate(_ctx.error)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div style="${ssrRenderStyle({ "padding-top": "1rem", "border-top": "1px solid rgba(255,255,255,0.05)", "text-align": "center", "margin-top": "1.5rem" })}" data-v-07f23a32><p style="${ssrRenderStyle({ "font-size": "10px", "color": "#74829d", "letter-spacing": "0.2em", "text-transform": "uppercase" })}" data-v-07f23a32> SECURED BY ZERO-TRUST NEURAL ARCHITECTURE </p></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AuthModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-07f23a32"]]);
const _sfc_main = {
  setup() {
    const showAuthModal = ref(false);
    return {
      showAuthModal
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AuthModal = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-page" }, _attrs))} data-v-1a758fe7><main style="${ssrRenderStyle({ "flex-grow": "1" })}" data-v-1a758fe7><section class="hero-section" data-v-1a758fe7><div class="hero-bg-decoration" data-v-1a758fe7><div class="blob-1" data-v-1a758fe7></div><div class="blob-2" data-v-1a758fe7></div></div><div class="hero-content" data-v-1a758fe7><div class="hero-grid" data-v-1a758fe7><div class="hero-text-block" data-v-1a758fe7><div class="hero-badge" data-v-1a758fe7><span style="${ssrRenderStyle({ "width": "8px", "height": "8px", "border-radius": "9999px", "background-color": "#00dbe9" })}" class="animate-pulse" data-v-1a758fe7></span><span style="${ssrRenderStyle({ "font-size": "12px", "color": "#b9c7e4", "letter-spacing": "0.1em", "font-weight": "600" })}" data-v-1a758fe7>GEMINI AI INTEGRATED</span></div><h1 class="hero-title" data-v-1a758fe7> AI-Powered Risk Intelligence for Smarter Decisions </h1><p class="hero-subtitle" data-v-1a758fe7> Analyze business risks in seconds with Gemini AI. Get instant scores, actionable insights, and mitigation strategies. </p><div style="${ssrRenderStyle({ "display": "flex", "flex-wrap": "wrap", "gap": "1rem", "padding-top": "1rem" })}" data-v-1a758fe7><button class="btn-primary" data-v-1a758fe7> Get Started <span class="material-symbols-outlined" data-v-1a758fe7>arrow_forward</span></button><button class="btn-outline" data-v-1a758fe7><span class="material-symbols-outlined" data-v-1a758fe7>play_circle</span> Watch Demo </button></div><div class="trust-metrics" data-v-1a758fe7><div class="metric-item" data-v-1a758fe7><div class="value" data-v-1a758fe7>99.9%</div><div class="label" data-v-1a758fe7>Analysis Accuracy</div></div><div style="${ssrRenderStyle({ "width": "1px", "height": "2.5rem", "background-color": "rgba(255,255,255,0.1)" })}" data-v-1a758fe7></div><div class="metric-item" data-v-1a758fe7><div class="value" data-v-1a758fe7>&lt; 2s</div><div class="label" data-v-1a758fe7>Processing Latency</div></div><div style="${ssrRenderStyle({ "width": "1px", "height": "2.5rem", "background-color": "rgba(255,255,255,0.1)" })}" data-v-1a758fe7></div><div class="metric-item" data-v-1a758fe7><div class="value" data-v-1a758fe7>500+</div><div class="label" data-v-1a758fe7>Risk Vectors</div></div></div></div><div class="hero-visual" data-v-1a758fe7><div class="bento-grid" data-v-1a758fe7><div class="glass-card card-wide" data-v-1a758fe7><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between", "align-items": "flex-start", "margin-bottom": "2rem" })}" data-v-1a758fe7><div data-v-1a758fe7><div style="${ssrRenderStyle({ "font-size": "12px", "color": "#b9c7e4", "margin-bottom": "0.5rem" })}" data-v-1a758fe7>LIVE RISK MONITOR</div><div style="${ssrRenderStyle({ "font-size": "1.5rem", "font-weight": "600", "color": "white" })}" data-v-1a758fe7>Systemic Volatility</div></div><div class="risk-pulse" style="${ssrRenderStyle({ "width": "3rem", "height": "3rem", "display": "flex", "align-items": "center", "justify-content": "center", "background-color": "rgba(147, 0, 10, 0.2)", "border": "1px solid rgba(255, 180, 171, 0.3)", "border-radius": "9999px" })}" data-v-1a758fe7><span style="${ssrRenderStyle({ "color": "#ffb4ab", "font-weight": "700" })}" data-v-1a758fe7>84</span></div></div><div style="${ssrRenderStyle({ "height": "8rem", "display": "flex", "align-items": "flex-end", "gap": "4px" })}" data-v-1a758fe7><div style="${ssrRenderStyle({ "flex": "1", "background-color": "rgba(125, 244, 255, 0.2)", "height": "40%", "border-top-left-radius": "2px", "border-top-right-radius": "2px" })}" data-v-1a758fe7></div><div style="${ssrRenderStyle({ "flex": "1", "background-color": "rgba(125, 244, 255, 0.2)", "height": "60%", "border-top-left-radius": "2px", "border-top-right-radius": "2px" })}" data-v-1a758fe7></div><div style="${ssrRenderStyle({ "flex": "1", "background-color": "rgba(125, 244, 255, 0.2)", "height": "45%", "border-top-left-radius": "2px", "border-top-right-radius": "2px" })}" data-v-1a758fe7></div><div style="${ssrRenderStyle({ "flex": "1", "background-color": "rgba(125, 244, 255, 0.4)", "height": "80%", "border-top-left-radius": "2px", "border-top-right-radius": "2px" })}" data-v-1a758fe7></div><div style="${ssrRenderStyle({ "flex": "1", "background-color": "rgba(125, 244, 255, 0.6)", "height": "70%", "border-top-left-radius": "2px", "border-top-right-radius": "2px" })}" data-v-1a758fe7></div><div style="${ssrRenderStyle({ "flex": "1", "background-color": "#7df4ff", "height": "100%", "border-top-left-radius": "2px", "border-top-right-radius": "2px" })}" data-v-1a758fe7></div></div></div><div class="glass-card" data-v-1a758fe7><span class="material-symbols-outlined" style="${ssrRenderStyle({ "color": "#7df4ff", "margin-bottom": "0.75rem" })}" data-v-1a758fe7>security</span><div style="${ssrRenderStyle({ "font-size": "1.5rem", "font-weight": "600", "color": "white" })}" data-v-1a758fe7>Tier 1</div><div style="${ssrRenderStyle({ "font-size": "12px", "color": "#74829d" })}" data-v-1a758fe7>Security Rating</div></div><div class="glass-card" data-v-1a758fe7><span class="material-symbols-outlined" style="${ssrRenderStyle({ "color": "#d1bcff", "margin-bottom": "0.75rem" })}" data-v-1a758fe7>hub</span><div style="${ssrRenderStyle({ "font-size": "1.5rem", "font-weight": "600", "color": "white" })}" data-v-1a758fe7>4.2k</div><div style="${ssrRenderStyle({ "font-size": "12px", "color": "#74829d" })}" data-v-1a758fe7>Nodes Scanned</div></div></div></div></div></div></section><section class="features-section" data-v-1a758fe7><div class="hero-content" data-v-1a758fe7><div class="section-title" data-v-1a758fe7><h2 style="${ssrRenderStyle({ "font-size": "2rem", "font-weight": "600", "color": "white", "margin-bottom": "0.75rem" })}" data-v-1a758fe7>Enterprise-Grade Architecture</h2><p style="${ssrRenderStyle({ "font-size": "1.125rem", "color": "#74829d", "max-width": "40rem", "margin": "0 auto" })}" data-v-1a758fe7>Engineered for organizations that demand precision, speed, and uncompromising security.</p></div><div class="feature-grid" data-v-1a758fe7><div class="feature-card-large glass-card" data-v-1a758fe7><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-1a758fe7><span class="material-symbols-outlined" style="${ssrRenderStyle({ "font-size": "2.5rem", "color": "#7df4ff", "margin-bottom": "1rem" })}" data-v-1a758fe7>psychology</span><h3 style="${ssrRenderStyle({ "font-size": "1.5rem", "font-weight": "600", "color": "white", "margin-bottom": "0.75rem" })}" data-v-1a758fe7>Neural Risk Scoring</h3><p style="${ssrRenderStyle({ "font-size": "1rem", "color": "#74829d", "margin-bottom": "1.5rem" })}" data-v-1a758fe7>Our Gemini-powered engine processes millions of unstructured data points to identify emerging threats.</p></div><div style="${ssrRenderStyle({ "flex": "1", "height": "12rem", "border-radius": "0.5rem", "overflow": "hidden", "border": "1px solid rgba(255,255,255,0.1)" })}" data-v-1a758fe7><img style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" alt="AI" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATPbGNNR7rtI_ER6UfPHi5ct_o4BsWfpKzyheFKNJfjWSbSWpii3GPOxaY_TEUyzyShCfrcbjnawkazozGy7Q8l-K9OOvOrwldz_cHZiKW5PbPScoI2UT0il9vQp-yj8DIMuRQHxgna8QtSjFxdBGTIU7vCHa2pncq2aAxb6b6I5Kb6RKYmhL8MhHJtWT64tBB5OrA_8zoA828S18iycgC52kyzP9hms9sWzSVUeBGqdM00T9sPQWJyqmIbb1Jp6dDKh1GeanqeqA" data-v-1a758fe7></div></div><div class="glass-card" data-v-1a758fe7><span class="material-symbols-outlined" style="${ssrRenderStyle({ "color": "#d1bcff", "margin-bottom": "1rem", "font-size": "2rem" })}" data-v-1a758fe7>analytics</span><h3 style="${ssrRenderStyle({ "font-size": "1.5rem", "font-weight": "500", "color": "white", "margin-bottom": "0.75rem" })}" data-v-1a758fe7>Instant Insights</h3><p style="${ssrRenderStyle({ "font-size": "0.875rem", "color": "#74829d" })}" data-v-1a758fe7>Translate complex risk vectors into actionable summaries in real-time.</p></div></div></div></section></main><footer class="footer" data-v-1a758fe7><div class="footer-content" data-v-1a758fe7><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "0.5rem" })}" data-v-1a758fe7><span style="${ssrRenderStyle({ "font-size": "1.125rem", "font-weight": "700", "color": "#cbd5e1" })}" data-v-1a758fe7>RiskIntel AI</span><span style="${ssrRenderStyle({ "color": "#64748b" })}" data-v-1a758fe7>\xA9 2026 RiskIntel AI. Secure Intelligence.</span></div><nav style="${ssrRenderStyle({ "display": "flex", "flex-wrap": "wrap", "gap": "1.5rem" })}" data-v-1a758fe7><a style="${ssrRenderStyle({ "color": "#64748b", "text-decoration": "none", "font-size": "14px" })}" href="#" data-v-1a758fe7>Privacy</a><a style="${ssrRenderStyle({ "color": "#64748b", "text-decoration": "none", "font-size": "14px" })}" href="#" data-v-1a758fe7>Terms</a><a style="${ssrRenderStyle({ "color": "#64748b", "text-decoration": "none", "font-size": "14px" })}" href="#" data-v-1a758fe7>Security</a></nav></div></footer>`);
  if (_ctx.showAuthModal) {
    _push(ssrRenderComponent(_component_AuthModal, {
      onClose: ($event) => _ctx.showAuthModal = false
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1a758fe7"]]);

export { index as default };
//# sourceMappingURL=index-BY-rPySn.mjs.map
