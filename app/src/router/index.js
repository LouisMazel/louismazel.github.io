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
      path: '/test',
      name: 'Test',
      component: () => import(/* webpackChunkName: "test" */ '@/views/Test')
    },
    {
      path: '*',
      redirect: { name: 'Home' }
    }
  ]
})

export default router
