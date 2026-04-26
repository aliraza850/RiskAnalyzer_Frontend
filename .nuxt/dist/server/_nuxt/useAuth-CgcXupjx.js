import { toRef, isRef } from "vue";
import { c as useNuxtApp, u as useRouter, a as useRuntimeConfig } from "../server.mjs";
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useAuth = () => {
  const user = useState("auth_user", () => null);
  const loading = useState("auth_loading", () => true);
  const initialized = useState("auth_initialized", () => false);
  const router = useRouter();
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;
  const hydrateFromStorage = () => {
  };
  const checkAuth = async (force = false) => {
    if (initialized.value && !force) {
      loading.value = false;
      return;
    }
    loading.value = true;
    try {
      const response = await fetch(`${apiBase}/auth/me`, {
        credentials: "include"
      });
      if (response.ok) {
        const data = await response.json();
        user.value = data.user;
        if (false) ;
      } else {
        user.value = null;
        if (false) ;
      }
      initialized.value = true;
    } catch (error) {
      console.error("Auth verification failed:", error);
    } finally {
      loading.value = false;
    }
  };
  const logout = async () => {
    try {
      await fetch(`${apiBase}/auth/logout`, {
        method: "POST",
        credentials: "include"
      });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      user.value = null;
      initialized.value = false;
      router.push("/");
    }
  };
  return {
    user,
    loading,
    initialized,
    checkAuth,
    hydrateFromStorage,
    logout
  };
};
export {
  useAuth as u
};
//# sourceMappingURL=useAuth-CgcXupjx.js.map
