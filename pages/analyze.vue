<template>
  <div class="fade-in-up">
    <header class="mb-margin">
      <h1 class="font-headline-xl text-3xl md:text-headline-xl text-on-surface mb-stack-sm text-glow-cyan">New Risk Analysis</h1>
      <p class="font-body-lg text-base md:text-body-lg text-outline">Submit text or upload documents to get an AI-powered risk assessment.</p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
      <div class="lg:col-span-7">
        <div class="glass-panel rounded-xl p-6 md:p-glass-padding">
          <div class="flex gap-2 mb-margin bg-black/20 p-2 rounded-lg">
            <button 
              class="flex-1 py-3 rounded-md font-label-caps text-[10px] md:text-label-caps transition-all min-h-[44px]"
              :class="activeTab === 'text' ? 'bg-surface-tint text-background shadow-[0_0_15px_rgba(0,219,233,0.3)]' : 'text-outline hover:text-on-surface'"
              @click="activeTab = 'text'"
            >
              <span class="material-symbols-outlined text-sm align-middle mr-1">subject</span> Direct Text
            </button>
            <button 
              class="flex-1 py-3 rounded-md font-label-caps text-[10px] md:text-label-caps transition-all min-h-[44px]"
              :class="activeTab === 'file' ? 'bg-surface-tint text-background shadow-[0_0_15px_rgba(0,219,233,0.3)]' : 'text-outline hover:text-on-surface'"
              @click="activeTab = 'file'"
            >
              <span class="material-symbols-outlined text-sm align-middle mr-1">upload_file</span> File Upload
            </button>
          </div>

          <div class="space-y-margin">
            <!-- Text Input Mode -->
            <div v-show="activeTab === 'text'" class="space-y-stack-lg">
              <div>
                <label class="font-label-caps text-[10px] md:text-label-caps text-outline block mb-unit uppercase tracking-widest">Report Title</label>
                <input type="text" class="w-full bg-surface-container-high/50 border-b border-white/10 focus:border-surface-tint text-on-surface font-body-md text-base p-4 md:p-stack-md outline-none transition-colors" v-model="form.title" placeholder="e.g. Q3 Vendor Financial Check" />
              </div>
              <div>
                <label class="font-label-caps text-[10px] md:text-label-caps text-outline block mb-unit uppercase tracking-widest">Business / Operational Data</label>
                <textarea 
                  class="w-full bg-surface-container-high/50 border-b border-white/10 focus:border-surface-tint text-on-surface font-body-md text-base p-4 md:p-stack-md outline-none transition-colors resize-none h-48 md:h-64" 
                  v-model="form.text" 
                  placeholder="Paste contracts, internal audits, business plans..."
                ></textarea>
              </div>
            </div>

            <!-- File Upload Mode -->
            <div v-show="activeTab === 'file'" class="space-y-stack-lg">
               <div>
                  <label class="font-label-caps text-[10px] md:text-label-caps text-outline block mb-unit uppercase tracking-widest">Report Title</label>
                  <input type="text" class="w-full bg-surface-container-high/50 border-b border-white/10 focus:border-surface-tint text-on-surface font-body-md text-base p-4 md:p-stack-md outline-none transition-colors" v-model="form.title" placeholder="e.g. Employee Logs CSV Analysis" />
               </div>
              <div 
                class="border-2 border-dashed border-white/10 rounded-xl p-6 md:p-margin flex flex-col items-center justify-center transition-all relative group"
                :class="{ 'border-surface-tint bg-surface-tint/5': dragOver || selectedFile }"
                @dragover.prevent="dragOver = true" 
                @dragleave.prevent="dragOver = false" 
                @drop.prevent="handleDrop"
              >
                <span class="material-symbols-outlined text-5xl md:text-display-lg text-surface-tint mb-stack-md" :class="{ 'animate-bounce': dragOver }">cloud_upload</span>
                <h3 class="font-headline-md text-xl md:text-headline-md text-on-surface mb-unit">Drag & Drop files here</h3>
                <p class="font-body-md text-sm md:text-body-md text-outline text-center">or click to browse local files</p>
                <input type="file" class="absolute inset-0 opacity-0 cursor-pointer" @change="handleFileSelect" accept=".csv, .json" />
                
                <div v-if="selectedFile" class="mt-stack-lg flex items-center gap-2 bg-surface-tint/20 px-stack-md py-stack-sm rounded-full border border-surface-tint/30">
                   <span class="material-symbols-outlined text-surface-tint">description</span>
                   <span class="font-data-mono text-xs md:text-data-mono text-on-surface truncate max-w-[200px]">{{ selectedFile.name }}</span>
                </div>
              </div>
            </div>
          </div>

          <button 
            class="w-full mt-margin py-4 md:py-stack-md bg-surface-tint text-background font-label-caps text-sm md:text-label-caps rounded-lg shadow-[0_0_20px_rgba(0,219,233,0.3)] hover:shadow-[0_0_40px_rgba(0,219,233,0.5)] transition-all disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2 min-h-[48px]"
            @click="submitAnalysis"
            :disabled="isAnalyzing || (!form.text && !selectedFile)"
          >
            <template v-if="!isAnalyzing">
              Generate AI Risk Report <span class="material-symbols-outlined text-sm">auto_awesome</span>
            </template>
            <template v-else>
              <span class="animate-spin material-symbols-outlined">sync</span>
              Analyzing Data...
            </template>
          </button>
        </div>
      </div>

      <!-- Status Panel -->
      <div class="lg:col-span-5 h-full">
        <div class="glass-panel rounded-xl p-6 md:p-glass-padding h-full flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[300px] md:min-h-[400px]">
          <div v-if="!isAnalyzing && !result" class="space-y-stack-lg opacity-50">
             <span class="material-symbols-outlined text-5xl md:text-display-lg text-outline">radar</span>
             <h3 class="font-headline-md text-xl md:text-headline-md text-on-surface">Awaiting Input</h3>
             <p class="font-body-md text-sm md:text-body-md text-outline max-w-sm">Your complete risk analysis breakdown will appear here once the AI finishes processing your data.</p>
          </div>

          <div v-else-if="isAnalyzing" class="w-full space-y-margin">
            <div class="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
              <div class="absolute inset-0 border-4 border-surface-tint/20 rounded-full"></div>
              <div class="absolute inset-0 border-4 border-t-surface-tint rounded-full animate-spin"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="material-symbols-outlined text-4xl md:text-display-lg text-surface-tint">smart_toy</span>
              </div>
            </div>
            
            <h3 class="font-headline-md text-xl md:text-headline-md text-on-surface">Gemini AI is Analyzing...</h3>
            
            <div class="space-y-stack-sm text-left max-w-xs mx-auto">
              <div class="flex items-center gap-2 font-data-mono text-xs md:text-data-mono text-green-400">
                <span class="material-symbols-outlined text-sm">check_circle</span> Initializing Model
              </div>
              <div class="flex items-center gap-2 font-data-mono text-xs md:text-data-mono text-surface-tint animate-pulse">
                <span class="material-symbols-outlined text-sm animate-spin">sync</span> Parsing data structures
              </div>
              <div class="flex items-center gap-2 font-data-mono text-xs md:text-data-mono text-outline">
                <span class="material-symbols-outlined text-sm">schedule</span> Evaluating risk vectors
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeTab = ref('text');
const isAnalyzing = ref(false);
const dragOver = ref(false);
const selectedFile = ref(null);
const result = ref(null);

