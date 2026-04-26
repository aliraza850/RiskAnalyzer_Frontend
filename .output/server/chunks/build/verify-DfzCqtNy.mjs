import { _ as __nuxt_component_0 } from './nuxt-link-wMN7anpV.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter, useRoute } from 'vue-router';
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
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "verify",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useRoute();
    const verifying = ref(true);
    const error = ref("");
    const userEmail = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-surface flex flex-col items-center justify-center p-6 text-on-surface" }, _attrs))} data-v-05c4ec12><div class="max-w-md w-full text-center space-y-8 animate-fade-in" data-v-05c4ec12>`);
      if (verifying.value) {
        _push(`<div class="space-y-6" data-v-05c4ec12><div class="w-16 h-16 border-4 border-secondary-fixed/20 border-t-secondary-fixed rounded-full animate-spin mx-auto" data-v-05c4ec12></div><h2 class="font-headline-md text-headline-md text-white" data-v-05c4ec12>Verifying Intelligence Access</h2><p class="text-body-md text-on-primary-container" data-v-05c4ec12>Establishing secure connection to Gemini Risk Engine...</p></div>`);
      } else if (error.value) {
        _push(`<div class="space-y-6" data-v-05c4ec12><div class="w-16 h-16 bg-error-container/10 border border-error/30 rounded-full flex items-center justify-center mx-auto" data-v-05c4ec12><span class="material-symbols-outlined text-error text-3xl" data-v-05c4ec12>error</span></div><h2 class="font-headline-md text-headline-md text-white" data-v-05c4ec12>Verification Failed</h2><p class="text-body-md text-on-primary-container" data-v-05c4ec12>${ssrInterpolate(error.value)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "inline-block bg-secondary-fixed text-on-secondary-fixed px-8 py-3 rounded-xl font-bold hover:bg-secondary-fixed-dim transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Try Again `);
            } else {
              return [
                createTextVNode(" Try Again ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="space-y-6" data-v-05c4ec12><div class="w-16 h-16 bg-secondary-fixed/10 border border-secondary-fixed/30 rounded-full flex items-center justify-center mx-auto" data-v-05c4ec12><span class="material-symbols-outlined text-secondary-fixed text-3xl" data-v-05c4ec12>check_circle</span></div><h2 class="font-headline-md text-headline-md text-white" data-v-05c4ec12>Access Granted</h2><p class="text-body-md text-on-primary-container" data-v-05c4ec12>Welcome back, ${ssrInterpolate(userEmail.value)}. Redirecting to dashboard...</p></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/verify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const verify = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-05c4ec12"]]);

export { verify as default };
//# sourceMappingURL=verify-DfzCqtNy.mjs.map
