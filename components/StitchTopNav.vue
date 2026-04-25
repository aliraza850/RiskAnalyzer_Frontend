<template>
  <header class="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 h-20 nav-glass">
    <div class="flex items-center gap-margin flex-1">
      <NuxtLink :to="user ? '/dashboard' : '/'" class="text-2xl tracking-tighter logo-gradient shrink-0">RiskAnalyzer</NuxtLink>
      
      <!-- Search Bar (Stitch Style) - Hidden on Mobile -->
      <div class="hidden lg:flex flex-1 max-w-md mx-12 items-center bg-surface-variant/30 dark:bg-black/20 border border-outline-variant/30 dark:border-white/10 rounded-full px-4 py-2 shadow-inner transition-all focus-within:border-surface-tint/50 focus-within:bg-surface-variant/50 dark:focus-within:bg-black/40">
        <span class="material-symbols-outlined text-surface-tint mr-2 text-xl">search</span>
        <input class="bg-transparent border-none outline-none w-full text-on-surface placeholder-outline font-body-md text-sm" placeholder="Search insights..." type="text"/>
      </div>

      <nav class="hidden md:flex gap-4">
        <NuxtLink 
          to="/dashboard" 
          class="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-xs uppercase tracking-widest transition-all"
          :class="[route.path === '/dashboard' ? 'text-surface-tint bg-surface-tint/10 shadow-[inset_0_0_10px_rgba(0,240,255,0.1)] border-b-2 border-surface-tint' : 'text-outline hover:text-surface-tint hover:bg-surface-tint/5']"
        >
          <span class="material-symbols-outlined text-lg" :style="route.path === '/dashboard' ? 'font-variation-settings: \'FILL\' 1;' : ''">dashboard</span>
          <span>Overview</span>
        </NuxtLink>
        <NuxtLink 
          to="/analyze" 
          class="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-xs uppercase tracking-widest transition-all"
          :class="[route.path === '/analyze' ? 'text-surface-tint bg-surface-tint/10 shadow-[inset_0_0_10px_rgba(0,240,255,0.1)] border-b-2 border-surface-tint' : 'text-outline hover:text-surface-tint hover:bg-surface-tint/5']"
        >
          <span class="material-symbols-outlined text-lg" :style="route.path === '/analyze' ? 'font-variation-settings: \'FILL\' 1;' : ''">security</span>
          <span>Threat Actors</span>
        </NuxtLink>
      </nav>
    </div>
    
    <div class="flex items-center gap-2">
      <!-- Desktop Only: Theme & Notifications -->
      <div class="hidden md:flex items-center gap-2">
        <button 
          @click="toggleTheme" 
          class="p-2 rounded-full hover:bg-surface-tint/10 transition-all duration-300 active:scale-95 flex items-center justify-center text-surface-tint"
          :title="isDark ? 'Switch to Bright Mode' : 'Switch to Dark Mode'"
        >
          <span class="material-symbols-outlined text-2xl">
            {{ isDark ? 'light_mode' : 'dark_mode' }}
          </span>
        </button>

        <button class="p-2 rounded-full hover:bg-surface-tint/10 text-surface-tint transition-all duration-300 active:scale-95 flex items-center justify-center">
          <span class="material-symbols-outlined">notifications</span>
        </button>
        
        <div v-if="user" class="flex items-center gap-3 ml-2 group cursor-pointer relative">
          <div class="flex flex-col items-end mr-1">
            <span class="text-[10px] text-outline tracking-widest uppercase font-bold leading-none mb-1">Authenticated</span>
            <span class="text-xs text-on-surface font-medium max-w-[120px] truncate">{{ user.email }}</span>
          </div>
          <button @click="handleLogout" class="p-2 rounded-full hover:bg-error/10 text-outline hover:text-error transition-all" title="Logout">
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

            <button 
              @click="toggleTheme" 
              class="flex items-center gap-4 p-4 rounded-xl text-outline hover:bg-surface-variant/50 dark:hover:bg-white/5 transition-all text-left w-full"
            >
              <span class="material-symbols-outlined">{{ isDark ? 'light_mode' : 'dark_mode' }}</span>
              <span class="font-medium">{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
            </button>

            <div class="h-px bg-outline-variant/20 dark:bg-white/10 my-2"></div>

            <button class="flex items-center gap-4 p-4 rounded-xl text-slate-400 hover:bg-white/5 transition-all text-left w-full opacity-50 cursor-not-allowed">
              <span class="material-symbols-outlined">settings</span>
              <span class="font-medium">Admin / Settings</span>
            </button>
          </nav>

          <!-- User Profile Section -->
          <div class="mt-auto border-t border-white/10 pt-6">
            <div v-if="user" class="flex flex-col gap-4">
              <div class="flex items-center gap-4 px-2">
                <div class="w-10 h-10 rounded-full bg-surface-tint/20 flex items-center justify-center text-surface-tint border border-surface-tint/30">
                  <span class="material-symbols-outlined">person</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-sm font-bold text-on-surface truncate max-w-[160px]">{{ user.email }}</span>
                  <span class="text-xs text-outline tracking-wider uppercase">Authenticated</span>
                </div>
              </div>
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

<script setup>
import { ref, onMounted } from 'vue';
import { useAuth } from '~/composables/useAuth';

const route = useRoute();
const { user, logout } = useAuth();

const isDark = useState('isDark', () => true);
const isMenuOpen = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  updateTheme();
};

const handleLogout = async () => {
  isMenuOpen.value = false;
  await logout();
};

const updateTheme = () => {
  if (!process.client) return;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

onMounted(() => {
  if (process.client) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDark.value = savedTheme === 'dark';
    } else {
      isDark.value = true;
    }
    updateTheme();
  }
});
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.3s ease-in-out;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-active .relative,
.drawer-leave-active .relative {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-from .relative,
.drawer-leave-to .relative {
  transform: translateX(100%);
}
</style>
