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

<script src="../logic/dashboard.js"></script>
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