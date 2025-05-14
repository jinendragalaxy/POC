import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import First from '@/views/First.vue'
import Second from '@/views/Second.vue'
import Third from '@/views/Third.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'first',
    component: First,
    children: [
      {
        path: 'profile',
        name: 'second',
        component: Second
      },
      {
        path: 'settings',
        name: 'third',
        component: Third
      }
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
