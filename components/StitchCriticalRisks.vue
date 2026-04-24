<template>
  <div class="glass-panel col-span-1 md:col-span-4 rounded-xl p-glass-padding flex flex-col items-center justify-center relative group border-secondary-container/30">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-secondary-container to-transparent opacity-50"></div>
    <h3 class="font-label-caps text-label-caps text-outline w-full text-left mb-stack-lg uppercase tracking-[0.3em]">Critical Risks</h3>
    <div class="flex-1 flex items-center justify-center">
      <span class="font-display-lg text-[80px] md:text-[120px] leading-none font-bold text-secondary-container text-glow-magenta animate-pulse">{{ count }}</span>
    </div>
    <p class="font-data-mono text-data-mono text-secondary-container/80 mt-stack-md w-full text-right flex items-center justify-end gap-2">
      <span class="material-symbols-outlined text-sm">warning</span> Action Required
    </p>
  </div>
</template>

<script setup>
defineProps({
  count: {
    type: Number,
    default: 0
  }
});
</script>
