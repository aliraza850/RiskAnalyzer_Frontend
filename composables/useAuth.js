import { useRouter } from 'vue-router';

export const useAuth = () => {
  // Use unique keys for globally shared state
  const user = useState('auth_user', () => null);
  const loading = useState('auth_loading', () => true);
  const initialized = useState('auth_initialized', () => false);
  
  const router = useRouter();
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;

  const checkAuth = async (force = false) => {
    if (initialized.value && !force) return;
    
    loading.value = true;
    try {
      // 1. Initial check from localStorage (immediate UI response)
      if (process.client) {
        const localUser = localStorage.getItem('user');
        if (localUser && !user.value) {
          user.value = JSON.parse(localUser);
        }
      }

      // 2. Verified check from API
      const response = await fetch(`${apiBase}/auth/me`, {
        credentials: 'include'
      });
      
      if (response.ok) {
        const data = await response.json();
        user.value = data.user;
        if (process.client) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }
      } else {
        user.value = null;
        if (process.client) {
          localStorage.removeItem('user');
        }
      }
      initialized.value = true;
    } catch (error) {
      console.error('Auth verification failed:', error);
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    try {
      await fetch(`${apiBase}/auth/logout`, { 
        method: 'POST',
        credentials: 'include'
      });
      user.value = null;
      if (process.client) {
        localStorage.removeItem('user');
      }
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return {
    user,
    loading,
    initialized,
    checkAuth,
    logout
  };
};
