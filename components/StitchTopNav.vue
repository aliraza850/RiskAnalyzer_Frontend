<template>
  <header class="header nav-glass">
    <div class="logo-container">
      <NuxtLink :to="user ? '/dashboard' : '/'" class="logo logo-gradient">RiskAnalyzer</NuxtLink>
      
      <!-- Search Bar -->
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
        <div v-if="user" class="flex items-center gap-3">
          <button @click="handleLogout" class="logout-btn" title="Logout">
            <span class="material-symbols-outlined">logout</span>
          </button>
        </div>
        <div v-else class="ml-4">
          <NuxtLink to="/" class="bg-surface-tint text-on-primary font-bold px-4 py-2 rounded-lg text-xs tracking-widest hover:brightness-110 transition-all">
            SIGN IN
          </NuxtLink>
        </div>
      </div>

      <!-- Hamburger Menu Button (Mobile Only) -->
      <button 
        @click="isMenuOpen = true" 
        class="md:hidden p-3 rounded-lg hover:bg-surface-tint/10 text-surface-tint transition-all"
      >
        <span class="material-symbols-outlined text-3xl">menu</span>
      </button>
    </div>

    <!-- Mobile Drawer -->
    <Transition name="drawer">
      <div v-if="isMenuOpen" class="fixed inset-0 z-[60] flex md:hidden">
        <!-- Overlay -->
        <div @click="isMenuOpen = false" class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"></div>
        
        <!-- Menu Content -->
        <div class="relative ml-auto w-[280px] max-w-[80vw] h-full bg-surface dark:bg-[#0d1117] shadow-2xl flex flex-col p-6 border-l border-outline-variant/20 dark:border-white/10">
          <div class="flex items-center justify-between mb-8">
            <span class="text-xl tracking-tighter logo-gradient">RiskAnalyzer</span>
            <button @click="isMenuOpen = false" class="p-2 text-outline hover:text-on-surface transition-colors">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>

          <nav class="flex flex-col gap-2 flex-1">
            <NuxtLink 
              to="/dashboard" 
              @click="isMenuOpen = false"
              class="flex items-center gap-4 p-4 rounded-xl transition-all"
              :class="[route.path === '/dashboard' ? 'text-surface-tint bg-surface-tint/10' : 'text-outline hover:bg-surface-variant/50 dark:hover:bg-white/5']"
            >
              <span class="material-symbols-outlined">dashboard</span>
              <span class="font-medium">Overview</span>
            </NuxtLink>

            <NuxtLink 
              to="/analyze" 
              @click="isMenuOpen = false"
              class="flex items-center gap-4 p-4 rounded-xl transition-all"
              :class="[route.path === '/analyze' ? 'text-surface-tint bg-surface-tint/10' : 'text-outline hover:bg-surface-variant/50 dark:hover:bg-white/5']"
            >
              <span class="material-symbols-outlined">security</span>
              <span class="font-medium">Threat Actors</span>
            </NuxtLink>

            <div class="h-px bg-outline-variant/20 dark:bg-white/10 my-2"></div>

            <button class="flex items-center gap-4 p-4 rounded-xl text-slate-400 hover:bg-white/5 transition-all text-left w-full opacity-50 cursor-not-allowed">
              <span class="material-symbols-outlined">settings</span>
              <span class="font-medium">Admin / Settings</span>
            </button>
          </nav>

          <!-- User Profile Section -->
          <div class="mt-auto border-t border-white/10 pt-6">
            <div v-if="user" class="flex flex-col gap-4">
              <button @click="handleLogout" class="w-full py-3 rounded-xl bg-error/10 text-error border border-error/20 hover:bg-error/20 transition-all font-bold tracking-widest text-xs">
                LOG OUT
              </button>
            </div>
            <div v-else>
              <NuxtLink to="/" @click="isMenuOpen = false" class="block w-full py-4 text-center rounded-xl bg-surface-tint text-on-primary font-bold tracking-widest text-xs shadow-lg shadow-surface-tint/20">
                SIGN IN
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script src="../logic/StitchTopNav.js"></script>
<style src="./StitchTopNav.css" scoped></style>
