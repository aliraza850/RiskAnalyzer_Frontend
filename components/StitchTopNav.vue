<template>
  <header class="header nav-glass">
    <div class="logo-container">
      <NuxtLink :to="user ? '/dashboard' : '/'" class="logo logo-gradient">RiskAnalyzer</NuxtLink>

      <div class="search-container">
        <span class="material-symbols-outlined search-icon">search</span>
        <input class="search-input" placeholder="Search insights..." type="text"/>
      </div>

      <nav class="nav-links">
        <NuxtLink
          to="/dashboard"
          class="nav-link"
          :class="{ active: route.path === '/dashboard' }"
        >
          <span class="material-symbols-outlined" :style="route.path === '/dashboard' ? 'font-variation-settings: \'FILL\' 1;' : ''">dashboard</span>
          <span>Overview</span>
        </NuxtLink>
        <NuxtLink
          to="/analyze"
          class="nav-link"
          :class="{ active: route.path === '/analyze' }"
        >
          <span class="material-symbols-outlined" :style="route.path === '/analyze' ? 'font-variation-settings: \'FILL\' 1;' : ''">security</span>
          <span>Threat Actors</span>
        </NuxtLink>
      </nav>
    </div>

    <div class="actions-container">
      <div class="desktop-actions">
        <button v-if="user" @click="handleLogout" class="logout-btn" title="Logout">
          <span class="material-symbols-outlined">logout</span>
        </button>
        <NuxtLink v-else to="/" class="signin-btn">SIGN IN</NuxtLink>
      </div>

      <button @click="isMenuOpen = true" class="hamburger-btn">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>

    <!-- Mobile Drawer -->
    <Transition name="drawer">
      <div v-if="isMenuOpen" class="mobile-drawer">
        <div @click="isMenuOpen = false" class="drawer-overlay"></div>

        <div class="drawer-content">
          <div class="drawer-header">
            <span class="logo-gradient" style="font-size: 1.25rem; font-weight: 700;">RiskAnalyzer</span>
            <button @click="isMenuOpen = false" class="close-btn">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>

          <nav class="mobile-nav">
            <NuxtLink
              to="/dashboard"
              @click="isMenuOpen = false"
              class="mobile-link"
              :class="{ active: route.path === '/dashboard' }"
            >
              <span class="material-symbols-outlined">dashboard</span>
              <span>Overview</span>
            </NuxtLink>

            <NuxtLink
              to="/analyze"
              @click="isMenuOpen = false"
              class="mobile-link"
              :class="{ active: route.path === '/analyze' }"
            >
              <span class="material-symbols-outlined">security</span>
              <span>Threat Actors</span>
            </NuxtLink>

            <div style="height: 1px; background: rgba(255,255,255,0.1); margin: 0.5rem 0;"></div>

            <button style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border-radius: 0.75rem; color: #64748b; background: none; border: none; cursor: not-allowed; opacity: 0.5; width: 100%; text-align: left;">
              <span class="material-symbols-outlined">settings</span>
              <span>Admin / Settings</span>
            </button>
          </nav>

          <div style="margin-top: auto; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem;">
            <button v-if="user" @click="handleLogout" style="width: 100%; padding: 0.75rem; border-radius: 0.75rem; background: rgba(239,68,68,0.1); color: #ef4444; border: 1px solid rgba(239,68,68,0.2); font-weight: 700; letter-spacing: 0.1em; font-size: 0.75rem; cursor: pointer;">
              LOG OUT
            </button>
            <NuxtLink v-else to="/" @click="isMenuOpen = false" style="display: block; width: 100%; padding: 1rem; text-align: center; border-radius: 0.75rem; background: var(--color-surface-tint); color: var(--color-on-primary); font-weight: 700; letter-spacing: 0.1em; font-size: 0.75rem; text-decoration: none;">
              SIGN IN
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script src="../logic/StitchTopNav.js"></script>
<style src="./StitchTopNav.css" scoped></style>
