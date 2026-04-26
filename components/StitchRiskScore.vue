<template>
  <div class="stat-card risk-score-card">
    <div class="card-header">
      <h3 class="card-title">Aggregated Risk Velocity</h3>
      <span class="material-symbols-outlined icon">speed</span>
    </div>
    <div class="score-display">
      <div class="score-value">{{ score }}</div>
      <div class="score-label">Global Index</div>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: score + '%' }"></div>
    </div>
  </div>
</template>

<script src="../logic/StitchRiskScore.js"></script>
<style src="./StitchRiskScore.css" scoped></style>
