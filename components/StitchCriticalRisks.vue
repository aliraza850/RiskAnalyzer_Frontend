<template>
  <div class="critical-risks-card stat-card glass-panel">
    <p class="card-label">Critical Risks</p>
    <div class="critical-count-container">
      <span class="critical-count">{{ count }}</span>
    </div>
    <p class="action-required">
      <span class="material-symbols-outlined">warning</span>
      Action Required
    </p>
  </div>
</template>

<script setup>
defineProps({
  count: {
    type: Number,
    default: 0
  }
});
</script>

<style scoped>
.critical-risks-card {
  grid-column: span 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

@media (min-width: 768px) {
  .critical-risks-card {
    grid-column: span 6;
  }
}

@media (min-width: 1024px) {
  .critical-risks-card {
    grid-column: span 4;
  }
}

.card-label {
  font-size: 10px;
  color: var(--color-outline);
  width: 100%;
  text-align: left;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
}

.critical-count-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.critical-count {
  font-size: 7rem;
  font-weight: 700;
  line-height: 1;
  color: #d1bcff;
  text-shadow: 0 0 15px rgba(254, 0, 254, 0.6);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.action-required {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: rgba(209, 188, 255, 0.8);
  width: 100%;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
}

.action-required .material-symbols-outlined {
  font-size: 1rem;
}
</style>
