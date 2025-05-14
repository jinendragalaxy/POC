import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import NotFound from '../components/NotFound.vue'
import LifecycleDemo from '../components/LifecycleDemo.vue'
import UserDetail from '../components/UserDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'lifecycle',
        component: LifecycleDemo
      }
    ]
  },
  {
    path: '/user/:id',
    name: 'UserDetail',
    component: UserDetail,
    props: true
  },
  {
    path: '/settings',
    component: Settings,
    children: [
      {
        path: 'profile',
        component: () => import('../components/Settings/Profile.vue')
      },
      {
        path: 'password',
        component: () => import('../components/Settings/Password.vue')
      },
      {
        path: '',
        redirect: 'profile'
      }
    ]
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router