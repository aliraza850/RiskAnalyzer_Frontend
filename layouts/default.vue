<template>
  <div class="app-container">
    <!-- Resilient 3D Background -->
    <ClientOnly>
      <AnimatedBackground />
      <template #fallback>
        <div class="bg-loading-placeholder"></div>
      </template>
    </ClientOnly>
    
    <!-- Layout Content -->
    <div class="main-content">
      <StitchTopNav v-if="!isLanding" />
      
      <main 
        class="page-main"
        :class="{ 'with-nav': !isLanding }"
      >
        <slot />
      </main>

      <StitchBottomNav v-if="!isLanding" />
    </div>
  </div>
</template>

<script src="../logic/layout.js"></script>

<style>
.app-container {
  background-color: var(--color-background, #0c1324);
  color: var(--color-on-background, #dce1fb);
  min-height: 100vh;
  display: flex;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
}

.bg-loading-placeholder {
  position: fixed;
  inset: 0;
  background: #081425;
  z-index: -1;
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

@media (max-width: 768px) {
  .page-main.with-nav {
    padding-bottom: 90px;
  }
}
</style>
