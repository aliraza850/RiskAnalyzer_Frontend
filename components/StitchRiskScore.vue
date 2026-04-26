<template>
  <div class="glass-panel risk-score-card">
    <div class="hover-overlay"></div>
    <h3 class="card-label">Average Risk Score</h3>
    <div class="chart-container">
      <svg class="chart-svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" class="chart-bg" stroke-width="4"></circle>
        <circle class="chart-fill" 
          cx="50" cy="50" fill="none" r="45" stroke="currentColor" stroke-width="4"
          :stroke-dasharray="283" :stroke-dashoffset="283 - (283 * score / 100)"></circle>
      </svg>
      <div class="score-display">
        <span class="score-value text-glow-cyan">{{ score }}</span>
        <span class="score-max">/100</span>
      </div>
    </div>
  </div>
</template>

<script src="./StitchRiskScore.js"></script>
<style src="./StitchRiskScore.css" scoped></style>
