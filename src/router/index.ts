import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/countries',
      name: 'countries',
      // route level code-splitting
      // this generates a separate chunk (Countries.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CountriesView/CountriesView.vue'),
    },
  ],
})

export default router
