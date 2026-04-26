<template>
  <nav class="bottom-nav">
    <div class="nav-container">
      <NuxtLink to="/dashboard" class="nav-item" :class="{ active: route.path === '/dashboard' }">
        <span class="material-symbols-outlined" :style="route.path === '/dashboard' ? 'font-variation-settings: \'FILL\' 1;' : ''">dashboard</span>
        <span class="nav-label">Overview</span>
      </NuxtLink>
      
      <NuxtLink to="/analyze" class="nav-item" :class="{ active: route.path === '/analyze' }">
        <span class="material-symbols-outlined" :style="route.path === '/analyze' ? 'font-variation-settings: \'FILL\' 1;' : ''">security</span>
        <span class="nav-label">Analyze</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script src="../logic/StitchBottomNav.js"></script>
<style src="./StitchBottomNav.css" scoped></style>
