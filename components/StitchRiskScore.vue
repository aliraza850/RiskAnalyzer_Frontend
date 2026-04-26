<template>
  <div class="risk-score-card stat-card glass-panel">
    <div class="hover-overlay"></div>
    <p class="card-label">Aggregated Risk Velocity</p>
    <div class="chart-container">
      <svg class="chart-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle class="chart-bg" cx="60" cy="60" r="54" stroke="currentColor" stroke-width="8" fill="none" />
        <circle 
          class="chart-fill"
          cx="60" cy="60" r="54"
          stroke="currentColor"
          stroke-width="8"
          fill="none"
          stroke-linecap="round"
          :stroke-dasharray="339.3"
          :stroke-dashoffset="339.3 - (339.3 * score / 100)"
        />
      </svg>
      <div class="score-display">
        <span class="score-value">{{ score }}</span>
        <span class="score-max">/100</span>
      </div>
    </div>
  </div>
</template>

<script src="../logic/StitchRiskScore.js"></script>
<style src="./StitchRiskScore.css" scoped></style>
