<template>
  <div class="glass-panel reports-card">
    <div class="card-header">
      <h3 class="font-headline-md text-xl">Recent Reports</h3>
      <button class="view-all-btn">
        VIEW ALL <span class="material-symbols-outlined" style="font-size: 14px;">arrow_forward</span>
      </button>
    </div>
    
    <div class="table-wrapper custom-scrollbar">
      <table class="reports-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Source</th>
            <th>Risk Score</th>
            <th style="width: 25%;">Confidence</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="5" style="padding: 2.5rem; text-align: center; color: var(--color-outline);">Loading analyses...</td>
          </tr>
          <tr v-else v-for="report in reports" :key="report._id">
            <td style="color: var(--color-on-surface-variant);">{{ new Date(report.createdAt).toLocaleDateString() }}</td>
            <td>
              <NuxtLink :to="`/report/${report._id}`" class="report-title-link">{{ report.title }}</NuxtLink>
            </td>
            <td style="color: var(--color-outline);">{{ report.sourceType }}</td>
            <td>
              <span class="risk-badge" :class="getRiskBadgeClass(report.overallScore)">
                {{ getRiskLabel(report.overallScore) }} {{ report.overallScore }}
              </span>
            </td>
            <td style="padding-right: 1rem;">
              <div class="confidence-bar">
                <div class="confidence-fill" :style="{ width: report.confidenceScore + '%' }"></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="./StitchRecentReports.js"></script>
<style src="./StitchRecentReports.css" scoped></style>
