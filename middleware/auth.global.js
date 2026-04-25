export default defineNuxtRouteMiddleware(async (to, from) => {
  // skip middleware on server side
  if (process.server) return;

  const { user, checkAuth } = useAuth();
  
  // Initialize auth if not already done
  if (!user.value) {
    await checkAuth();
  }

  // If user is logged in and trying to access landing page, redirect to dashboard
  if (user.value && to.path === '/') {
    return navigateTo('/dashboard');
  }

  // If user is NOT logged in and trying to access protected pages, redirect to landing
  const protectedRoutes = ['/dashboard', '/analyze', '/reports'];
  const isProtected = protectedRoutes.some(path => to.path.startsWith(path));

  if (!user.value && isProtected) {
    return navigateTo('/');
  }
});
