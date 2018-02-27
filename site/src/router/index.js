import Vue from 'vue'
import Router from 'vue-router'
import atBash from '@/components/atbash'
import scytale from '@/components/scytale'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/atbash',
      name: 'atbash',
      component: atBash
    },
    {
      path: '/scytale',
      name: 'scytale',
      component: scytale
    }
  ]
})
