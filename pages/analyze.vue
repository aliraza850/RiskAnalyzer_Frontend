<template>
  <div class="fade-in-up">
    <!-- Premium Command Header -->
    <header class="mb-margin flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/20 pb-margin">
      <div class="space-y-2">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-tint/10 border border-surface-tint/20 text-surface-tint font-label-caps text-[10px] tracking-widest">
          <span class="material-symbols-outlined text-sm">terminal</span> COMMAND CENTER
        </div>
        <h1 class="font-headline-xl text-4xl md:text-5xl text-on-surface text-glow-cyan">Initiate Risk Scan</h1>
        <p class="font-body-lg text-outline opacity-70 max-w-xl">Harness Gemini AI to detect, analyze, and mitigate complex business threats in real-time.</p>
      </div>
      
      <div class="flex items-center gap-4 bg-surface-variant/20 dark:bg-black/20 p-1 rounded-xl border border-outline-variant/20 dark:border-white/5">
        <button 
          class="px-6 py-3 rounded-lg font-label-caps text-[10px] tracking-widest transition-all relative overflow-hidden group"
          :class="activeTab === 'text' ? 'text-background z-10' : 'text-outline hover:text-on-surface'"
          @click="activeTab = 'text'"
        >
          <div v-if="activeTab === 'text'" class="absolute inset-0 bg-surface-tint shadow-[0_0_20px_rgba(0,219,233,0.5)] z-[-1] animate-in fade-in zoom-in duration-300"></div>
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined text-sm">subject</span> DIRECT INPUT
          </span>
        </button>
        <button 
          class="px-6 py-3 rounded-lg font-label-caps text-[10px] tracking-widest transition-all relative overflow-hidden group"
          :class="activeTab === 'file' ? 'text-background z-10' : 'text-outline hover:text-on-surface'"
          @click="activeTab = 'file'"
        >
          <div v-if="activeTab === 'file'" class="absolute inset-0 bg-surface-tint shadow-[0_0_20px_rgba(0,219,233,0.5)] z-[-1] animate-in fade-in zoom-in duration-300"></div>
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined text-sm">upload_file</span> FILE UPLOAD
          </span>
        </button>
      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
      <!-- Input Module -->
      <div class="lg:col-span-7 xl:col-span-8">
        <div class="glass-panel rounded-2xl p-8 md:p-10 border border-outline-variant/20 dark:border-white/10 shadow-2xl relative overflow-hidden h-full">
          <div class="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <span class="material-symbols-outlined text-[140px] text-on-surface">shield_person</span>
          </div>
          
          <div class="space-y-margin relative z-10">
            <!-- Text Input Mode -->
            <div v-show="activeTab === 'text'" class="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
              <div class="group">
                <label class="font-label-caps text-[10px] text-surface-tint block mb-2 uppercase tracking-[0.3em] opacity-70 group-focus-within:opacity-100 transition-opacity">Investigation Title</label>
                <div class="relative">
                  <input type="text" class="w-full bg-surface-variant/20 dark:bg-white/5 border border-outline-variant/30 dark:border-white/10 rounded-xl focus:border-surface-tint focus:bg-surface-variant/30 dark:focus:bg-white/[0.08] text-on-surface font-body-md text-base p-5 outline-none transition-all shadow-inner" v-model="form.title" placeholder="e.g. Q4 Supply Chain Integrity Audit" />
                  <div class="absolute bottom-0 left-0 h-0.5 bg-surface-tint w-0 group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>
              
              <div class="group">
                <label class="font-label-caps text-[10px] text-surface-tint block mb-2 uppercase tracking-[0.3em] opacity-70 group-focus-within:opacity-100 transition-opacity">Core Analysis Data</label>
                <div class="relative">
                  <textarea 
                    class="w-full bg-surface-variant/20 dark:bg-white/5 border border-outline-variant/30 dark:border-white/10 rounded-xl focus:border-surface-tint focus:bg-surface-variant/30 dark:focus:bg-white/[0.08] text-on-surface font-body-md text-base p-5 outline-none transition-all resize-none h-64 md:h-80 shadow-inner" 
                    v-model="form.text" 
                    placeholder="Paste contracts, security logs, or business intelligence for extraction..."
                  ></textarea>
                  <div class="absolute bottom-0 left-0 h-0.5 bg-surface-tint w-0 group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>
            </div>

            <!-- File Upload Mode -->
            <div v-show="activeTab === 'file'" class="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
               <div class="group">
                  <label class="font-label-caps text-[10px] text-surface-tint block mb-2 uppercase tracking-[0.3em] opacity-70 group-focus-within:opacity-100 transition-opacity">Dataset Title</label>
                  <input type="text" class="w-full bg-surface-variant/20 dark:bg-white/5 border border-outline-variant/30 dark:border-white/10 rounded-xl focus:border-surface-tint focus:bg-surface-variant/30 dark:focus:bg-white/[0.08] text-on-surface font-body-md text-base p-5 outline-none transition-all shadow-inner" v-model="form.title" placeholder="e.g. Regional Risk Logs 2024.csv" />
               </div>
               
              <div 
                class="border-2 border-dashed border-outline-variant/30 dark:border-white/10 rounded-2xl p-12 flex flex-col items-center justify-center transition-all relative group overflow-hidden bg-surface-variant/20 dark:bg-white/5 hover:border-surface-tint/50 hover:bg-surface-tint/5"
                :class="{ 'border-surface-tint bg-surface-tint/10': dragOver || selectedFile }"
                @dragover.prevent="dragOver = true" 
                @dragleave.prevent="dragOver = false" 
                @drop.prevent="handleDrop"
              >
                <!-- Animated Background for drop zone -->
                <div v-if="dragOver" class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-surface-tint)_0%,_transparent_70%)] opacity-10 animate-pulse"></div>

                <div class="relative z-10 flex flex-col items-center">
                  <div class="w-20 h-20 rounded-full bg-surface-tint/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <span class="material-symbols-outlined text-4xl text-surface-tint" :class="{ 'animate-bounce': dragOver }">cloud_upload</span>
                  </div>
                  <h3 class="font-headline-md text-2xl text-on-surface mb-2">Ingest Security Data</h3>
                  <p class="font-body-md text-outline text-center mb-8">Drop CSV or JSON files into the matrix</p>
                  
                  <button class="px-8 py-3 rounded-full bg-surface-variant/50 dark:bg-white/10 border border-outline-variant/30 dark:border-white/10 text-on-surface font-label-caps text-[10px] tracking-widest hover:bg-surface-variant/80 dark:hover:bg-white/20 transition-all">
                    BROWSE LOCAL STORAGE
                  </button>
                </div>
                
                <input type="file" class="absolute inset-0 opacity-0 cursor-pointer" @change="handleFileSelect" accept=".csv, .json" />
                
                <div v-if="selectedFile" class="mt-8 flex items-center gap-3 bg-surface-tint/20 px-6 py-3 rounded-xl border border-surface-tint/30 animate-in fade-in zoom-in">
                   <span class="material-symbols-outlined text-surface-tint">verified</span>
                   <div class="flex flex-col">
                     <span class="font-data-mono text-xs text-on-surface">{{ selectedFile.name }}</span>
                     <span class="text-[9px] text-outline uppercase tracking-tighter">{{ (selectedFile.size / 1024).toFixed(1) }} KB READY</span>
                   </div>
                   <button @click.stop.prevent="selectedFile = null" class="ml-4 p-1 hover:text-error transition-colors">
                     <span class="material-symbols-outlined text-sm">close</span>
                   </button>
                </div>
              </div>
            </div>
            
            <!-- Action Button -->
            <button 
              class="group relative w-full py-5 rounded-xl bg-surface-tint text-background font-label-caps tracking-[0.4em] text-sm overflow-hidden transition-all shadow-[0_20px_40px_rgba(0,219,233,0.2)] hover:shadow-[0_20px_60px_rgba(0,219,233,0.4)] disabled:opacity-50 disabled:grayscale disabled:shadow-none"
              @click="submitAnalysis"
              :disabled="isAnalyzing || (!form.text && !selectedFile)"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span v-if="!isAnalyzing" class="flex items-center justify-center gap-3">
                GENERATE INTELLIGENCE REPORT <span class="material-symbols-outlined text-lg">bolt</span>
              </span>
              <span v-else class="flex items-center justify-center gap-3">
                <span class="animate-spin material-symbols-outlined">sync</span>
                PROCESSING NEURAL VECTORS...
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- System Monitor Panel -->
      <div class="lg:col-span-5 xl:col-span-4 flex flex-col h-full gap-gutter">
        <div class="glass-panel rounded-2xl p-8 h-full border border-outline-variant/20 dark:border-white/10 flex flex-col relative overflow-hidden">
          <!-- Animated Scanning Line -->
          <div v-if="isAnalyzing" class="absolute left-0 w-full h-0.5 bg-surface-tint shadow-[0_0_15px_#00dbe9] z-20 animate-scan"></div>
          
          <div class="flex items-center gap-3 mb-8">
            <span class="w-3 h-3 rounded-full" :class="isAnalyzing ? 'bg-surface-tint animate-pulse shadow-[0_0_10px_#00dbe9]' : 'bg-outline'"></span>
            <h3 class="font-label-caps text-[10px] tracking-[0.3em] text-outline uppercase">System Monitor</h3>
          </div>

          <div v-if="!isAnalyzing" class="flex-1 flex flex-col items-center justify-center text-center space-y-6">
             <div class="w-24 h-24 rounded-full border-2 border-outline-variant/10 dark:border-white/5 flex items-center justify-center relative">
               <div class="absolute inset-0 border-t-2 border-surface-tint/20 rounded-full animate-spin-slow"></div>
               <span class="material-symbols-outlined text-4xl text-outline opacity-40">radar</span>
             </div>
             <div class="space-y-2">
               <h3 class="font-headline-md text-xl text-on-surface">Awaiting Payload</h3>
               <p class="font-body-md text-sm text-outline px-4">Provide intelligence input to initialize the risk evaluation sequence.</p>
             </div>
          </div>

          <div v-else class="flex-1 space-y-10">
            <div class="space-y-6">
              <div class="flex items-center justify-between font-data-mono text-[10px] text-surface-tint">
                <span class="tracking-widest uppercase">Analyzing Data Stream</span>
                <span>CALCULATING...</span>
              </div>
              <div class="h-1.5 w-full bg-surface-variant dark:bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-surface-tint animate-progress-indeterminate"></div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-center gap-3 p-4 rounded-xl bg-surface-tint/5 border border-surface-tint/10 animate-in fade-in slide-in-from-bottom-2">
                <span class="material-symbols-outlined text-surface-tint text-sm animate-spin">sync</span>
                <span class="font-data-mono text-[11px] text-on-surface uppercase tracking-wider">Parsing unstructured vectors</span>
              </div>
              <div class="flex items-center gap-3 p-4 rounded-xl bg-surface-variant/20 dark:bg-white/5 border border-outline-variant/10 dark:border-white/5 opacity-50">
                <span class="material-symbols-outlined text-outline text-sm">schedule</span>
                <span class="font-data-mono text-[11px] text-outline uppercase tracking-wider">Evaluating risk gradients</span>
              </div>
              <div class="flex items-center gap-3 p-4 rounded-xl bg-surface-variant/20 dark:bg-white/5 border border-outline-variant/10 dark:border-white/5 opacity-30">
                <span class="material-symbols-outlined text-outline text-sm">lock_open</span>
                <span class="font-data-mono text-[11px] text-outline uppercase tracking-wider">Generating remediation roadmap</span>
              </div>
            </div>

            <!-- Terminal Output Simulation -->
            <div class="mt-auto bg-black/40 dark:bg-black/40 rounded-xl p-4 font-data-mono text-[10px] text-green-500/70 space-y-1 h-32 overflow-hidden border border-outline-variant/20 dark:border-white/5 shadow-inner">
               <div class="animate-pulse">> [SYSTEM] INITIALIZING GEMINI-1.5-PRO...</div>
               <div>> [AUTH] CONNECTION ESTABLISHED</div>
               <div>> [DATA] BUFFERING STREAM...</div>
               <div class="text-surface-tint">> [SCAN] DETECTING VULNERABILITIES...</div>
               <div class="animate-pulse">_</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./analyze.js"></script>
