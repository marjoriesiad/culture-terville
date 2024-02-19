import { createRouter, createWebHistory } from 'vue-router'
import HomePageVue from '@/views/HomePage.vue'
import MenuPageVue from '@/views/MenuPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MenuPageVue
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuPageVue
    }
    
  ]
})

export default router
