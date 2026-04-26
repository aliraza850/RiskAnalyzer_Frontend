import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuth } from '~/composables/useAuth';
import { useTheme } from '~/composables/useTheme';

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
