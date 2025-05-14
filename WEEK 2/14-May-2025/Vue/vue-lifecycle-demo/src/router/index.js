import Vue from 'vue'
import VueRouter from 'vue-router'

import CreatedExample from '@/components/CreatedExample.vue'
import MountedExample from '@/components/MountedExample.vue'
import UpdatedExample from '@/components/UpdatedExample.vue'
import BeforeDestroyExample from '@/components/BeforeDestroyExample.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/created', component: CreatedExample },
  { path: '/mounted', component: MountedExample },
  { path: '/updated', component: UpdatedExample },
  { path: '/destroy', component: BeforeDestroyExample },
]

const router = new VueRouter({
  mode: 'history', // optional: cleaner URLs
  routes
})

export default router
