import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export const useAuth = () => {
  const user = ref(null);
  const loading = ref(true);
  const router = useRouter();
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;

  const checkAuth = async () => {
    loading.value = true;
    try {
      // First check localStorage for immediate UI feedback
      const localUser = localStorage.getItem('user');
      if (localUser) {
        user.value = JSON.parse(localUser);
      }

      // Then verify with backend (session cookie)
      const response = await fetch(`${apiBase}/auth/me`, {
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        user.value = data.user;
        localStorage.setItem('user', JSON.stringify(data.user));
      } else {
        user.value = null;
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
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
      localStorage.removeItem('user');
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return {
    user,
    loading,
    checkAuth,
    logout
  };
};
