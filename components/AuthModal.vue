<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content auth-glass">
      <button class="close-btn" @click="$emit('close')">
        <span class="material-symbols-outlined">close</span>
      </button>

      <div class="auth-header">
        <div class="auth-icon-container">
          <span class="material-symbols-outlined">security</span>
        </div>
        <h2 class="auth-title">Neural Access Link</h2>
        <p class="auth-subtitle">Initialize your secure risk intelligence session</p>
      </div>

      <form @submit.prevent="handleLogin" class="auth-form">
        <div v-if="error" class="error-message">
          <span class="material-symbols-outlined">warning</span>
          {{ error }}
        </div>

        <div class="input-group">
          <label>INTELLIGENCE IDENTIFIER</label>
          <div class="input-wrapper">
            <span class="material-symbols-outlined input-icon">alternate_email</span>
            <input 
              v-model="email" 
              type="email" 
              placeholder="operator@riskanalyzer.ai" 
              required
            />
          </div>
        </div>

        <div class="input-group">
          <label>ACCESS KEYCODE</label>
          <div class="input-wrapper">
            <span class="material-symbols-outlined input-icon">lock</span>
            <input 
              v-model="password" 
              type="password" 
              placeholder="••••••••" 
              required
            />
          </div>
        </div>

        <button type="submit" class="submit-btn" :disabled="loading">
          <template v-if="!loading">
            ESTABLISH LINK <span class="material-symbols-outlined">arrow_forward</span>
          </template>
          <template v-else>
            <span class="animate-spin material-symbols-outlined">sync</span>
            LINKING...
          </template>
        </button>
      </form>

      <div class="auth-footer">
        <p>Restricted access for authorized personnel only.</p>
        <p class="system-status">System: GEMINI-1.5-PRO ACTIVE</p>
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
