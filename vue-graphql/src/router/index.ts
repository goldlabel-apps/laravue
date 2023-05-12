import { createRouter, createWebHistory } from 'vue-router'
import Start from '../views/LvStart.vue'
import Hypothesis from '../views/LvHypothesis.vue'
import Results from '../views/LvResults.vue'
import LvGraphQL from '../views/LvGraphQL.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Start,
    },
    {
      path: '/hypothesis',
      name: 'story',
      component: Hypothesis,
    },
    {
      path: '/results',
      name: 'results',
      component: Results,
    },
    {
      path: '/graphql',
      name: 'graphql',
      component: LvGraphQL,
    },
  ]
})

export default router
