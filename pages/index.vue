<template>
  <div class="landing-page bg-surface text-on-surface font-body-md min-h-screen flex flex-col selection:bg-secondary-fixed selection:text-on-secondary overflow-x-hidden">
    <main class="flex-grow">
      <!-- Hero Section -->
      <section class="relative pt-xl pb-xl overflow-hidden px-6">
        <!-- Background Decoration -->
        <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div class="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]"></div>
          <div class="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-on-tertiary-container/5 rounded-full blur-[100px]"></div>
          <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0); background-size: 40px 40px;"></div>
        </div>

        <div class="max-w-7xl mx-auto relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
            <!-- Hero Content -->
            <div class="lg:col-span-7 space-y-md">
              <div class="inline-flex items-center gap-2 bg-primary-container border border-white/5 px-4 py-2 rounded-full mb-md">
                <span class="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
                <span class="text-label-md font-label-md text-primary tracking-widest">GEMINI AI INTEGRATED</span>
              </div>
              <h1 class="font-headline-xl text-headline-xl text-white leading-none max-w-2xl">
                AI-Powered Risk Intelligence for Smarter Decisions
              </h1>
              <p class="font-body-lg text-body-lg text-on-primary-container max-w-xl">
                Analyze business risks in seconds with Gemini AI. Get instant scores, actionable insights, and mitigation strategies.
              </p>
              <div class="flex flex-wrap gap-4 pt-sm">
                <button @click="showAuthModal = true" class="bg-secondary-fixed text-on-secondary-fixed font-headline-md px-8 py-4 rounded-xl flex items-center gap-2 group hover:shadow-[0_0_20px_rgba(125,244,255,0.4)] transition-all">
                  Get Started
                  <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button class="border border-outline-variant text-on-surface font-headline-md px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-white/5 transition-all">
                  <span class="material-symbols-outlined">play_circle</span>
                  Watch Demo
                </button>
              </div>
              <!-- Trust Metrics -->
              <div class="pt-lg flex items-center gap-lg border-t border-white/5">
                <div>
                  <div class="text-headline-md font-headline-md text-white">99.9%</div>
                  <div class="text-label-md font-label-md text-on-primary-container uppercase tracking-tighter">Analysis Accuracy</div>
                </div>
                <div class="w-px h-10 bg-white/10"></div>
                <div>
                  <div class="text-headline-md font-headline-md text-white">&lt; 2s</div>
                  <div class="text-label-md font-label-md text-on-primary-container uppercase tracking-tighter">Processing Latency</div>
                </div>
                <div class="w-px h-10 bg-white/10"></div>
                <div>
                  <div class="text-headline-md font-headline-md text-white">500+</div>
                  <div class="text-label-md font-label-md text-on-primary-container uppercase tracking-tighter">Risk Vectors</div>
                </div>
              </div>
            </div>
            <!-- Hero Visual / Bento Cards -->
            <div class="lg:col-span-5 grid grid-cols-2 gap-gutter">
              <!-- Risk Pulse Card -->
              <div class="col-span-2 glass-card rounded-xl p-md inner-glow">
                <div class="flex justify-between items-start mb-lg">
                  <div>
                    <div class="text-label-md font-label-md text-primary mb-xs">LIVE RISK MONITOR</div>
                    <div class="text-headline-md font-headline-md text-white">Systemic Volatility</div>
                  </div>
                  <div class="risk-pulse w-12 h-12 flex items-center justify-center bg-error-container/20 rounded-full border border-error/30">
                    <span class="text-error font-bold">84</span>
                  </div>
                </div>
                <div class="h-32 w-full flex items-end gap-1">
                  <div class="w-full bg-secondary-fixed/20 h-[40%] rounded-t-sm"></div>
                  <div class="w-full bg-secondary-fixed/20 h-[60%] rounded-t-sm"></div>
                  <div class="w-full bg-secondary-fixed/20 h-[45%] rounded-t-sm"></div>
                  <div class="w-full bg-secondary-fixed/40 h-[80%] rounded-t-sm"></div>
                  <div class="w-full bg-secondary-fixed/60 h-[70%] rounded-t-sm"></div>
                  <div class="w-full bg-secondary-fixed h-[100%] rounded-t-sm"></div>
                </div>
              </div>
              <!-- Mini Metric 1 -->
              <div class="glass-card rounded-xl p-md inner-glow">
                <span class="material-symbols-outlined text-secondary-fixed mb-sm">security</span>
                <div class="text-headline-md font-headline-md text-white">Tier 1</div>
                <div class="text-label-md font-label-md text-on-primary-container">Security Rating</div>
              </div>
              <!-- Mini Metric 2 -->
              <div class="glass-card rounded-xl p-md inner-glow">
                <span class="material-symbols-outlined text-tertiary mb-sm">hub</span>
                <div class="text-headline-md font-headline-md text-white">4.2k</div>
                <div class="text-label-md font-label-md text-on-primary-container">Nodes Scanned</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Feature Grid (Bento Style) -->
      <section class="py-xl px-6 bg-surface-container-lowest">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-xl">
            <h2 class="font-headline-lg text-headline-lg text-white mb-sm">Enterprise-Grade Architecture</h2>
            <p class="text-body-lg text-on-primary-container max-w-2xl mx-auto">Engineered for organizations that demand precision, speed, and uncompromising security in their risk assessment protocols.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <!-- Large Feature -->
            <div class="md:col-span-2 glass-card rounded-xl p-xl inner-glow flex flex-col md:flex-row gap-lg items-center">
              <div class="flex-1">
                <span class="material-symbols-outlined text-4xl text-secondary-fixed mb-md">psychology</span>
                <h3 class="font-headline-md text-headline-md text-white mb-sm">Neural Risk Scoring</h3>
                <p class="text-body-md text-on-primary-container mb-md">Our Gemini-powered engine processes millions of unstructured data points to identify emerging threats before they manifest in traditional reporting.</p>
                <ul class="space-y-sm">
                  <li class="flex items-center gap-2 text-label-md text-on-surface">
                    <span class="material-symbols-outlined text-sm text-secondary-fixed" data-weight="fill">check_circle</span>
                    Predictive Sentiment Analysis
                  </li>
                  <li class="flex items-center gap-2 text-label-md text-on-surface">
                    <span class="material-symbols-outlined text-sm text-secondary-fixed" data-weight="fill">check_circle</span>
                    Geopolitical Stress Testing
                  </li>
                </ul>
              </div>
              <div class="flex-1 w-full h-48 rounded-lg overflow-hidden border border-white/5">
                <img class="w-full h-full object-cover" alt="Advanced AI processing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATPbGNNR7rtI_ER6UfPHi5ct_o4BsWfpKzyheFKNJfjWSbSWpii3GPOxaY_TEUyzyShCfrcbjnawkazozGy7Q8l-K9OOvOrwldz_cHZiKW5PbPScoI2UT0il9vQp-yj8DIMuRQHxgna8QtSjFxdBGTIU7vCHa2pncq2aAxb6b6I5Kb6RKYmhL8MhHJtWT64tBB5OrA_8zoA828S18iycgC52kyzP9hms9sWzSVUeBGqdM00T9sPQWJyqmIbb1Jp6dDKh1GeanqeqA"/>
              </div>
            </div>
            <!-- Small Feature 1 -->
            <div class="glass-card rounded-xl p-lg inner-glow">
              <div class="w-12 h-12 bg-on-tertiary-container/10 border border-on-tertiary-container/30 rounded-lg flex items-center justify-center mb-md">
                <span class="material-symbols-outlined text-tertiary">analytics</span>
              </div>
              <h3 class="font-headline-md text-headline-md text-white mb-sm">Instant Insights</h3>
              <p class="text-body-sm text-on-primary-container">Translate complex risk vectors into actionable executive summaries in real-time with automated intelligence synthesis.</p>
            </div>
            <!-- Small Feature 2 -->
            <div class="glass-card rounded-xl p-lg inner-glow">
              <div class="w-12 h-12 bg-secondary-fixed/10 border border-secondary-fixed/30 rounded-lg flex items-center justify-center mb-md">
                <span class="material-symbols-outlined text-secondary-fixed">shield_lock</span>
              </div>
              <h3 class="font-headline-md text-headline-md text-white mb-sm">Military Security</h3>
              <p class="text-body-sm text-on-primary-container">End-to-end encryption with Zero Trust architecture ensuring your internal risk data remains strictly confidential and immutable.</p>
            </div>
            <!-- Medium Feature -->
            <div class="md:col-span-2 glass-card rounded-xl p-lg inner-glow flex items-center justify-between">
              <div>
                <h3 class="font-headline-md text-headline-md text-white mb-sm">Global Compliance Engine</h3>
                <p class="text-body-md text-on-primary-container max-w-md">Automatically map risks to ISO, GDPR, and SOC2 frameworks without manual intervention.</p>
              </div>
              <div class="flex -space-x-4">
                <div class="w-12 h-12 rounded-full border-2 border-surface bg-surface-container flex items-center justify-center text-label-md">EU</div>
                <div class="w-12 h-12 rounded-full border-2 border-surface bg-surface-container flex items-center justify-center text-label-md">US</div>
                <div class="w-12 h-12 rounded-full border-2 border-surface bg-surface-container flex items-center justify-center text-label-md">UK</div>
                <div class="w-12 h-12 rounded-full border-2 border-surface bg-primary-container flex items-center justify-center text-label-md">+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-xl px-6 relative">
        <div class="max-w-4xl mx-auto glass-card rounded-2xl p-xl text-center inner-glow overflow-hidden relative">
          <div class="absolute -top-24 -right-24 w-64 h-64 bg-secondary-fixed/10 rounded-full blur-3xl"></div>
          <h2 class="font-headline-xl text-headline-xl text-white mb-md">Secure Your Intelligence Advantage</h2>
          <p class="text-body-lg text-on-primary-container mb-lg max-w-2xl mx-auto">Join the world's most resilient organizations using RiskIntel AI to navigate the complexity of the modern business landscape.</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button @click="showAuthModal = true" class="bg-secondary-fixed text-on-secondary-fixed font-headline-md px-12 py-4 rounded-xl hover:bg-secondary-fixed-dim transition-all shadow-xl shadow-secondary-fixed/20">Get Started Now</button>
            <button class="text-on-surface font-headline-md px-8 py-4 rounded-xl hover:bg-white/5 transition-all">Speak to an Expert</button>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-slate-950 dark:bg-[#0A192F] full-width border-t py-12 mt-auto border-white/5">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 font-['Space_Grotesk'] text-sm">
        <div class="flex flex-col gap-2">
          <span class="text-lg font-bold text-slate-200">RiskIntel AI</span>
          <span class="text-slate-500">© 2026 RiskIntel AI. Secure Intelligence for High-Stakes Decision Making.</span>
        </div>
        <nav class="flex flex-wrap justify-center gap-6">
          <a class="text-slate-500 hover:text-blue-400 transition-colors" href="#">Privacy Policy</a>
          <a class="text-slate-500 hover:text-blue-400 transition-colors" href="#">Terms of Service</a>
          <a class="text-slate-500 hover:text-blue-400 transition-colors" href="#">Security Architecture</a>
          <a class="text-slate-500 hover:text-blue-400 transition-colors" href="#">Global Compliance</a>
        </nav>
      </div>
    </footer>

    <!-- Auth Modal -->
    <AuthModal v-if="showAuthModal" @close="showAuthModal = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: false // Landing page has its own navigation
});

