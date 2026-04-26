<template>
  <div class="fade-in-up">
    <!-- Header -->
    <header class="analyze-header">
      <div>
        <div class="badge">
          <span class="material-symbols-outlined" style="font-size: 14px;">terminal</span>
          COMMAND CENTER
        </div>
        <h1 class="analyze-title text-glow-cyan">Initiate Risk Scan</h1>
        <p class="analyze-description">Harness Gemini AI to detect, analyze, and mitigate complex business threats in real-time.</p>
      </div>

      <div class="tab-switcher">
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'text' }"
          @click="activeTab = 'text'"
        >
          <span class="material-symbols-outlined" style="font-size: 16px;">subject</span>
          DIRECT INPUT
        </button>
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'file' }"
          @click="activeTab = 'file'"
        >
          <span class="material-symbols-outlined" style="font-size: 16px;">upload_file</span>
          FILE UPLOAD
        </button>
      </div>
    </header>

    <div class="analyze-grid">
      <!-- Input Module -->
      <div class="input-column">
        <div class="glass-panel" style="border-radius: 1rem; padding: 2.5rem; position: relative; overflow: hidden; height: 100%;">
          <!-- Decorative icon -->
          <div style="position: absolute; top: 0; right: 0; padding: 2rem; opacity: 0.04; pointer-events: none;">
            <span class="material-symbols-outlined" style="font-size: 140px; color: var(--color-on-surface);">shield_person</span>
          </div>

          <div style="position: relative; z-index: 1;">
            <!-- Text Input Mode -->
            <div v-show="activeTab === 'text'" style="display: flex; flex-direction: column; gap: 2rem;">
              <div class="form-group">
                <label class="form-label">Investigation Title</label>
                <input
                  type="text"
                  class="form-input"
                  v-model="form.title"
                  placeholder="e.g. Q4 Supply Chain Integrity Audit"
                />
              </div>

              <div class="form-group">
                <label class="form-label">Core Analysis Data</label>
                <textarea
                  class="form-textarea"
                  v-model="form.text"
                  placeholder="Paste contracts, security logs, or business intelligence for extraction..."
                ></textarea>
              </div>
            </div>

            <!-- File Upload Mode -->
            <div v-show="activeTab === 'file'" style="display: flex; flex-direction: column; gap: 2rem;">
              <div class="form-group">
                <label class="form-label">Dataset Title</label>
                <input
                  type="text"
                  class="form-input"
                  v-model="form.title"
                  placeholder="e.g. Regional Risk Logs 2024.csv"
                />
              </div>

              <div
                class="drop-zone"
                :class="{ active: dragOver || selectedFile }"
                @dragover.prevent="dragOver = true"
                @dragleave.prevent="dragOver = false"
                @drop.prevent="handleDrop"
              >
                <div class="drop-zone-icon">
                  <span class="material-symbols-outlined" :style="dragOver ? 'animation: bounce 0.5s infinite;' : ''">cloud_upload</span>
                </div>
                <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--color-on-surface); margin-bottom: 0.5rem;">Ingest Security Data</h3>
                <p style="font-size: 0.875rem; color: var(--color-outline); margin-bottom: 2rem; text-align: center;">Drop CSV or JSON files into the matrix</p>
                <button style="padding: 0.75rem 2rem; border-radius: 9999px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1); color: var(--color-on-surface); font-size: 10px; letter-spacing: 0.2em; cursor: pointer; font-weight: 600;">
                  BROWSE LOCAL STORAGE
                </button>
                <input type="file" style="position: absolute; inset: 0; opacity: 0; cursor: pointer;" @change="handleFileSelect" accept=".csv, .json" />

                <div v-if="selectedFile" style="margin-top: 2rem; display: flex; align-items: center; gap: 0.75rem; background: rgba(0,219,233,0.1); padding: 0.75rem 1.5rem; border-radius: 0.75rem; border: 1px solid rgba(0,219,233,0.2);">
                  <span class="material-symbols-outlined" style="color: var(--color-surface-tint);">verified</span>
                  <div>
                    <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--color-on-surface);">{{ selectedFile.name }}</div>
                    <div style="font-size: 9px; color: var(--color-outline); text-transform: uppercase;">{{ (selectedFile.size / 1024).toFixed(1) }} KB READY</div>
                  </div>
                  <button @click.stop.prevent="selectedFile = null" style="margin-left: auto; background: none; border: none; color: var(--color-outline); cursor: pointer;">
                    <span class="material-symbols-outlined" style="font-size: 16px;">close</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <button
              class="submit-btn"
              style="margin-top: 2rem;"
              @click="submitAnalysis"
              :disabled="isAnalyzing || (!form.text && !selectedFile)"
            >
              <span v-if="!isAnalyzing" style="display: flex; align-items: center; justify-content: center; gap: 0.75rem;">
                GENERATE INTELLIGENCE REPORT <span class="material-symbols-outlined">bolt</span>
              </span>
              <span v-else style="display: flex; align-items: center; justify-content: center; gap: 0.75rem;">
                <span class="material-symbols-outlined animate-spin-slow">sync</span>
                PROCESSING NEURAL VECTORS...
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- System Monitor Panel -->
      <div class="monitor-panel">
        <div class="glass-panel" style="border-radius: 1rem; padding: 2rem; height: 100%; display: flex; flex-direction: column; position: relative; overflow: hidden;">
          <!-- Scanning line animation -->
          <div v-if="isAnalyzing" class="animate-scan" style="position: absolute; left: 0; width: 100%; height: 2px; background: var(--color-surface-tint); box-shadow: 0 0 15px var(--color-surface-tint); z-index: 20;"></div>

          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem;">
            <span style="width: 0.75rem; height: 0.75rem; border-radius: 50%;" :style="isAnalyzing ? 'background: var(--color-surface-tint); animation: pulse 2s infinite; box-shadow: 0 0 10px var(--color-surface-tint);' : 'background: var(--color-outline);'"></span>
            <h3 style="font-size: 10px; letter-spacing: 0.3em; color: var(--color-outline); text-transform: uppercase;">System Monitor</h3>
          </div>

          <!-- Idle State -->
          <div v-if="!isAnalyzing" style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 1.5rem;">
            <div style="width: 6rem; height: 6rem; border-radius: 50%; border: 2px solid rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; position: relative;">
              <div class="animate-spin-slow" style="position: absolute; inset: 0; border-top: 2px solid rgba(0,219,233,0.2); border-radius: 50%;"></div>
              <span class="material-symbols-outlined" style="font-size: 2.5rem; color: var(--color-outline); opacity: 0.4;">radar</span>
            </div>
            <div>
              <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--color-on-surface); margin-bottom: 0.5rem;">Awaiting Payload</h3>
              <p style="font-size: 0.875rem; color: var(--color-outline); max-width: 16rem; margin: 0 auto;">Provide intelligence input to initialize the risk evaluation sequence.</p>
            </div>
          </div>

          <!-- Active State -->
          <div v-else style="flex: 1; display: flex; flex-direction: column; gap: 2rem;">
            <div>
              <div style="display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--color-surface-tint); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.1em;">
                <span>Analyzing Data Stream</span><span>CALCULATING...</span>
              </div>
              <div style="height: 6px; width: 100%; background: rgba(255,255,255,0.05); border-radius: 9999px; overflow: hidden;">
                <div class="animate-progress-indeterminate" style="height: 100%; width: 50%; background: var(--color-surface-tint); border-radius: 9999px;"></div>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border-radius: 0.75rem; background: rgba(0,219,233,0.05); border: 1px solid rgba(0,219,233,0.1);">
                <span class="material-symbols-outlined animate-spin-slow" style="color: var(--color-surface-tint); font-size: 1rem;">sync</span>
                <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--color-on-surface); text-transform: uppercase; letter-spacing: 0.1em;">Parsing unstructured vectors</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border-radius: 0.75rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); opacity: 0.5;">
                <span class="material-symbols-outlined" style="color: var(--color-outline); font-size: 1rem;">schedule</span>
                <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--color-outline); text-transform: uppercase; letter-spacing: 0.1em;">Evaluating risk gradients</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border-radius: 0.75rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); opacity: 0.3;">
                <span class="material-symbols-outlined" style="color: var(--color-outline); font-size: 1rem;">lock_open</span>
                <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--color-outline); text-transform: uppercase; letter-spacing: 0.1em;">Generating remediation roadmap</span>
              </div>
            </div>

            <!-- Terminal -->
            <div class="terminal" style="margin-top: auto;">
              <div style="animation: pulse 2s infinite;">> [SYSTEM] INITIALIZING GEMINI-1.5-PRO...</div>
              <div>> [AUTH] CONNECTION ESTABLISHED</div>
              <div>> [DATA] BUFFERING STREAM...</div>
              <div style="color: var(--color-surface-tint);">> [SCAN] DETECTING VULNERABILITIES...</div>
              <div style="animation: pulse 1s infinite;">_</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter, useRuntimeConfig, navigateTo } from '#imports';