const form = ref({
  title: '',
  text: '',
});

const handleFileSelect = (event) => {
  selectedFile.value = event.target.files[0];
};

const handleDrop = (event) => {
  dragOver.value = false;
  if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
    selectedFile.value = event.dataTransfer.files[0];
  }
};

const submitAnalysis = async () => {
    isAnalyzing.value = true;
    try {
        let response;
        const apiUrl = 'https://riskanalyzer-backend.onrender.com/api';
        
        if (activeTab.value === 'text') {
            response = await fetch(`${apiUrl}/analyze/text`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: form.value.title || 'Untitled Assessment',
                    text: form.value.text,
                })
            });
        } else {
             const formData = new FormData();
             formData.append('file', selectedFile.value);
             formData.append('title', form.value.title || 'Untitled File Report');
             response = await fetch(`${apiUrl}/analyze/file`, {
                method: 'POST',
                body: formData
             });
        }
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Analysis failed');
        }
        
        const data = await response.json();
        
        // Backend returns report object containing _id
        const reportId = data.report?._id || data._id;
        console.log('Analysis successful, Report ID:', reportId);
        
        // Navigate to home page to see the new report in the list
        router.push('/');
        
    } catch (error) {
        console.error('Analysis error:', error);
        alert(`Analysis Failed: ${error.message}`);
    } finally {
        isAnalyzing.value = false;
    }
};
</script>

<style scoped>
/* Page-specific overrides if any */
</style>