<template>
  <div class="reports-card glass-panel">
    <div class="card-header">
      <h2 class="card-title">Recent Intelligence Reports</h2>
      <div v-if="loading" style="display: flex; align-items: center; gap: 0.5rem; font-size: 11px; color: var(--color-outline);">
        <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-surface-tint); display: inline-block; animation: pulse-dot 1.5s infinite;"></span>
        Syncing...
      </div>
      <button v-else class="view-all-btn">
        VIEW ALL <span class="material-symbols-outlined" style="font-size: 14px;">arrow_forward</span>
      </button>
    </div>

    <div class="table-wrapper">
      <table class="reports-table">
        <thead>
          <tr>
            <th>Assessment Title</th>
            <th>Risk Level</th>
            <th>Confidence</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in reports" :key="report._id" class="report-row" style="cursor: pointer;" @click="$router.push(`/report/${report._id}`)">
            <td>
              <a class="report-title-link">{{ report.title }}</a>
            </td>
            <td>
              <span class="risk-badge" :class="getRiskBadgeClass(report.overallScore)">
                {{ getRiskLabel(report.overallScore) }} &middot; {{ report.overallScore }}
              </span>
            </td>
            <td>
              <div class="confidence-bar">
                <div class="confidence-fill" :style="{ width: (report.overallScore || 50) + '%' }"></div>
              </div>
            </td>
            <td>{{ new Date(report.createdAt).toLocaleDateString() }}</td>
          </tr>
          <tr v-if="!loading && reports.length === 0">
            <td colspan="4" style="text-align: center; padding: 3rem; color: var(--color-outline); font-style: italic;">
              No risk assessments found. Run your first analysis.
            </td>
          </tr>
          <tr v-if="loading && reports.length === 0" v-for="i in 3" :key="'sk-'+i">
            <td colspan="4" style="padding: 1rem 0;">
              <div style="height: 1.5rem; border-radius: 0.5rem; background: linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%); background-size: 200%; animation: skeleton-shimmer 1.5s infinite;"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="../logic/StitchRecentReports.js"></script>
<style src="./StitchRecentReports.css" scoped></style>
<style scoped>
.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-on-surface);
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
@keyframes skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
