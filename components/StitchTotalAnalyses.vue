<template>
  <div class="glass-panel col-span-1 md:col-span-4 rounded-xl p-glass-padding flex flex-col justify-between relative group">
    <h3 class="font-label-caps text-label-caps text-outline uppercase tracking-[0.3em]">Total Analyses</h3>
    <div class="mt-stack-md">
      <span class="font-headline-xl text-headline-xl text-on-surface block mb-stack-sm">{{ total }}</span>
      <div class="h-16 w-full flex items-end opacity-70">
        <svg class="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
          <polyline class="drop-shadow-[0_4px_4px_rgba(0,219,233,0.3)]" fill="none" points="0,30 20,25 40,35 60,15 80,20 100,5" stroke="#00dbe9" stroke-width="2"></polyline>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  total: {
    type: Number,
    default: 0
  }
});
</script>
