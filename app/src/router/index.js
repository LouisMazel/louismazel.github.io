import Vue from 'vue'
import Router from 'vue-router'
import { Me } from '@/resources'
import store from '@/store'

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
      path: '/services',
      name: 'Services',
      component: () => import(/* webpackChunkName: "services" */ '@/views/Services')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login'),
      beforeEnter (to, from, next) {
        const isLoggedIn = store.getters['getIsLoggedIn']
        isLoggedIn ? next({ name: 'Home' }) : next()
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      meta: {
        requiresAuth: true
      },
      component: () => import(/* webpackChunkName: "admin" */ '@/views/Admin'),
      beforeEnter (to, from, next) {
        const isLoggedIn = store.getters['getIsLoggedIn']
        !isLoggedIn ? next({ name: 'Login' }) : next()
      }
    },
    {
      path: '*',
      redirect: { name: 'Home' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(({ meta }) => meta.requiresAuth)
  const isLoggedIn = store.getters['getIsLoggedIn']
  if (!isLoggedIn && requiresAuth) {
    Me.get()
      .then(() => { store.dispatch('setIsLoggedIn', true) })
      .finally(() => next())
  } else {
    next()
  }
})

export default router
