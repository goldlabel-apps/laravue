import { createRouter, createWebHistory } from 'vue-router'
import StoryView from '../views/StoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StoryView,
    },
    {
      path: '/story',
      name: 'story',
      component: StoryView,
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('../views/OverviewView.vue'),
    },
    
  ]
})

export default router
