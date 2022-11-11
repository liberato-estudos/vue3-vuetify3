
import { createRouter, createWebHistory } from 'vue-router'

import dashboard from '../layouts/Dashboard.vue'
import layoutA from '../layouts/LayoutPadrao.vue'
import layoutBlank from '../layouts/Blank.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        layout: dashboard
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: {
        layout: dashboard
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      meta: {
        layout: layoutBlank
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/Logout.vue'),
      meta: {
        layout: layoutBlank
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: {
        layout: dashboard
      }
    }
  ]
})




export default router
