<template>
  <div class="recent-reports-panel">
    <div class="panel-header">
      <h2 class="panel-title">Recent Intelligence Reports</h2>
      <div v-if="loading" class="sync-status">
        <span class="sync-dot"></span>
        Syncing...
      </div>
    </div>

    <div class="table-container custom-scrollbar">
      <table class="reports-table">
        <thead>
          <tr>
            <th>Assessment Title</th>
            <th>Status</th>
            <th>Risk Level</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in reports" :key="report._id" class="report-row">
            <td class="report-title">{{ report.title }}</td>
            <td>
              <span class="status-badge" :class="report.status?.toLowerCase() || 'completed'">
                {{ report.status || 'Completed' }}
              </span>
            </td>
            <td>
              <div class="risk-badge" :class="getRiskBadgeClass(report.overallScore)">
                {{ getRiskLabel(report.overallScore) }} ({{ report.overallScore }})
              </div>
            </td>
            <td class="report-date">{{ new Date(report.createdAt).toLocaleDateString() }}</td>
            <td class="actions">
              <button class="action-btn">
                <span class="material-symbols-outlined">chevron_right</span>
              </button>
            </td>
          </tr>
          <tr v-if="!loading && reports.length === 0">
            <td colspan="5" class="empty-state">No assessments found.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="../logic/StitchRecentReports.js"></script>
<style src="./StitchRecentReports.css" scoped></style>