<style src="./analyze.css" scoped></style>
<style scoped>
.absolute-fill {
  position: absolute;
  inset: 0;
}
.opacity-0 {
  opacity: 0;
}
.cursor-pointer {
  cursor: pointer;
}
.file-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: rgba(0, 219, 233, 0.1);
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 219, 233, 0.2);
}
.file-name {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
}
.file-size {
  font-size: 9px;
  text-transform: uppercase;
  opacity: 0.6;
}
.monitor-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}
.monitor-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  background-color: var(--color-outline);
}
.monitor-dot.active {
  background-color: var(--color-surface-tint);
  animation: pulse 2s infinite;
  box-shadow: 0 0 10px var(--color-surface-tint);
}
.monitor-title {
  font-size: 10px;
  letter-spacing: 0.3em;
  color: var(--color-outline);
  text-transform: uppercase;
}
.monitor-idle {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
}
.radar-container {
  width: 6rem;
  height: 6rem;
  border-radius: 9999px;
  border: 2px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.radar-icon {
  font-size: 2.25rem;
  color: var(--color-outline);
  opacity: 0.4;
}
.monitor-active {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.progress-label {
  display: flex;
  justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--color-surface-tint);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.progress-bar {
  height: 0.375rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 9999px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background-color: var(--color-surface-tint);
}
.scan-line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-surface-tint);
  box-shadow: 0 0 15px var(--color-surface-tint);
  z-index: 20;
}
</style>