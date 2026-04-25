import { computed } from 'vue';

export const useTheme = () => {
  const isDark = useState('isDark', () => true);

  // Use useHead to manage the <html> class reactively
  useHead({
    htmlAttrs: {
      class: computed(() => isDark.value ? 'dark' : 'light')
    }
  });

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    if (process.client) {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
    }
  };

  const initTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        isDark.value = savedTheme === 'dark';
      } else {
        // Default to dark if no preference is saved
        isDark.value = true;
      }
    }
  };

  return {
    isDark,
    toggleTheme,
    initTheme
  };
};
