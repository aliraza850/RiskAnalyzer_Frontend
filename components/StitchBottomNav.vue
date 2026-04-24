<template>
  <nav class="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#111827]/80 dark:bg-[#0d1117]/80 backdrop-blur-md border-t border-white/10 px-6 py-3 flex justify-around items-center">
    <NuxtLink 
      to="/" 
      class="flex flex-col items-center gap-1 transition-all"
      :class="[route.path === '/' ? 'text-cyan-500' : 'text-slate-500']"
    >
      <span class="material-symbols-outlined text-2xl" :style="route.path === '/' ? 'font-variation-settings: \'FILL\' 1;' : ''">dashboard</span>
      <span class="text-[10px] font-bold uppercase tracking-widest">Dashboard</span>
    </NuxtLink>

    <NuxtLink 
      to="/analyze" 
      class="flex flex-col items-center gap-1 transition-all"
      :class="[route.path === '/analyze' ? 'text-cyan-500' : 'text-slate-500']"
    >
      <div class="relative">
        <div class="absolute -inset-2 bg-cyan-500/20 rounded-full blur-md animate-pulse" v-if="route.path === '/analyze'"></div>
        <span class="material-symbols-outlined text-2xl relative" :style="route.path === '/analyze' ? 'font-variation-settings: \'FILL\' 1;' : ''">security</span>
      </div>
      <span class="text-[10px] font-bold uppercase tracking-widest">Analyze</span>
    </NuxtLink>

    <NuxtLink 
      to="/" 
      class="flex flex-col items-center gap-1 transition-all"
      :class="[route.path.startsWith('/report') ? 'text-cyan-500' : 'text-slate-500']"
    >
      <span class="material-symbols-outlined text-2xl" :style="route.path.startsWith('/report') ? 'font-variation-settings: \'FILL\' 1;' : ''">history</span>
      <span class="text-[10px] font-bold uppercase tracking-widest">Reports</span>
    </NuxtLink>
  </nav>
</template>

<script setup>
const route = useRoute();
</script>

<style scoped>
.router-link-active {
  @apply text-cyan-500;
}
</style>
