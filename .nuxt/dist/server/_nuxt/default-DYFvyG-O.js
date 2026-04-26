import { _ as __nuxt_component_0$1 } from "./client-only-CZFZ56Um.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-D4JAXUX_.js";
import { computed, ref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { b as useRoute } from "../server.mjs";
import { u as useAuth } from "./useAuth-CgcXupjx.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/hookable/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/defu/dist/defu.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ufo/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/unctx/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
const useTheme = () => {
  const isDark = computed(() => true);
  const toggleTheme = () => {
  };
  const initTheme = () => {
  };
  return {
    isDark,
    toggleTheme,
    initTheme
  };
};
const _sfc_main$2 = {
  setup() {
    const route = useRoute();
    const { user, logout } = useAuth();
    const { isDark } = useTheme();
    const isMenuOpen = ref(false);
    const handleLogout = async () => {
      isMenuOpen.value = false;
      await logout();
    };
    return {
      route,
      user,
      isDark,
      isMenuOpen,
      handleLogout
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_ClientOnly = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header nav-glass" }, _attrs))} data-v-641cffc4><div class="logo-container" data-v-641cffc4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: _ctx.user ? "/dashboard" : "/",
    class: "logo logo-gradient"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RiskAnalyzer`);
      } else {
        return [
          createTextVNode("RiskAnalyzer")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="search-container" data-v-641cffc4><span class="material-symbols-outlined search-icon" data-v-641cffc4>search</span><input class="search-input" placeholder="Search insights..." type="text" data-v-641cffc4></div><nav class="nav-links" data-v-641cffc4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/dashboard",
    class: ["nav-link", { active: _ctx.route.path === "/dashboard" }]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="material-symbols-outlined" style="${ssrRenderStyle(_ctx.route.path === "/dashboard" ? "font-variation-settings: 'FILL' 1;" : "")}" data-v-641cffc4${_scopeId}>dashboard</span><span data-v-641cffc4${_scopeId}>Overview</span>`);
      } else {
        return [
          createVNode("span", {
            class: "material-symbols-outlined",
            style: _ctx.route.path === "/dashboard" ? "font-variation-settings: 'FILL' 1;" : ""
          }, "dashboard", 4),
          createVNode("span", null, "Overview")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/analyze",
    class: ["nav-link", { active: _ctx.route.path === "/analyze" }]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="material-symbols-outlined" style="${ssrRenderStyle(_ctx.route.path === "/analyze" ? "font-variation-settings: 'FILL' 1;" : "")}" data-v-641cffc4${_scopeId}>security</span><span data-v-641cffc4${_scopeId}>Threat Actors</span>`);
      } else {
        return [
          createVNode("span", {
            class: "material-symbols-outlined",
            style: _ctx.route.path === "/analyze" ? "font-variation-settings: 'FILL' 1;" : ""
          }, "security", 4),
          createVNode("span", null, "Threat Actors")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav></div><div class="actions-container" data-v-641cffc4><div class="desktop-actions" data-v-641cffc4>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`</div><button class="hamburger-btn" data-v-641cffc4><span class="material-symbols-outlined" data-v-641cffc4>menu</span></button></div>`);
  if (_ctx.isMenuOpen) {
    _push(`<div class="mobile-drawer" data-v-641cffc4><div class="drawer-overlay" data-v-641cffc4></div><div class="drawer-content" data-v-641cffc4><div class="drawer-header" data-v-641cffc4><span class="logo-gradient" style="${ssrRenderStyle({ "font-size": "1.25rem", "font-weight": "700" })}" data-v-641cffc4>RiskAnalyzer</span><button class="close-btn" data-v-641cffc4><span class="material-symbols-outlined" data-v-641cffc4>close</span></button></div><nav class="mobile-nav" data-v-641cffc4>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/dashboard",
      onClick: ($event) => _ctx.isMenuOpen = false,
      class: ["mobile-link", { active: _ctx.route.path === "/dashboard" }]
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="material-symbols-outlined" data-v-641cffc4${_scopeId}>dashboard</span><span data-v-641cffc4${_scopeId}>Overview</span>`);
        } else {
          return [
            createVNode("span", { class: "material-symbols-outlined" }, "dashboard"),
            createVNode("span", null, "Overview")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/analyze",
      onClick: ($event) => _ctx.isMenuOpen = false,
      class: ["mobile-link", { active: _ctx.route.path === "/analyze" }]
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="material-symbols-outlined" data-v-641cffc4${_scopeId}>security</span><span data-v-641cffc4${_scopeId}>Threat Actors</span>`);
        } else {
          return [
            createVNode("span", { class: "material-symbols-outlined" }, "security"),
            createVNode("span", null, "Threat Actors")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<div style="${ssrRenderStyle({ "height": "1px", "background": "rgba(255,255,255,0.1)", "margin": "0.5rem 0" })}" data-v-641cffc4></div><button style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "gap": "1rem", "padding": "1rem", "border-radius": "0.75rem", "color": "#64748b", "background": "none", "border": "none", "cursor": "not-allowed", "opacity": "0.5", "width": "100%", "text-align": "left" })}" data-v-641cffc4><span class="material-symbols-outlined" data-v-641cffc4>settings</span><span data-v-641cffc4>Admin / Settings</span></button></nav><div style="${ssrRenderStyle({ "margin-top": "auto", "border-top": "1px solid rgba(255,255,255,0.1)", "padding-top": "1.5rem" })}" data-v-641cffc4>`);
    if (_ctx.user) {
      _push(`<button style="${ssrRenderStyle({ "width": "100%", "padding": "0.75rem", "border-radius": "0.75rem", "background": "rgba(239,68,68,0.1)", "color": "#ef4444", "border": "1px solid rgba(239,68,68,0.2)", "font-weight": "700", "letter-spacing": "0.1em", "font-size": "0.75rem", "cursor": "pointer" })}" data-v-641cffc4> LOG OUT </button>`);
    } else {
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        onClick: ($event) => _ctx.isMenuOpen = false,
        style: { "display": "block", "width": "100%", "padding": "1rem", "text-align": "center", "border-radius": "0.75rem", "background": "var(--color-surface-tint)", "color": "var(--color-on-primary)", "font-weight": "700", "letter-spacing": "0.1em", "font-size": "0.75rem", "text-decoration": "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` SIGN IN `);
          } else {
            return [
              createTextVNode(" SIGN IN ")
            ];
          }
        }),
        _: 1
      }, _parent));
    }
    _push(`</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StitchTopNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-641cffc4"]]);
const _sfc_main$1 = {
  setup() {
    const route = useRoute();
    return { route };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bottom-nav" }, _attrs))} data-v-f395daa6>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/dashboard",
    class: ["bottom-nav-link", { active: _ctx.route.path === "/dashboard" }]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="material-symbols-outlined bottom-nav-icon" style="${ssrRenderStyle(_ctx.route.path === "/dashboard" ? "font-variation-settings: 'FILL' 1;" : "")}" data-v-f395daa6${_scopeId}>dashboard</span><span class="bottom-nav-text" data-v-f395daa6${_scopeId}>Overview</span>`);
      } else {
        return [
          createVNode("span", {
            class: "material-symbols-outlined bottom-nav-icon",
            style: _ctx.route.path === "/dashboard" ? "font-variation-settings: 'FILL' 1;" : ""
          }, "dashboard", 4),
          createVNode("span", { class: "bottom-nav-text" }, "Overview")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/analyze",
    class: ["bottom-nav-link", { active: _ctx.route.path === "/analyze" }]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="material-symbols-outlined bottom-nav-icon" style="${ssrRenderStyle(_ctx.route.path === "/analyze" ? "font-variation-settings: 'FILL' 1;" : "")}" data-v-f395daa6${_scopeId}>security</span><span class="bottom-nav-text" data-v-f395daa6${_scopeId}>Analyze</span>`);
      } else {
        return [
          createVNode("span", {
            class: "material-symbols-outlined bottom-nav-icon",
            style: _ctx.route.path === "/analyze" ? "font-variation-settings: 'FILL' 1;" : ""
          }, "security", 4),
          createVNode("span", { class: "bottom-nav-text" }, "Analyze")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StitchBottomNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f395daa6"]]);
const _sfc_main = {
  setup() {
    const route = useRoute();
    useAuth();
    useTheme();
    const isLanding = computed(() => route.path === "/");
    return {
      route,
      isLanding
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0$1;
  const _component_StitchTopNav = __nuxt_component_1;
  const _component_StitchBottomNav = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    fallback: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-loading-placeholder"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "bg-loading-placeholder" })
        ];
      }
    })
  }, _parent));
  _push(`<div class="main-content">`);
  if (!_ctx.isLanding) {
    _push(ssrRenderComponent(_component_StitchTopNav, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<main class="${ssrRenderClass([{ "with-nav": !_ctx.isLanding }, "page-main"])}">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  if (!_ctx.isLanding) {
    _push(ssrRenderComponent(_component_StitchBottomNav, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-DYFvyG-O.js.map
