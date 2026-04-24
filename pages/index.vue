<template>
  <div class="fade-in-up">
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

const reports = ref([]);
const loading = ref(true);

const getReports = async () => {
  try {
    const response = await fetch('https://riskanalyzer-backend.onrender.com/api/reports');
    
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