const showAuthModal = ref(false);
</script>

<style scoped>
.glass-card {
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.risk-pulse {
  position: relative;
}
.risk-pulse::before, .risk-pulse::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid #b9c7e4;
  width: 100%;
  height: 100%;
  opacity: 0.3;
}
.inner-glow {
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
}

/* Re-defining some of the Stitch tokens that might not be in tailwind.config.js yet */
.bg-surface { background-color: #081425; }
.text-on-surface { color: #d8e3fb; }
.bg-surface-container-lowest { background-color: #040e1f; }
.text-white { color: #ffffff; }
.text-primary { color: #b9c7e4; }
.bg-primary-container { background-color: #0a192f; }
.text-on-primary-container { color: #74829d; }
.bg-secondary-fixed { background-color: #7df4ff; }
.text-on-secondary-fixed { color: #002022; }
.bg-secondary-fixed-dim { background-color: #00dbe9; }
.text-error { color: #ffb4ab; }
.bg-error-container { background-color: #93000a; }
.text-tertiary { color: #d1bcff; }
.bg-on-tertiary-container { background-color: #9362ff; }
.border-outline-variant { border-color: #44474d; }

.font-headline-xl { font-family: 'Space Grotesk', sans-serif; font-size: 48px; font-weight: 700; }
.font-headline-lg { font-family: 'Space Grotesk', sans-serif; font-size: 32px; font-weight: 600; }
.font-headline-md { font-family: 'Space Grotesk', sans-serif; font-size: 24px; font-weight: 500; }
.font-body-lg { font-family: 'Inter', sans-serif; font-size: 18px; }
.font-body-md { font-family: 'Inter', sans-serif; font-size: 16px; }
.text-label-md { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; text-transform: uppercase; }

.pt-xl { padding-top: 80px; }
.pb-xl { padding-bottom: 80px; }
.py-xl { padding-top: 80px; padding-bottom: 80px; }
.px-6 { padding-left: 24px; padding-right: 24px; }
.mb-md { margin-bottom: 24px; }
.mb-sm { margin-bottom: 12px; }
.mb-lg { margin-bottom: 48px; }
.pt-sm { padding-top: 12px; }
.pt-lg { padding-top: 48px; }
.gap-xl { gap: 80px; }
.gap-md { gap: 24px; }
.gap-sm { gap: 12px; }
.gap-lg { gap: 48px; }
.gap-gutter { gap: 24px; }
</style>