const router = useRouter();
const config = useRuntimeConfig();

const activeTab = ref('text');
const isAnalyzing = ref(false);
const dragOver = ref(false);
const selectedFile = ref(null);

const form = reactive({
  title: '',
  text: ''
});

const handleFileSelect = (e) => {
  const file = e.target.files[0];
  if (file) selectedFile.value = file;
};

const handleDrop = (e) => {
  dragOver.value = false;
  const file = e.dataTransfer.files[0];
  if (file) selectedFile.value = file;
};

const submitAnalysis = async () => {
  isAnalyzing.value = true;
  try {
    const formData = new FormData();
    formData.append('title', form.title || 'Untitled Assessment');
    
    let endpoint = `${config.public.apiBase}/analyze/text`;

    if (selectedFile.value) {
      formData.append('document', selectedFile.value);
      endpoint = `${config.public.apiBase}/analyze/file`;
    } else {
      formData.append('text', form.text);
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    });

    if (response.ok) {
      const data = await response.json();
      const reportId = data.reportId || data.id || data.report?._id || data.report?.id;
      if (reportId) {
        await navigateTo(`/report/${reportId}`);
      } else {
        await navigateTo('/dashboard');
      }
    } else {
      alert('Analysis node failure. Check system logs.');
    }
  } catch (error) {
    console.error('Analysis error:', error);
    alert('Neural link timeout. Please retry scan.');
  } finally {
    isAnalyzing.value = false;
  }
};
</script>

<style src="./analyze.css" scoped></style>
<style scoped>
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
</style>