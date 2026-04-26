<template>
  <div class="modal-container" @click.self="$emit('close')">
    <div class="modal-backdrop" @click.self="$emit('close')"></div>
    <div class="modal-content">
      <button class="close-modal-btn" @click="$emit('close')">
        <span class="material-symbols-outlined">close</span>
      </button>

      <div style="margin-bottom: 2rem; text-align: center;">
        <div style="display: inline-flex; justify-content: center; align-items: center; width: 3rem; height: 3rem; background: rgba(125, 244, 255, 0.1); border-radius: 50%; margin-bottom: 1rem; color: #7df4ff;">
          <span class="material-symbols-outlined">security</span>
        </div>
        <h2 class="form-title">Neural Access Link</h2>
        <p class="form-subtitle">Initialize your secure risk intelligence session</p>
      </div>

      <form @submit.prevent="handleLogin">
        <div v-if="error" class="error-msg">
          <span class="material-symbols-outlined" style="vertical-align: middle; font-size: 1.1rem;">warning</span>
          {{ error }}
        </div>

        <div class="auth-form-group">
          <label class="auth-label">INTELLIGENCE IDENTIFIER</label>
          <div style="position: relative;">
            <span class="material-symbols-outlined" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: #74829d; font-size: 1.25rem;">alternate_email</span>
            <input 
              class="auth-input"
              style="padding-left: 2.75rem;"
              v-model="email" 
              type="email" 
              placeholder="operator@riskanalyzer.ai" 
              required
            />
          </div>
        </div>

        <div class="auth-form-group">
          <label class="auth-label">ACCESS KEYCODE</label>
          <div style="position: relative;">
            <span class="material-symbols-outlined" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: #74829d; font-size: 1.25rem;">lock</span>
            <input 
              class="auth-input"
              style="padding-left: 2.75rem;"
              v-model="password" 
              type="password" 
              placeholder="••••••••" 
              required
            />
          </div>
        </div>

        <button type="submit" class="auth-submit-btn" :disabled="loading">
          <template v-if="!loading">
            ESTABLISH LINK <span class="material-symbols-outlined" style="font-size: 1.25rem;">arrow_forward</span>
          </template>
          <template v-else>
            <span class="animate-spin material-symbols-outlined" style="font-size: 1.25rem; animation: spin-slow 2s linear infinite;">sync</span>
            LINKING...
          </template>
        </button>
      </form>

      <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center; color: #74829d; font-size: 0.75rem;">
        <p style="margin-bottom: 0.25rem;">Restricted access for authorized personnel only.</p>
        <p style="font-family: 'Space Grotesk', sans-serif; letter-spacing: 0.1em; color: #b9c7e4;">System: GEMINI-1.5-PRO ACTIVE</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useAuth, useRuntimeConfig } from '#imports';

const emit = defineEmits(['close']);
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
      user.value = data.user;
      localStorage.setItem('user', JSON.stringify(data.user));
      
      checkAuth(true);
      
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
</script>

<style src="./AuthModal.css" scoped></style>
