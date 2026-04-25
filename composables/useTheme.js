export const useTheme = () => {
  const isDark = useState('isDark', () => true);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    applyTheme();
  };

  const applyTheme = () => {
    if (!process.client) return;
    
    if (isDark.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const initTheme = () => {
    if (!process.client) return;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDark.value = savedTheme === 'dark';
    } else {
      // Default to dark but allow CSS :root to handle the light state
      isDark.value = true;
    }
    applyTheme();
  };

  return {
    isDark,
    toggleTheme,
    applyTheme,
    initTheme
  };
};
