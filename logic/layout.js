import { computed, onMounted } from 'vue';
import { useRoute, useAuth, useTheme } from '#imports';

export default {
  setup() {
    const route = useRoute();
    const { checkAuth, hydrateFromStorage } = useAuth();
    const { initTheme } = useTheme();

    const isLanding = computed(() => route.path === '/');

    onMounted(() => {
      initTheme();
      hydrateFromStorage();
      checkAuth();
    });

    return {
      route,
      isLanding
    };
  }
};
