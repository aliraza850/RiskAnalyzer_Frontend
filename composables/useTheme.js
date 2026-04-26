import { computed } from 'vue';

export const useTheme = () => {
  // Always true as per request to remove bright theme
  const isDark = computed(() => true);

  const toggleTheme = () => {
    // Theme switching is disabled
  };

  const initTheme = () => {
    // No initialization needed
  };

  return {
    isDark,
    toggleTheme,
    initTheme
  };
};
