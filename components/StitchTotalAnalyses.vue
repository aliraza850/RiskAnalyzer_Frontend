<template>
  <div class="total-analyses-card stat-card glass-panel">
    <div>
      <p class="card-label">Cumulative Intelligence</p>
      <span class="total-value">{{ total }}</span>
      <p class="card-sublabel">Total Assessments</p>
    </div>
    <div class="chart-sparkline">
      <svg class="sparkline-svg" viewBox="0 0 100 40" preserveAspectRatio="none">
        <polyline
          class="sparkline-path"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          points="0,35 15,28 30,32 45,18 60,22 75,10 90,15 100,8"
        />
      </svg>
    </div>
  </div>
</template>

<script src="../logic/StitchTotalAnalyses.js"></script>
<style src="./StitchTotalAnalyses.css" scoped></style>
