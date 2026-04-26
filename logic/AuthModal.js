import { ref } from 'vue';
import { useRouter, useAuth, useRuntimeConfig } from '#imports';

export default {
  emits: ['close'],
  setup(props, { emit }) {
    const router = useRouter();
    const { checkAuth, user } = useAuth();

    const email = ref('');
    const password = ref('');
    const loading = ref(false);
    const error = ref('');

    const handleLogin = async () => {
      loading.value = true;
      error.value = '';
      const config = useRuntimeConfig();
      
      try {
        const response = await fetch(`${config.public.apiBase}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ 
            email: email.value,
            password: password.value
          })
        });

        if (response.ok) {
          const data = await response.json();
          // Directly set user state so dashboard sees it immediately
          user.value = data.user;
          localStorage.setItem('user', JSON.stringify(data.user));
          // Force re-verify with server
          await checkAuth(true);
          
          emit('close');
          router.push('/dashboard');
        } else {
          const data = await response.json();
          error.value = data.error || 'Authentication failed. Access denied.';
        }
      } catch (err) {
        error.value = 'Neural link failure. Check system connectivity.';
      } finally {
        loading.value = false;
      }
    };

    return {
      email,
      password,
      loading,
      error,
      handleLogin
    };
  }
};
