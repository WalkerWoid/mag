import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'Main', component: () => import('../views/MainView.vue')},
    {path: '/cart', name: 'Cart', component: () => import('../views/CartView.vue')},
  ],
})

export default router
