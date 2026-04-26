import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAuth } from '~/composables/useAuth';
import { useTheme } from '~/composables/useTheme';

export default {
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
