import { computed } from 'vue';

export const useTheme = () => {
  // Always default to true (Dark Mode) on every fresh visit
  const isDark = useState('isDark', () => true);

  // Sync the 'dark' class to the <html> tag reactively
  useHead({
    htmlAttrs: {
      class: computed(() => isDark.value ? 'dark' : 'light')
    }
  });

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    // We are no longer saving to localStorage as per request
  };

  const initTheme = () => {
    // Reset to Dark Mode every time the app initializes/refreshes
    isDark.value = true;
  };

  return {
    isDark,
    toggleTheme,
    initTheme
  };
};
