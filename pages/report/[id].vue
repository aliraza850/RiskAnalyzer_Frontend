<template>
  <div class="fade-in-up" v-if="report">
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-margin gap-4">
      <NuxtLink to="/" class="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-surface-tint font-label-caps text-[10px] md:text-label-caps hover:bg-surface-tint hover:text-background transition-all shadow-[0_0_15px_rgba(0,219,233,0.1)] hover:shadow-[0_0_30px_rgba(0,219,233,0.3)] min-h-[44px]">
        <span class="material-symbols-outlined text-sm">arrow_back</span> Back to Dashboard
      </NuxtLink>
      <button @click="printReport" class="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-surface-tint text-background font-label-caps text-[10px] md:text-label-caps shadow-[0_0_20px_rgba(0,219,233,0.3)] hover:shadow-[0_0_40px_rgba(0,219,233,0.5)] transition-all min-h-[44px]">
        <span class="material-symbols-outlined text-sm">print</span> Export PDF
      </button>
    </div>

    <div class="glass-panel rounded-xl mb-margin p-6 md:p-glass-padding overflow-hidden relative">
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-surface-tint via-primary to-surface-tint opacity-50"></div>
      
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-margin">
        <div class="text-center lg:text-left space-y-4 md:space-y-stack-md">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-tint/10 border border-surface-tint/20 text-surface-tint font-label-caps text-[10px] tracking-widest">
            <span class="material-symbols-outlined text-sm">verified_user</span> Risk Assessment Report
          </div>
          <h1 class="font-headline-xl text-3xl md:text-headline-xl text-on-surface text-glow-cyan">{{ report.title }}</h1>
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-stack-lg font-data-mono text-xs md:text-data-mono text-outline">
            <div class="flex items-center gap-1">
              <span class="material-symbols-outlined text-sm">calendar_month</span>
              {{ new Date(report.createdAt).toLocaleDateString() }}
            </div>
            <div class="w-1 h-1 rounded-full bg-outline opacity-30 hidden md:block"></div>
            <div class="flex items-center gap-1 capitalize">
              <span class="material-symbols-outlined text-sm">database</span>
              {{ report.sourceType }}
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center mt-4 lg:mt-0">
          <div class="relative w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center rounded-full border-4 shadow-[0_0_30px_currentColor] bg-black/20" :class="getRiskColorClass(report.overallScore)">
            <span class="font-display-lg text-4xl md:text-display-lg leading-none">{{ report.overallScore }}</span>
            <span class="font-label-caps text-[8px] md:text-[10px] opacity-70 tracking-widest uppercase">Overall Risk</span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-margin">
      <!-- Risk Breakdown Chart -->
      <div class="lg:col-span-6">
        <div class="glass-panel rounded-xl p-6 md:p-glass-padding h-full space-y-margin">
          <h3 class="font-headline-md text-xl md:text-headline-md text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-surface-tint">radar</span> Risk Breakdown
          </h3>
          <div class="h-64 md:h-80 w-full relative">
            <Radar v-if="chartData" :data="chartData" :options="chartOptions" />
          </div>
        </div>
      </div>

      <!-- Findings & Confidence -->
      <div class="lg:col-span-6">
        <div class="glass-panel rounded-xl p-6 md:p-glass-padding h-full space-y-margin">
          <div class="space-y-4 md:space-y-stack-md">
            <h3 class="font-headline-md text-xl md:text-headline-md text-on-surface flex items-center gap-2">
              <span class="material-symbols-outlined text-surface-tint">psychology</span> Analysis Confidence
            </h3>
            <div class="flex items-center justify-between font-data-mono text-xs md:text-data-mono">
              <span class="text-outline uppercase tracking-widest">AI Certainty Index</span>
              <span class="text-surface-tint">{{ report.confidenceScore }}%</span>
            </div>
            <div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
              <div class="bg-surface-tint h-full shadow-[0_0_15px_rgba(0,219,233,0.5)] transition-all duration-1000" :style="{ width: report.confidenceScore + '%' }"></div>
            </div>
          </div>
          
          <div class="space-y-4 md:space-y-stack-md">
            <h3 class="font-headline-md text-xl md:text-headline-md text-on-surface flex items-center gap-2">
              <span class="material-symbols-outlined text-surface-tint">search_insights</span> Key Findings
            </h3>
            <ul class="space-y-2 md:space-y-stack-sm">
              <li v-for="(finding, index) in report.findings" :key="index" class="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/5 font-body-md text-sm md:text-body-md text-on-surface-variant hover:border-surface-tint/30 transition-all group">
                <span class="material-symbols-outlined text-surface-tint opacity-50 group-hover:opacity-100 transition-opacity shrink-0">info</span>
                <span class="leading-relaxed">{{ finding }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Mitigation Strategy -->
    <div class="glass-panel rounded-xl p-6 md:p-glass-padding space-y-margin">
      <h3 class="font-headline-md text-xl md:text-headline-md text-on-surface flex items-center gap-2">
        <span class="material-symbols-outlined text-surface-tint">shield</span> Mitigation Strategy
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        <div v-for="(rec, index) in report.recommendations" :key="index" class="p-6 md:p-stack-lg rounded-xl bg-surface-tint/5 border border-white/5 hover:border-surface-tint/50 transition-all group relative overflow-hidden">
          <div class="absolute top-0 right-0 p-unit opacity-5 group-hover:opacity-20 transition-opacity">
             <span class="material-symbols-outlined text-6xl">verified_user</span>
          </div>
          <span class="material-symbols-outlined text-surface-tint mb-stack-md">task_alt</span>
          <p class="font-body-md text-sm md:text-body-md text-on-surface-variant leading-relaxed">{{ rec }}</p>
        </div>
      </div>
    </div>
  </div>

  <div v-else-if="error" class="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-stack-lg">
    <span class="material-symbols-outlined text-display-lg text-error opacity-50">error</span>
    <h2 class="font-headline-xl text-on-surface">Report Not Found</h2>
    <p class="text-outline">The report you're looking for doesn't exist or has been removed.</p>
    <NuxtLink to="/" class="px-stack-lg py-stack-md bg-surface-tint text-background rounded-lg font-label-caps text-label-caps shadow-[0_0_20px_rgba(0,219,233,0.3)]">Return Home</NuxtLink>
  </div>
  
  <div v-else class="min-h-[60vh] flex items-center justify-center">
    <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-surface-tint"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'vue-chartjs';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const route = useRoute();
const router = useRouter();
const report = ref(null);
const error = ref(null);

const fetchReport = async () => {
    try {
        // ✅ FIXED: Use deployed backend URL instead of localhost
        const response = await fetch(`https://riskanalyzer-backend.onrender.com/api/reports/${route.params.id}`);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Report not found');
            }
            throw new Error('Failed to fetch report');
        }
        
        const data = await response.json();
        // Handle both response formats
        report.value = data.report || data;
        error.value = null;
        
    } catch (err) {
        console.error('Error fetching report:', err);
        error.value = err.message;
    }
};

