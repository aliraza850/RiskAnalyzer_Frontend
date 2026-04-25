<template>
  <div class="fade-in-up">
    <!-- Welcome Header -->
    <div class="mb-8" v-if="user">
      <h1 class="text-3xl font-headline-xl text-white">Command Center</h1>
      <div v-if="!loading">
        <p class="text-on-primary-container font-body-md mt-1">
          Welcome back, <span class="text-surface-tint font-bold">{{ user.email }}</span>. Reviewing {{ reports.length }} active risk assessments.
        </p>
      </div>
      <div v-else class="flex items-center gap-2 mt-1">
        <span class="w-2 h-2 rounded-full bg-surface-tint animate-pulse"></span>
        <p class="text-on-primary-container font-body-md italic opacity-70">Synchronizing intelligence data...</p>
      </div>
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

const { user, initialized } = useAuth();
const reports = ref([]);
const loading = ref(true);
const config = useRuntimeConfig();

const getReports = async () => {
  if (!user.value) return;
  
  loading.value = true;
  try {
    const response = await fetch(`${config.public.apiBase}/reports`, {
      credentials: 'include'
    });
    
    if (response.ok) {
      const data = await response.json();
      reports.value = Array.isArray(data) ? data : (data.reports || []);
    } else {
      reports.value = [];
    }
  } catch (error) {
    reports.value = [];
  } finally {
    loading.value = false;
  }
};

// React to user status changes
watch(user, (newUser) => {
  if (newUser) {
    getReports();
  }
}, { immediate: true });

onMounted(() => {
  if (user.value) {
    getReports();
  }
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