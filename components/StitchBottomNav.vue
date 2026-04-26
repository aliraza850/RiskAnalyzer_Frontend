<template>
  <nav class="bottom-nav">
    <NuxtLink 
      to="/dashboard" 
      class="bottom-nav-link"
      :class="{ active: route.path === '/dashboard' }"
    >
      <span class="material-symbols-outlined bottom-nav-icon" :style="route.path === '/dashboard' ? 'font-variation-settings: \'FILL\' 1;' : ''">dashboard</span>
      <span class="bottom-nav-text">Dashboard</span>
    </NuxtLink>

    <NuxtLink 
      to="/analyze" 
      class="bottom-nav-link"
      :class="{ active: route.path === '/analyze' }"
    >
      <div style="position: relative;">
        <div class="glow-background" v-if="route.path === '/analyze'"></div>
        <span class="material-symbols-outlined bottom-nav-icon" style="position: relative;" :style="route.path === '/analyze' ? 'font-variation-settings: \'FILL\' 1;' : ''">security</span>
      </div>
      <span class="bottom-nav-text">Analyze</span>
    </NuxtLink>

    <NuxtLink 
      to="/dashboard" 
      class="bottom-nav-link"
      :class="{ active: route.path.startsWith('/report') }"
    >
      <span class="material-symbols-outlined bottom-nav-icon" :style="route.path.startsWith('/report') ? 'font-variation-settings: \'FILL\' 1;' : ''">history</span>
      <span class="bottom-nav-text">Reports</span>
    </NuxtLink>
  </nav>
</template>

<script src="./StitchBottomNav.js"></script>
<style src="./StitchBottomNav.css" scoped></style>
