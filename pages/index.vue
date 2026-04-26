<template>
  <div class="landing-page">
    <main style="flex-grow: 1;">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-bg-decoration">
          <div class="blob-1"></div>
          <div class="blob-2"></div>
        </div>

        <div class="hero-content">
          <div class="hero-grid">
            <!-- Hero Content -->
            <div class="hero-text-block">
              <div class="hero-badge">
                <span style="width: 8px; height: 8px; border-radius: 9999px; background-color: #00dbe9;" class="animate-pulse"></span>
                <span style="font-size: 12px; color: #b9c7e4; letter-spacing: 0.1em; font-weight: 600;">GEMINI AI INTEGRATED</span>
              </div>
              <h1 class="hero-title">
                AI-Powered Risk Intelligence for Smarter Decisions
              </h1>
              <p class="hero-subtitle">
                Analyze business risks in seconds with Gemini AI. Get instant scores, actionable insights, and mitigation strategies.
              </p>
              <div style="display: flex; flex-wrap: wrap; gap: 1rem; padding-top: 1rem;">
                <button @click="showAuthModal = true" class="btn-primary">
                  Get Started
                  <span class="material-symbols-outlined">arrow_forward</span>
                </button>
                <button class="btn-outline">
                  <span class="material-symbols-outlined">play_circle</span>
                  Watch Demo
                </button>
              </div>
              <!-- Trust Metrics -->
              <div class="trust-metrics">
                <div class="metric-item">
                  <div class="value">99.9%</div>
                  <div class="label">Analysis Accuracy</div>
                </div>
                <div class="metric-divider"></div>
                <div class="metric-item">
                  <div class="value">&lt; 2s</div>
                  <div class="label">Processing Latency</div>
                </div>
                <div class="metric-divider"></div>
                <div class="metric-item">
                  <div class="value">500+</div>
                  <div class="label">Risk Vectors</div>
                </div>
              </div>
            </div>
            <!-- Hero Visual / Bento Cards -->
            <div class="hero-visual">
              <div class="bento-grid">
                <!-- Risk Pulse Card -->
                <div class="glass-card card-wide">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem;">
                    <div>
                      <div style="font-size: 12px; color: #b9c7e4; margin-bottom: 0.5rem;">LIVE RISK MONITOR</div>
                      <div style="font-size: 1.5rem; font-weight: 600; color: white;">Systemic Volatility</div>
                    </div>
                    <div class="risk-pulse" style="width: 3rem; height: 3rem; display: flex; align-items: center; justify-content: center; background-color: rgba(147, 0, 10, 0.2); border: 1px solid rgba(255, 180, 171, 0.3); border-radius: 9999px;">
                      <span style="color: #ffb4ab; font-weight: 700;">84</span>
                    </div>
                  </div>
                  <div style="height: 8rem; display: flex; align-items: flex-end; gap: 4px;">
                    <div style="flex: 1; background-color: rgba(125, 244, 255, 0.2); height: 40%; border-top-left-radius: 2px; border-top-right-radius: 2px;"></div>
                    <div style="flex: 1; background-color: rgba(125, 244, 255, 0.2); height: 60%; border-top-left-radius: 2px; border-top-right-radius: 2px;"></div>
                    <div style="flex: 1; background-color: rgba(125, 244, 255, 0.2); height: 45%; border-top-left-radius: 2px; border-top-right-radius: 2px;"></div>
                    <div style="flex: 1; background-color: rgba(125, 244, 255, 0.4); height: 80%; border-top-left-radius: 2px; border-top-right-radius: 2px;"></div>
                    <div style="flex: 1; background-color: rgba(125, 244, 255, 0.6); height: 70%; border-top-left-radius: 2px; border-top-right-radius: 2px;"></div>
                    <div style="flex: 1; background-color: #7df4ff; height: 100%; border-top-left-radius: 2px; border-top-right-radius: 2px;"></div>
                  </div>
                </div>
                <!-- Mini Metric 1 -->
                <div class="glass-card">
                  <span class="material-symbols-outlined" style="color: #7df4ff; margin-bottom: 0.75rem;">security</span>
                  <div style="font-size: 1.5rem; font-weight: 600; color: white;">Tier 1</div>
                  <div style="font-size: 12px; color: #74829d;">Security Rating</div>
                </div>
                <!-- Mini Metric 2 -->
                <div class="glass-card">
                  <span class="material-symbols-outlined" style="color: #d1bcff; margin-bottom: 0.75rem;">hub</span>
                  <div style="font-size: 1.5rem; font-weight: 600; color: white;">4.2k</div>
                  <div style="font-size: 12px; color: #74829d;">Nodes Scanned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Feature Grid -->
      <section class="features-section">
        <div class="hero-content">
          <div class="section-title">
            <h2 style="font-size: 2rem; font-weight: 600; color: white; margin-bottom: 0.75rem;">Enterprise-Grade Architecture</h2>
            <p style="font-size: 1.125rem; color: #74829d; max-width: 40rem; margin: 0 auto;">Engineered for organizations that demand precision, speed, and uncompromising security.</p>
          </div>
          <div class="feature-grid">
            <div class="feature-card-large glass-card">
              <div style="flex: 1;">
                <span class="material-symbols-outlined" style="font-size: 2.5rem; color: #7df4ff; margin-bottom: 1rem;">psychology</span>
                <h3 style="font-size: 1.5rem; font-weight: 600; color: white; margin-bottom: 0.75rem;">Neural Risk Scoring</h3>
                <p style="font-size: 1rem; color: #74829d; margin-bottom: 1.5rem;">Our Gemini-powered engine processes millions of unstructured data points to identify emerging threats.</p>
              </div>
              <div style="flex: 1; height: 12rem; border-radius: 0.5rem; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
                <img style="width: 100%; height: 100%; object-fit: cover;" alt="AI" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATPbGNNR7rtI_ER6UfPHi5ct_o4BsWfpKzyheFKNJfjWSbSWpii3GPOxaY_TEUyzyShCfrcbjnawkazozGy7Q8l-K9OOvOrwldz_cHZiKW5PbPScoI2UT0il9vQp-yj8DIMuRQHxgna8QtSjFxdBGTIU7vCHa2pncq2aAxb6b6I5Kb6RKYmhL8MhHJtWT64tBB5OrA_8zoA828S18iycgC52kyzP9hms9sWzSVUeBGqdM00T9sPQWJyqmIbb1Jp6dDKh1GeanqeqA"/>
              </div>
            </div>
            <div class="glass-card">
              <span class="material-symbols-outlined" style="color: #d1bcff; margin-bottom: 1rem; font-size: 2rem;">analytics</span>
              <h3 style="font-size: 1.5rem; font-weight: 500; color: white; margin-bottom: 0.75rem;">Instant Insights</h3>
              <p style="font-size: 0.875rem; color: #74829d;">Translate complex risk vectors into actionable summaries in real-time.</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <span style="font-size: 1.125rem; font-weight: 700; color: #cbd5e1;">RiskIntel AI</span>
          <span style="color: #64748b;">© 2026 RiskIntel AI. Secure Intelligence.</span>
        </div>
        <nav style="display: flex; flex-wrap: wrap; gap: 1.5rem;">
          <a style="color: #64748b; text-decoration: none; font-size: 14px;" href="#">Privacy</a>
          <a style="color: #64748b; text-decoration: none; font-size: 14px;" href="#">Terms</a>
          <a style="color: #64748b; text-decoration: none; font-size: 14px;" href="#">Security</a>
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
  layout: false
});

const showAuthModal = ref(false);
</script>

<style src="./index.css" scoped></style>
