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
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const initTheme = () => {
    if (!process.client) return;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDark.value = savedTheme === 'dark';
    } else {
      isDark.value = true; // Default to dark
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
