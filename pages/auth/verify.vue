<template>
  <div class="min-h-screen bg-surface flex flex-col items-center justify-center p-6 text-on-surface">
    <div class="max-w-md w-full text-center space-y-8 animate-fade-in">
      <div v-if="verifying" class="space-y-6">
        <div class="w-16 h-16 border-4 border-secondary-fixed/20 border-t-secondary-fixed rounded-full animate-spin mx-auto"></div>
        <h2 class="font-headline-md text-headline-md text-white">Verifying Intelligence Access</h2>
        <p class="text-body-md text-on-primary-container">Establishing secure connection to Gemini Risk Engine...</p>
      </div>

      <div v-else-if="error" class="space-y-6">
        <div class="w-16 h-16 bg-error-container/10 border border-error/30 rounded-full flex items-center justify-center mx-auto">
          <span class="material-symbols-outlined text-error text-3xl">error</span>
        </div>
        <h2 class="font-headline-md text-headline-md text-white">Verification Failed</h2>
        <p class="text-body-md text-on-primary-container">{{ error }}</p>
        <NuxtLink to="/" class="inline-block bg-secondary-fixed text-on-secondary-fixed px-8 py-3 rounded-xl font-bold hover:bg-secondary-fixed-dim transition-all">
          Try Again
        </NuxtLink>
      </div>

      <div v-else class="space-y-6">
        <div class="w-16 h-16 bg-secondary-fixed/10 border border-secondary-fixed/30 rounded-full flex items-center justify-center mx-auto">
          <span class="material-symbols-outlined text-secondary-fixed text-3xl">check_circle</span>
        </div>
        <h2 class="font-headline-md text-headline-md text-white">Access Granted</h2>
        <p class="text-body-md text-on-primary-container">Welcome back, {{ userEmail }}. Redirecting to dashboard...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

definePageMeta({
  layout: false
});

const router = useRouter();
const route = useRoute();

const verifying = ref(true);
const error = ref('');
const userEmail = ref('');

onMounted(async () => {
  const token = route.query.token;
  const config = useRuntimeConfig();

  if (!token) {
    error.value = 'Security token missing or invalid.';
    verifying.value = false;
    return;
  }

  try {
    const response = await fetch(`${config.public.apiBase}/auth/verify?token=${token}`);

    if (response.ok) {
      const data = await response.json();
      userEmail.value = data.user.email;
      
      // Store user info (minimal)
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Short delay for UX
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } else {
      const data = await response.json();
      error.value = data.error || 'The link is expired or has already been used.';
    }
  } catch (err) {
    error.value = 'Failed to connect to the intelligence server.';
  } finally {
    verifying.value = false;
  }
});
</script>

<style scoped>
.bg-surface { background-color: #081425; }
.text-white { color: #ffffff; }
.text-on-surface { color: #d8e3fb; }
.text-on-primary-container { color: #74829d; }
.text-secondary-fixed { color: #7df4ff; }
.bg-secondary-fixed { background-color: #7df4ff; }
.text-on-secondary-fixed { color: #002022; }
.text-error { color: #ffb4ab; }
.bg-error-container { background-color: #93000a; }
.font-headline-md { font-family: 'Space Grotesk', sans-serif; font-size: 24px; font-weight: 500; }

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>
