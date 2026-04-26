import { useRouter, useRuntimeConfig } from '#imports';

export const useAuth = () => {
  // Globally shared state via Nuxt useState
  const user = useState('auth_user', () => null);
  const loading = useState('auth_loading', () => true);
  const initialized = useState('auth_initialized', () => false);

  const router = useRouter();
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;

  // Hydrate user from localStorage instantly — always, no guard
  const hydrateFromStorage = () => {
    if (process.client && !user.value) {
      const localUser = localStorage.getItem('user');
      if (localUser) {
        try {
          user.value = JSON.parse(localUser);
        } catch {
          localStorage.removeItem('user');
        }
      }
    }
  };

  const checkAuth = async (force = false) => {
    // Always try to hydrate from localStorage first (instant UI)
    hydrateFromStorage();

    // Skip API call if already initialized and not forced
    if (initialized.value && !force) return;

    loading.value = true;
    try {
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
      // Keep the localStorage-hydrated user on network failure
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
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      user.value = null;
      initialized.value = false;
      if (process.client) {
        localStorage.removeItem('user');
      }
      router.push('/');
    }
  };

  return {
    user,
    loading,
    initialized,
    checkAuth,
    hydrateFromStorage,
    logout
  };
};
