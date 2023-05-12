import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Hypothesis from '../views/Hypothesis.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/hypothesis',
      name: 'story',
      component: Hypothesis,
    },
  ]
})

export default router
