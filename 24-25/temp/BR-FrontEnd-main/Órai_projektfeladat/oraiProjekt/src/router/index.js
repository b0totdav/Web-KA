import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ("../views/HomeView.vue"),
    },
    {
      path: '/reserve/:dateId',
      name: 'reserve',
      component: () => import('../views/ReserveView.vue'),
    },
  ],
})

export default router
