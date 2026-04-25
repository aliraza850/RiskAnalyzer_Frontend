<template>
  <div class="fade-in-up">
    <!-- Welcome Header -->
    <div class="mb-8" v-if="user">
      <h1 class="text-3xl font-headline-xl text-white">Command Center</h1>
      <p class="text-on-primary-container font-body-md mt-1">
        Welcome back, <span class="text-surface-tint font-bold">{{ user.email }}</span>. Reviewing {{ reports.length }} active risk assessments.
      </p>
    </div>

    <!-- Hero Section: Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-margin">
      <!-- Average Risk Score -->
      <StitchRiskScore :score="averageRiskScore" />
      
      <!-- Total Analyses -->
      <StitchTotalAnalyses :total="reports.length" />
      
      <!-- Critical Risks -->
      <StitchCriticalRisks :count="criticalRisksCount" />
    </div>

    <!-- Recent Reports Table -->
    <StitchRecentReports :reports="reports" :loading="loading" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useAuth } from '~/composables/useAuth';

const { user } = useAuth();
const reports = ref([]);
const loading = ref(true);
const config = useRuntimeConfig();

const getReports = async () => {
  try {
    const response = await fetch(`${config.public.apiBase}/reports`, {
      credentials: 'include'
    });
    
    if (response.ok) {
      const data = await response.json();
      // Handle both response formats (direct array or { reports: [] })
      reports.value = Array.isArray(data) ? data : (data.reports || []);
      console.log('Reports loaded:', reports.value.length);
    } else {
      console.error('Failed to fetch reports:', response.status);
      reports.value = [];
    }
  } catch (error) {
    console.error('Failed to fetch reports:', error);
    reports.value = [];
  } finally {
    loading.value = false;
  }
};

// Refresh reports when component mounts
onMounted(() => {
  getReports();
});

// Computed stats
const averageRiskScore = computed(() => {
  if (reports.value.length === 0) return 42;
  const total = reports.value.reduce((acc, report) => acc + (report.overallScore || 0), 0);
  return Math.round(total / reports.value.length);
});

const criticalRisksCount = computed(() => {
  if (reports.value.length === 0) return 3;
  return reports.value.filter(report => (report.overallScore || 0) >= 66).length;
});
</script>

<style scoped>
/* Page-specific animations if needed */
</style>