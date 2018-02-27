import Vue from 'vue'
import Router from 'vue-router'
import atBash from '@/components/atbash'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AtBash',
      component: atBash
    }
  ]
})
