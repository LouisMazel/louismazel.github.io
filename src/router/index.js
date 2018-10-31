import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/views/Me'
import Libraries from '@/views/Libraries'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Me',
      component: Me
    },
    {
      path: '/libraries',
      name: 'Libraries',
      component: Libraries
    }
  ]
})
