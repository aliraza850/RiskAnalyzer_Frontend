<template>
  <div class="fade-in-up">
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

    <!-- Hero Section: Bento Grid -->
    <div class="stats-grid">
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

<script src="./dashboard.js"></script>
<style src="./dashboard.css" scoped></style>