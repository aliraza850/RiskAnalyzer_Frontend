<template>
  <div class="fade-in-up dashboard-page">
    <!-- Welcome Header -->
    <div class="dashboard-header" v-if="user">
      <h1 class="dashboard-title">Command Center</h1>
      <div v-if="!loading">
        <p class="welcome-text">
          Welcome back, <span class="user-name">{{ user.email.split('@')[0].replace(/[\._-]/g, ' ') }}</span>. Reviewing {{ reports.length }} active risk assessments.
        </p>
      </div>
      <div v-else class="sync-container">
        <span class="sync-dot"></span>
        <p class="sync-text">Synchronizing intelligence data...</p>
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