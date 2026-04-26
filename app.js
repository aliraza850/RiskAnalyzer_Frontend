import { computed, onMounted } from 'vue';
import { useRoute, useAuth, useTheme } from '#imports';

export default {
  setup() {
    const route = useRoute();
    const { checkAuth } = useAuth();
    const { isDark, initTheme } = useTheme();
    const isLanding = computed(() => route.path === '/');

    onMounted(() => {
      initTheme();
      checkAuth();
    });

    return {
      isDark,
      isLanding
    };
  }
};
