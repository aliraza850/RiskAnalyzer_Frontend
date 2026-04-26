<template>
  <div class="fade-in-up dashboard-page">
    <!-- Welcome Header -->
    <div class="dashboard-header" v-if="user">
      <h1 class="dashboard-title">Command Center</h1>
      <div class="welcome-container">
        <p class="welcome-text">
          Welcome back, <span class="user-name">{{ userName }}</span>. 
          <span v-if="!loading">Reviewing {{ reports.length }} active risk assessments.</span>
          <span v-else class="sync-inline">
            <span class="sync-dot-small"></span>
            Synchronizing intelligence...
          </span>
        </p>
      </div>
    </div>

    <!-- Error Alert -->
    <div v-if="errorMsg" class="error-banner">
      <span class="material-symbols-outlined">warning</span>
      <p>{{ errorMsg }}</p>
      <button @click="getReports" class="retry-btn">Retry Connection</button>
    </div>

    <!-- Hero Section: Bento Grid -->
    <div class="stats-grid">
      <template v-if="loading && !reports.length">
        <div class="skeleton-card" v-for="i in 3" :key="i"></div>
      </template>
      <template v-else>
        <StitchRiskScore :score="averageRiskScore" />
        <StitchTotalAnalyses :total="reports.length" />
        <StitchCriticalRisks :count="criticalRisksCount" />
      </template>
    </div>

    <!-- Recent Reports Table -->
    <div class="reports-section">
      <StitchRecentReports :reports="reports" :loading="loading" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue';
import { useAuth, useRuntimeConfig } from '#imports';

const { user } = useAuth();
const reports = ref([]);
const loading = ref(true);
const errorMsg = ref(null);
const config = useRuntimeConfig();

const getReports = async () => {
  if (!user.value) {
    loading.value = false;
    return;
  }
  
  loading.value = true;
  errorMsg.value = null;

  try {
    const response = await fetch(`${config.public.apiBase}/reports`, {
      credentials: 'include',
      signal: AbortSignal.timeout(10000)
    });
    
    if (response.ok) {
      const data = await response.json();
      reports.value = Array.isArray(data) ? data : (data.reports || []);
    } else {
      const errData = await response.json().catch(() => ({}));
      errorMsg.value = errData.error || `Server error: ${response.status}`;
      reports.value = [];
    }
  } catch (error) {
    console.error('Dashboard data fetch error:', error);
    errorMsg.value = 'Failed to connect to intelligence server. Please check your connection.';
    reports.value = [];
  } finally {
    loading.value = false;
  }
};

// Watch user — fires when user becomes available
watch(
  user,
  async (newUser, oldUser) => {
    if (newUser && newUser !== oldUser) {
      await nextTick();
      getReports();
    } else if (newUser && !reports.value.length) {
      await nextTick();
      getReports();
    }
  },
  { immediate: true }
);

onMounted(async () => {
  if (user.value && !reports.value.length) {
    await nextTick();
    getReports();
  }
});

const averageRiskScore = computed(() => {
  if (!reports.value || reports.value.length === 0) return 42;
  const total = reports.value.reduce((acc, report) => acc + (report.overallScore || 0), 0);
  return Math.round(total / reports.value.length);
});

const criticalRisksCount = computed(() => {
  if (!reports.value || reports.value.length === 0) return 0;
  return reports.value.filter(report => (report.overallScore || 0) >= 66).length;
});

const userName = computed(() => {
  if (!user.value || !user.value.email) return 'Agent';
  return user.value.email.split('@')[0].replace(/[\._-]/g, ' ');
});
</script>

<style src="./dashboard.css" scoped></style>
<style scoped>
.welcome-container {
  margin-top: 0.5rem;
}
.sync-inline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-surface-tint);
  opacity: 0.8;
}
.sync-dot-small {
  width: 6px;
  height: 6px;
  background: var(--color-surface-tint);
  border-radius: 50%;
  animation: pulse-small 1.5s infinite;
}
@keyframes pulse-small {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}
</style>