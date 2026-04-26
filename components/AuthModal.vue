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

      <div class="space-y-6">
        <div class="text-center">
          <h2 class="font-headline-md text-headline-md text-white mb-2">Access Intelligence</h2>
          <p class="text-body-sm text-on-primary-container">Initialize secure session to Command Center.</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div class="space-y-1 group">
            <label for="email" class="block text-label-md text-primary mb-1 uppercase tracking-widest opacity-70 group-focus-within:opacity-100 transition-opacity">COGNITIVE IDENTITY (EMAIL)</label>
            <input 
              v-model="email" 
              type="email" 
              id="email" 
              required 
              placeholder="name@intelligence.ai"
              class="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-white placeholder:text-on-primary-container/40 focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-all"
            >
          </div>

          <div class="space-y-1 group">
            <label for="password" class="block text-label-md text-primary mb-1 uppercase tracking-widest opacity-70 group-focus-within:opacity-100 transition-opacity">ACCESS TOKEN (PASSWORD)</label>
            <input 
              v-model="password" 
              type="password" 
              id="password" 
              required 
              placeholder="••••••••"
              class="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-white placeholder:text-on-primary-container/40 focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-all"
            >
          </div>

          <button 
            type="submit" 
            :disabled="loading"
            class="group relative w-full bg-secondary-fixed text-on-secondary-fixed font-headline-md py-4 rounded-xl hover:bg-secondary-fixed-dim transition-all shadow-lg shadow-secondary-fixed/20 flex items-center justify-center gap-2 overflow-hidden mt-6"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span v-if="loading" class="material-symbols-outlined animate-spin">progress_activity</span>
            <span v-else style="display: flex; align-items: center; gap: 0.5rem;">
              INITIATE LOGIN <span class="material-symbols-outlined" style="font-size: 14px;">bolt</span>
            </span>
          </button>
        </form>

        <p v-if="error" class="error-msg">
          {{ error }}
        </p>

        <div style="padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.05); text-align: center; margin-top: 1.5rem;">
          <p style="font-size: 10px; color: #74829d; letter-spacing: 0.2em; text-transform: uppercase;">
            SECURED BY ZERO-TRUST NEURAL ARCHITECTURE
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./AuthModal.js"></script>
<style src="./AuthModal.css" scoped></style>
