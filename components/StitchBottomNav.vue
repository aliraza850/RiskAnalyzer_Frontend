<template>
  <nav class="bottom-nav">
    <NuxtLink
      to="/dashboard"
      class="bottom-nav-link"
      :class="{ active: route.path === '/dashboard' }"
    >
      <span class="material-symbols-outlined bottom-nav-icon" :style="route.path === '/dashboard' ? 'font-variation-settings: \'FILL\' 1;' : ''">dashboard</span>
      <span class="bottom-nav-text">Overview</span>
    </NuxtLink>

    <NuxtLink
      to="/analyze"
      class="bottom-nav-link"
      :class="{ active: route.path === '/analyze' }"
    >
      <span class="material-symbols-outlined bottom-nav-icon" :style="route.path === '/analyze' ? 'font-variation-settings: \'FILL\' 1;' : ''">security</span>
      <span class="bottom-nav-text">Analyze</span>
    </NuxtLink>
  </nav>
</template>

<script src="../logic/StitchBottomNav.js"></script>
<style src="./StitchBottomNav.css" scoped></style>
