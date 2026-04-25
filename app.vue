<template>
  <div class="bg-background text-on-background min-h-screen flex font-body-md overflow-hidden selection:bg-surface-tint/30">
    <ClientOnly>
      <AnimatedBackground />
    </ClientOnly>
    
    <!-- Level 0: Deep Background Overlay -->
    <div class="fixed inset-0 z-0 pointer-events-none transition-all duration-500" :class="isDark ? 'opacity-20' : 'opacity-40'" :style="{ backgroundImage: 'var(--bg-image)', backgroundSize: 'cover', backgroundPosition: 'center' }"></div>

    <div class="flex-1 flex flex-col relative z-10">
      <StitchTopNav v-if="!isLanding" />
      
      <main 
        class="flex-1 overflow-y-auto custom-scrollbar"
        :class="[!isLanding ? 'mt-20 p-6 md:p-margin h-[calc(100vh-80px)] pb-32 md:pb-margin' : '']"
      >
        <NuxtPage />
      </main>

      <StitchBottomNav v-if="!isLanding" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuth } from '~/composables/useAuth';

const route = useRoute();
const { checkAuth } = useAuth();
const { isDark, initTheme } = useTheme();
const isLanding = computed(() => route.path === '/');

onMounted(() => {
  initTheme();
  checkAuth();
});
</script>

<style>
/* Global styles are now in assets/css/main.css */
</style>
