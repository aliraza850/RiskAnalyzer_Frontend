import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useRouter } from "../server.mjs";
import { u as useAuth } from "./useAuth-CgcXupjx.js";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/hookable/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/unctx/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/defu/dist/defu.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ufo/dist/index.mjs";
const _sfc_main$1 = {
  __name: "AuthModal",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    useRouter();
    useAuth();
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const error = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-container" }, _attrs))} data-v-afedfc54><div class="modal-backdrop" data-v-afedfc54></div><div class="modal-content" data-v-afedfc54><button class="close-modal-btn" data-v-afedfc54><span class="material-symbols-outlined" data-v-afedfc54>close</span></button><div style="${ssrRenderStyle({ "margin-bottom": "2rem", "text-align": "center" })}" data-v-afedfc54><div style="${ssrRenderStyle({ "display": "inline-flex", "justify-content": "center", "align-items": "center", "width": "3rem", "height": "3rem", "background": "rgba(125, 244, 255, 0.1)", "border-radius": "50%", "margin-bottom": "1rem", "color": "#7df4ff" })}" data-v-afedfc54><span class="material-symbols-outlined" data-v-afedfc54>security</span></div><h2 class="form-title" data-v-afedfc54>Neural Access Link</h2><p class="form-subtitle" data-v-afedfc54>Initialize your secure risk intelligence session</p></div><form data-v-afedfc54>`);
      if (error.value) {
        _push(`<div class="error-msg" data-v-afedfc54><span class="material-symbols-outlined" style="${ssrRenderStyle({ "vertical-align": "middle", "font-size": "1.1rem" })}" data-v-afedfc54>warning</span> ${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="auth-form-group" data-v-afedfc54><label class="auth-label" data-v-afedfc54>INTELLIGENCE IDENTIFIER</label><div style="${ssrRenderStyle({ "position": "relative" })}" data-v-afedfc54><span class="material-symbols-outlined" style="${ssrRenderStyle({ "position": "absolute", "left": "1rem", "top": "50%", "transform": "translateY(-50%)", "color": "#74829d", "font-size": "1.25rem" })}" data-v-afedfc54>alternate_email</span><input class="auth-input" style="${ssrRenderStyle({ "padding-left": "2.75rem" })}"${ssrRenderAttr("value", email.value)} type="email" placeholder="operator@riskanalyzer.ai" required data-v-afedfc54></div></div><div class="auth-form-group" data-v-afedfc54><label class="auth-label" data-v-afedfc54>ACCESS KEYCODE</label><div style="${ssrRenderStyle({ "position": "relative" })}" data-v-afedfc54><span class="material-symbols-outlined" style="${ssrRenderStyle({ "position": "absolute", "left": "1rem", "top": "50%", "transform": "translateY(-50%)", "color": "#74829d", "font-size": "1.25rem" })}" data-v-afedfc54>lock</span><input class="auth-input" style="${ssrRenderStyle({ "padding-left": "2.75rem" })}"${ssrRenderAttr("value", password.value)} type="password" placeholder="••••••••" required data-v-afedfc54></div></div><button type="submit" class="auth-submit-btn"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-afedfc54>`);
      if (!loading.value) {
        _push(`<!--[--> ESTABLISH LINK <span class="material-symbols-outlined" style="${ssrRenderStyle({ "font-size": "1.25rem" })}" data-v-afedfc54>arrow_forward</span><!--]-->`);
      } else {
        _push(`<!--[--><span class="animate-spin material-symbols-outlined" style="${ssrRenderStyle({ "font-size": "1.25rem", "animation": "spin-slow 2s linear infinite" })}" data-v-afedfc54>sync</span> LINKING... <!--]-->`);
      }
      _push(`</button></form><div style="${ssrRenderStyle({ "margin-top": "2rem", "padding-top": "1.5rem", "border-top": "1px solid rgba(255, 255, 255, 0.05)", "text-align": "center", "color": "#74829d", "font-size": "0.75rem" })}" data-v-afedfc54><p style="${ssrRenderStyle({ "margin-bottom": "0.25rem" })}" data-v-afedfc54>Restricted access for authorized personnel only.</p><p style="${ssrRenderStyle({ "font-family": "'Space Grotesk', sans-serif", "letter-spacing": "0.1em", "color": "#b9c7e4" })}" data-v-afedfc54>System: GEMINI-1.5-PRO ACTIVE</p></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AuthModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-afedfc54"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showAuthModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthModal = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-page" }, _attrs))} data-v-63173f3f><main style="${ssrRenderStyle({ "flex-grow": "1" })}" data-v-63173f3f><section class="hero-section" data-v-63173f3f><div class="hero-bg-decoration" data-v-63173f3f><div class="blob-1" data-v-63173f3f></div><div class="blob-2" data-v-63173f3f></div></div><div class="hero-content" data-v-63173f3f><div class="hero-grid" data-v-63173f3f><div class="hero-text-block" data-v-63173f3f><div class="hero-badge" data-v-63173f3f><span style="${ssrRenderStyle({ "width": "8px", "height": "8px", "border-radius": "9999px", "background-color": "#00dbe9" })}" class="animate-pulse" data-v-63173f3f></span><span style="${ssrRenderStyle({ "font-size": "12px", "color": "#b9c7e4", "letter-spacing": "0.1em", "font-weight": "600" })}" data-v-63173f3f>GEMINI AI INTEGRATED</span></div><h1 class="hero-title" data-v-63173f3f> AI-Powered Risk Intelligence for Smarter Decisions </h1><p class="hero-subtitle" data-v-63173f3f> Analyze business risks in seconds with Gemini AI. Get instant scores, actionable insights, and mitigation strategies. </p><div style="${ssrRenderStyle({ "display": "flex", "flex-wrap": "wrap", "gap": "1rem", "padding-top": "1rem" })}" data-v-63173f3f><button class="btn-primary" data-v-63173f3f> Get Started <span class="material-symbols-outlined" data-v-63173f3f>arrow_forward</span></button><button class="btn-outline" data-v-63173f3f><span class="material-symbols-outlined" data-v-63173f3f>play_circle</span> Watch Demo </button></div><div class="trust-metrics" data-v-63173f3f><div class="metric-item" data-v-63173f3f><div class="value" data-v-63173f3f>99.9%</div><div class="label" data-v-63173f3f>Analysis Accuracy</div></div><div class="metric-divider" data-v-63173f3f></div><div class="metric-item" data-v-63173f3f><div class="value" data-v-63173f3f>&lt; 2s</div><div class="label" data-v-63173f3f>Processing Latency</div></div><div class="metric-divider" data-v-63173f3f></div><div class="metric-item" data-v-63173f3f><div class="value" data-v-63173f3f>500+</div><div class="label" data-v-63173f3f>Risk Vectors</div></div></div></div><div class="hero-visual" data-v-63173f3f><div class="bento-grid" data-v-63173f3f><div class="glass-card card-wide" data-v-63173f3f><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between", "align-items": "flex-start", "margin-bottom": "2rem" })}" data-v-63173f3f><div data-v-63173f3f><div style="${ssrRenderStyle({ "font-size": "12px", "color": "#b9c7e4", "margin-bottom": "0.5rem" })}" data-v-63173f3f>LIVE RISK MONITOR</div><div style="${ssrRenderStyle({ "font-size": "1.5rem", "font-weight": "600", "color": "white" })}" data-v-63173f3f>Systemic Volatility</div></div><div class="risk-pulse" style="${ssrRenderStyle({ "width": "3rem", "height": "3rem", "display": "flex", "align-items": "center", "justify-content": "center", "background-color": "rgba(147, 0, 10, 0.2)", "border": "1px solid rgba(255, 180, 171, 0.3)", "border-radius": "9999px" })}" data-v-63173f3f><span style="${ssrRenderStyle({ "color": "#ffb4ab", "font-weight": "700" })}" data-v-63173f3f>84</span></div></div><div style="${ssrRenderStyle({ "height": "8rem", "display": "flex", "align-items": "flex-end", "gap": "4px" })}" data-v-63173f3f><div style="${ssrRenderStyle({ "flex": "1", "background-color": "rgba(125, 244, 255, 0.2)", "height": "40%", "border-top-left-radius": "2px", "border-top-right-radius": "2px" })}" data-v-63173f3f></div><div style="${ssrRenderStyle({ "flex": "1", "background-color": "rgba(125, 244, 255, 0.2)", "height": "60%", "border-top-left-radius": "2px", "border-top-right-radius": "2px" })}" data-v-63173f3f></div><div style="${ssrRenderStyle({ "flex": "1", "background-color": "rgba(125, 244, 255, 0.2)", "height": "45%", "border-top-left-radius": "2px", "border-top-right-radius": "2px" })}" data-v-63173f3f></div><div style="${ssrRenderStyle({ "flex": "1", "background-color": "rgba(125, 244, 255, 0.4)", "height": "80%", "border-top-left-radius": "2px", "border-top-right-radius": "2px" })}" data-v-63173f3f></div><div style="${ssrRenderStyle({ "flex": "1", "background-color": "rgba(125, 244, 255, 0.6)", "height": "70%", "border-top-left-radius": "2px", "border-top-right-radius": "2px" })}" data-v-63173f3f></div><div style="${ssrRenderStyle({ "flex": "1", "background-color": "#7df4ff", "height": "100%", "border-top-left-radius": "2px", "border-top-right-radius": "2px" })}" data-v-63173f3f></div></div></div><div class="glass-card" data-v-63173f3f><span class="material-symbols-outlined" style="${ssrRenderStyle({ "color": "#7df4ff", "margin-bottom": "0.75rem" })}" data-v-63173f3f>security</span><div style="${ssrRenderStyle({ "font-size": "1.5rem", "font-weight": "600", "color": "white" })}" data-v-63173f3f>Tier 1</div><div style="${ssrRenderStyle({ "font-size": "12px", "color": "#74829d" })}" data-v-63173f3f>Security Rating</div></div><div class="glass-card" data-v-63173f3f><span class="material-symbols-outlined" style="${ssrRenderStyle({ "color": "#d1bcff", "margin-bottom": "0.75rem" })}" data-v-63173f3f>hub</span><div style="${ssrRenderStyle({ "font-size": "1.5rem", "font-weight": "600", "color": "white" })}" data-v-63173f3f>4.2k</div><div style="${ssrRenderStyle({ "font-size": "12px", "color": "#74829d" })}" data-v-63173f3f>Nodes Scanned</div></div></div></div></div></div></section><section class="features-section" data-v-63173f3f><div class="hero-content" data-v-63173f3f><div class="section-title" data-v-63173f3f><h2 style="${ssrRenderStyle({ "font-size": "2rem", "font-weight": "600", "color": "white", "margin-bottom": "0.75rem" })}" data-v-63173f3f>Enterprise-Grade Architecture</h2><p style="${ssrRenderStyle({ "font-size": "1.125rem", "color": "#74829d", "max-width": "40rem", "margin": "0 auto" })}" data-v-63173f3f>Engineered for organizations that demand precision, speed, and uncompromising security.</p></div><div class="feature-grid" data-v-63173f3f><div class="feature-card-large glass-card" data-v-63173f3f><div style="${ssrRenderStyle({ "flex": "1" })}" data-v-63173f3f><span class="material-symbols-outlined" style="${ssrRenderStyle({ "font-size": "2.5rem", "color": "#7df4ff", "margin-bottom": "1rem" })}" data-v-63173f3f>psychology</span><h3 style="${ssrRenderStyle({ "font-size": "1.5rem", "font-weight": "600", "color": "white", "margin-bottom": "0.75rem" })}" data-v-63173f3f>Neural Risk Scoring</h3><p style="${ssrRenderStyle({ "font-size": "1rem", "color": "#74829d", "margin-bottom": "1.5rem" })}" data-v-63173f3f>Our Gemini-powered engine processes millions of unstructured data points to identify emerging threats.</p></div><div style="${ssrRenderStyle({ "flex": "1", "height": "12rem", "border-radius": "0.5rem", "overflow": "hidden", "border": "1px solid rgba(255,255,255,0.1)" })}" data-v-63173f3f><img style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" alt="AI" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATPbGNNR7rtI_ER6UfPHi5ct_o4BsWfpKzyheFKNJfjWSbSWpii3GPOxaY_TEUyzyShCfrcbjnawkazozGy7Q8l-K9OOvOrwldz_cHZiKW5PbPScoI2UT0il9vQp-yj8DIMuRQHxgna8QtSjFxdBGTIU7vCHa2pncq2aAxb6b6I5Kb6RKYmhL8MhHJtWT64tBB5OrA_8zoA828S18iycgC52kyzP9hms9sWzSVUeBGqdM00T9sPQWJyqmIbb1Jp6dDKh1GeanqeqA" data-v-63173f3f></div></div><div class="glass-card" data-v-63173f3f><span class="material-symbols-outlined" style="${ssrRenderStyle({ "color": "#d1bcff", "margin-bottom": "1rem", "font-size": "2rem" })}" data-v-63173f3f>analytics</span><h3 style="${ssrRenderStyle({ "font-size": "1.5rem", "font-weight": "500", "color": "white", "margin-bottom": "0.75rem" })}" data-v-63173f3f>Instant Insights</h3><p style="${ssrRenderStyle({ "font-size": "0.875rem", "color": "#74829d" })}" data-v-63173f3f>Translate complex risk vectors into actionable summaries in real-time.</p></div></div></div></section></main><footer class="footer" data-v-63173f3f><div class="footer-content" data-v-63173f3f><div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "gap": "0.5rem" })}" data-v-63173f3f><span style="${ssrRenderStyle({ "font-size": "1.125rem", "font-weight": "700", "color": "#cbd5e1" })}" data-v-63173f3f>RiskIntel AI</span><span style="${ssrRenderStyle({ "color": "#64748b" })}" data-v-63173f3f>© 2026 RiskIntel AI. Secure Intelligence.</span></div><nav style="${ssrRenderStyle({ "display": "flex", "flex-wrap": "wrap", "gap": "1.5rem" })}" data-v-63173f3f><a style="${ssrRenderStyle({ "color": "#64748b", "text-decoration": "none", "font-size": "14px" })}" href="#" data-v-63173f3f>Privacy</a><a style="${ssrRenderStyle({ "color": "#64748b", "text-decoration": "none", "font-size": "14px" })}" href="#" data-v-63173f3f>Terms</a><a style="${ssrRenderStyle({ "color": "#64748b", "text-decoration": "none", "font-size": "14px" })}" href="#" data-v-63173f3f>Security</a></nav></div></footer>`);
      if (showAuthModal.value) {
        _push(ssrRenderComponent(_component_AuthModal, {
          onClose: ($event) => showAuthModal.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-63173f3f"]]);
export {
  index as default
};
//# sourceMappingURL=index-CifxrsOw.js.map
