<template>
  <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="$emit('close')"></div>
    
    <!-- Modal -->
    <div class="relative w-full max-w-md glass-card rounded-2xl p-8 overflow-hidden animate-fade-in">
      <div class="absolute -top-24 -right-24 w-48 h-48 bg-secondary-fixed/10 rounded-full blur-3xl"></div>
      
      <!-- Close Button -->
      <button @click="$emit('close')" class="absolute top-4 right-4 text-on-primary-container hover:text-white transition-colors">
        <span class="material-symbols-outlined">close</span>
      </button>

      <div v-if="!linkSent" class="space-y-6">
        <div class="text-center">
          <h2 class="font-headline-md text-headline-md text-white mb-2">Access Intelligence</h2>
          <p class="text-body-sm text-on-primary-container">Enter your email to receive a magic login link.</p>
        </div>

        <form @submit.prevent="requestLink" class="space-y-4">
          <div>
            <label for="email" class="block text-label-md text-primary mb-2">CORPORATE EMAIL</label>
            <input 
              v-model="email" 
              type="email" 
              id="email" 
              required 
              placeholder="name@company.com"
              class="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-white placeholder:text-on-primary-container/40 focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-all"
            >
          </div>

          <button 
            type="submit" 
            :disabled="loading"
            class="w-full bg-secondary-fixed text-on-secondary-fixed font-headline-md py-4 rounded-xl hover:bg-secondary-fixed-dim transition-all shadow-lg shadow-secondary-fixed/20 flex items-center justify-center gap-2"
          >
            <span v-if="loading" class="material-symbols-outlined animate-spin">progress_activity</span>
            <span v-else>Send Magic Link</span>
          </button>
        </form>

        <p v-if="error" class="text-error text-center text-body-sm bg-error-container/10 py-2 rounded-lg border border-error/20">
          {{ error }}
        </p>

        <div class="pt-4 border-t border-white/5 text-center">
          <p class="text-label-md text-on-primary-container">
            SECURED BY ZERO-TRUST ARCHITECTURE
          </p>
        </div>
      </div>

      <!-- Success State -->
      <div v-else class="text-center space-y-6 py-4">
        <div class="w-16 h-16 bg-secondary-fixed/10 border border-secondary-fixed/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <span class="material-symbols-outlined text-secondary-fixed text-3xl">mail</span>
        </div>
        <h2 class="font-headline-md text-headline-md text-white">Check Your Inbox</h2>
        <p class="text-body-md text-on-primary-container">
          We've sent a magic login link to <br><span class="text-white font-medium">{{ email }}</span>.
        </p>
        <p class="text-body-sm text-on-primary-container italic">
          The link will expire in 15 minutes.
        </p>
        <button @click="linkSent = false" class="text-secondary-fixed hover:underline text-label-md">
          Back to login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['close']);

const email = ref('');
const loading = ref(false);
const linkSent = ref(false);
const error = ref('');

const requestLink = async () => {
  loading.value = true;
  error.value = '';
  const config = useRuntimeConfig();
  
  try {
    const response = await fetch(`${config.public.apiBase}/auth/request-link`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value })
    });

    if (response.ok) {
      linkSent.value = true;
    } else {
      const data = await response.json();
      error.value = data.error || 'Failed to send link. Please try again.';
    }
  } catch (err) {
    error.value = 'Connection error. Is the backend running?';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.glass-card {
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Tokens */
.bg-surface-container { background-color: #152031; }
.border-outline-variant { border-color: #44474d; }
.text-on-primary-container { color: #74829d; }
.text-secondary-fixed { color: #7df4ff; }
.bg-secondary-fixed { background-color: #7df4ff; }
.text-on-secondary-fixed { color: #002022; }
.bg-secondary-fixed-dim { background-color: #00dbe9; }
.text-error { color: #ffb4ab; }
.bg-error-container { background-color: #93000a; }
.text-primary { color: #b9c7e4; }
.font-headline-md { font-family: 'Space Grotesk', sans-serif; font-size: 24px; font-weight: 500; }
.text-label-md { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; text-transform: uppercase; }
</style>
