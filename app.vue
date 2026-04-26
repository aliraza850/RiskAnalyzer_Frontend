<template>
  <div class="app-container">
    <ClientOnly>
      <AnimatedBackground />
    </ClientOnly>
    
    <!-- Level 0: Deep Background Overlay -->
    <div class="bg-overlay" :style="{ backgroundImage: 'var(--bg-image)' }"></div>

    <div class="main-content">
      <StitchTopNav v-if="!isLanding" />
      
      <main 
        class="page-main"
        :class="{ 'with-nav': !isLanding }"
      >
        <NuxtPage />
      </main>

      <StitchBottomNav v-if="!isLanding" />
    </div>
  </div>
</template>

<script src="./app.js"></script>

<style>
.app-container {
  background-color: var(--color-background);
  color: var(--color-on-background);
  min-height: 100vh;
  display: flex;
  font-family: var(--font-family-body);
  overflow: hidden;
}

.bg-overlay {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  transition: all 0.5s;
  opacity: 0.2;
  background-size: cover;
  background-position: center;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
}

.page-main {
  flex: 1;
  overflow-y: auto;
}

.page-main.with-nav {
  margin-top: 80px;
  padding: 1.5rem;
  height: calc(100vh - 80px);
  padding-bottom: 80px;
}

/* Custom scrollbar class for use in pages */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: var(--color-surface-variant);
  border-radius: 10px;
}
</style>
