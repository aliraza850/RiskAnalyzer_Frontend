<template>
  <div class="stat-card total-analyses-card">
    <div class="card-header">
      <h3 class="card-title">Cumulative Intelligence</h3>
      <span class="material-symbols-outlined icon">analytics</span>
    </div>
    <div class="total-display">
      <div class="total-value">{{ total }}</div>
      <div class="total-label">Total Reports</div>
    </div>
  </div>
</template>

<script src="../logic/StitchTotalAnalyses.js"></script>
<style src="./StitchTotalAnalyses.css" scoped></style>
