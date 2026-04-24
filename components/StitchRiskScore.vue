<template>
  <div class="glass-panel col-span-1 lg:col-span-4 md:col-span-6 rounded-xl p-glass-padding flex flex-col items-center justify-center relative overflow-hidden group">
    <div class="absolute inset-0 bg-surface-tint/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    <h3 class="font-label-caps text-label-caps text-outline w-full text-left mb-stack-lg uppercase tracking-[0.3em]">Average Risk Score</h3>
    <div class="relative w-40 h-40 flex items-center justify-center">
      <svg class="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
        <circle cx="50" cy="50" fill="none" r="45" stroke="rgba(255,255,255,0.05)" stroke-width="4"></circle>
        <circle class="drop-shadow-[0_0_8px_rgba(0,219,233,0.8)] transition-all duration-1000 ease-out" 
          cx="50" cy="50" fill="none" r="45" stroke="#00dbe9" stroke-width="4"
          :stroke-dasharray="283" :stroke-dashoffset="283 - (283 * score / 100)"></circle>
      </svg>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <span class="font-display-lg text-display-lg text-surface-tint text-glow-cyan leading-none">{{ score }}</span>
        <span class="font-data-mono text-data-mono text-outline mt-1">/100</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  score: {
    type: Number,
    default: 0
  }
});
</script>
