import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists

  if (to.path === '/' && isAuthenticated) {
    next('/dashboard'); // Redirect logged-in users away from login
  } else if (to.path === '/dashboard' && !isAuthenticated) {
    next('/'); // Redirect unauthenticated users to login
  } else {
    next(); // Continue normally
  }
});

export default router