onMounted(fetchReport);

const getRiskColorClass = (score) => {
    if (score >= 66) return 'border-secondary-container text-secondary-container';
    if (score >= 33) return 'border-yellow-500 text-yellow-500';
    return 'border-surface-tint text-surface-tint';
};

const printReport = () => window.print();

const chartData = computed(() => {
    if (!report.value || !report.value.categoryScores) return null;
    const cats = report.value.categoryScores;
    return {
        labels: ['Financial', 'Operational', 'Market', 'Legal', 'Reputational'],
        datasets: [{
            label: 'Risk Score',
            backgroundColor: 'rgba(0, 219, 233, 0.2)',
            borderColor: 'rgba(0, 219, 233, 1)',
            pointBackgroundColor: 'rgba(0, 219, 233, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(0, 219, 233, 1)',
            data: [
                cats.financial || 0, 
                cats.operational || 0, 
                cats.market || 0, 
                cats.legal || 0, 
                cats.reputational || 0
            ]
        }]
    };
});

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        r: {
            angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            pointLabels: { 
              color: '#849495', 
              font: { 
                size: 11, 
                family: 'Space Grotesk',
                weight: '600'
              } 
            },
            ticks: { display: false, min: 0, max: 100 }
        }
    },
    plugins: {
        legend: { display: false }
    }
};
</script>

<style scoped>
/* Scoped styles if needed */
</style>