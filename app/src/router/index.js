import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "contact" */ '@/views/Contact')
    },
    {
      path: '/open-source',
      name: 'OpenSource',
      component: () => import(/* webpackChunkName: "open-source" */ '@/views/OpenSource')
    },
    {
      path: '*',
      redirect: { name: 'Home' }
    }
  ]
})

export default router
