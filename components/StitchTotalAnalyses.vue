<template>
  <div class="glass-panel total-analyses-card">
    <h3 class="card-label">Total Analyses</h3>
    <div class="card-content">
      <span class="total-value">{{ total }}</span>
      <div class="chart-sparkline">
        <svg class="sparkline-svg" preserveAspectRatio="none" viewBox="0 0 100 40">
          <polyline class="sparkline-path" fill="none" points="0,30 20,25 40,35 60,15 80,20 100,5" stroke="currentColor" stroke-width="2"></polyline>
        </svg>
      </div>
    </div>
  </div>
</template>

<script src="./StitchTotalAnalyses.js"></script>
<style src="./StitchTotalAnalyses.css" scoped></style>
