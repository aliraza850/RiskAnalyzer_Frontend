import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '~/composables/useAuth';

export default {
  emits: ['close'],
  setup(props, { emit }) {
    const router = useRouter();
    const { checkAuth } = useAuth();

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
          localStorage.setItem('user', JSON.stringify(data.user));
          await checkAuth();
          
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
