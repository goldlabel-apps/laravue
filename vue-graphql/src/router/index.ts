import { createRouter, createWebHistory } from 'vue-router'
import Start from '../views/LvStart.vue'
import Hypothesis from '../views/LvHypothesis.vue'
import Results from '../views/LvResults.vue'
import Conclusion from '../views/LvConclusion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Start,
    },

    {
      path: '/results',
      name: 'results',
      component: Results,
    },

    {
      path: '/conclusion',
      name: 'conclusion',
      component: Conclusion,
    },

    {
      path: '/hypothesis',
      name: 'story',
      component: Hypothesis,
    },
  ]
})

export default router
