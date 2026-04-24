<template>
  <div class="glass-panel rounded-xl p-glass-padding overflow-hidden">
    <div class="flex justify-between items-end mb-stack-lg border-b border-white/5 pb-stack-sm">
      <h3 class="font-headline-md text-xl md:text-headline-md text-on-surface">Recent Reports</h3>
      <button class="font-label-caps text-[10px] md:text-label-caps text-surface-tint hover:text-primary transition-colors flex items-center gap-1">
        VIEW ALL <span class="material-symbols-outlined text-sm">arrow_forward</span>
      </button>
    </div>
    
    <div class="overflow-x-auto custom-scrollbar">
      <table class="w-full text-left whitespace-nowrap min-w-[600px] md:min-w-0">
        <thead>
          <tr class="font-label-caps text-label-caps text-outline border-b border-white/5">
            <th class="py-stack-sm font-normal">Date</th>
            <th class="py-stack-sm font-normal">Title</th>
            <th class="py-stack-sm font-normal">Source</th>
            <th class="py-stack-sm font-normal">Risk Score</th>
            <th class="py-stack-sm font-normal w-1/4">Confidence</th>
          </tr>
        </thead>
        <tbody class="font-data-mono text-data-mono">
          <tr v-if="loading">
            <td colspan="5" class="py-10 text-center text-outline">Loading analyses...</td>
          </tr>
          <tr v-else v-for="report in reports" :key="report._id" class="border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer group">
            <td class="py-stack-md text-on-surface-variant">{{ new Date(report.createdAt).toLocaleDateString() }}</td>
            <td class="py-stack-md text-on-surface group-hover:text-surface-tint transition-colors">
              <NuxtLink :to="`/report/${report._id}`">{{ report.title }}</NuxtLink>
            </td>
            <td class="py-stack-md text-outline">{{ report.sourceType }}</td>
            <td class="py-stack-md">
              <span class="px-2 py-1 rounded-full border text-[10px] tracking-wider uppercase" :class="getRiskBadgeClass(report.overallScore)">
                {{ getRiskLabel(report.overallScore) }} {{ report.overallScore }}
              </span>
            </td>
            <td class="py-stack-md pr-4">
              <div class="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                <div class="bg-surface-tint h-full shadow-[0_0_8px_rgba(0,219,233,0.5)] transition-all duration-500" :style="{ width: report.confidenceScore + '%' }"></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  reports: Array,
  loading: Boolean
});

const getRiskBadgeClass = (score) => {
  if (score >= 66) return 'bg-secondary-container/15 text-secondary-container border-secondary-container/30';
  if (score >= 33) return 'bg-yellow-500/15 text-yellow-500 border-yellow-500/30';
  return 'bg-surface-tint/15 text-surface-tint border-surface-tint/30';
};

const getRiskLabel = (score) => {
  if (score >= 66) return 'High';
  if (score >= 33) return 'Medium';
  return 'Low';
};
</script>
