import Vue from 'vue'
import Router from 'vue-router'
import AuthService from '@/services/AuthService'
import store from '@/store'
import { loadLanguageAsync, i18n } from '@/locales'

Vue.use(Router)

const hasUserInfos = () => !!store.state.auth.userInfos
const capitalizeFirstLetter = (string) => {
  return typeof string === 'string' && string.length > 1
    ? `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    : null
}
const rolesAllowed = ['ROLE_DISPATCHER', 'ROLE_MONO_DRIVER', 'ROLE_DISPATCHER_DRIVER']
const rolesAdmin = ['ROLE_ADMIN', 'ROLE_SUPER_ADMIN']

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Auth',
      beforeEnter (to, from, next) {
        next({ name: capitalizeFirstLetter(localStorage.getItem('redirectTo')) || 'Offers' })
      }
    },
    {
      path: '/faq',
      name: 'Faq',
      component: () => import(/* webpackChunkName: "faq" */ '@/views/Carriers/Faq')
    },
    {
      path: '/drivers',
      name: 'Drivers',
      component: () => import(/* webpackChunkName: "drivers" */ '@/views/Carriers/Drivers')
    },
    {
      path: '/missions',
      name: 'MissionsRouter',
      component: () => import(/* webpackChunkName: "missions" */ '@/views/Carriers/Missions'),
      redirect: () => ({
        name: 'Missions',
        params: {
          type: store.getters.isUserMono ? 'me' : 'company',
          state: 'planned'
        }
      }),
      children: [
        {
          path: ':type(company|me)/:state(planned|in_progress|completed|cancelled)',
          name: 'Missions',
          component: () => import(/* webpackChunkName: "missions" */ '@/views/Carriers/Missions/views/Missions')
        },
        {
          path: ':uuid',
          name: 'Mission',
          component: () => import(/* webpackChunkName: "missions" */ '@/views/Carriers/Missions/views/Missions')
        }
      ]
    },
    {
      path: '/billing',
      redirect: {
        name: 'Invoices'
      },
      name: 'Billing',
      component: () => import(/* webpackChunkName: "billing" */ '@/views/Carriers/Billing'),
      children: [
        {
          path: 'invoices/:stateUuid?',
          name: 'Invoices',
          components: {
            default: () => import(/* webpackChunkName: "billing" */ '@/views/Carriers/Billing/_subs/Invoices'),
            sidebar: () => import(/* webpackChunkName: "billing" */ '@/views/Carriers/Billing/_subs/Invoices/_subs/InvoiceDetail')
          }
        },
        {
          path: 'payments/:uuid?',
          name: 'Payments',
          components: {
            default: () => import(/* webpackChunkName: "billing" */ '@/views/Carriers/Billing/_subs/Payments'),
            sidebar: () => import(/* webpackChunkName: "billing" */ '@/views/Carriers/Billing/_subs/Payments/_subs/PaymentDetail')
          }
        }
      ]
    },
    {
      path: '/offers',
      component: () => import(/* webpackChunkName: "offers" */ '@/views/Carriers/Offers'),
      children: [
        {
          path: '/',
          name: 'Offers',
          component: () => import(/* webpackChunkName: "offers" */ '@/views/Carriers/Offers/views/Offers')
        },
        {
          path: 'map',
          name: 'OffersMap',
          component: () => import(/* webpackChunkName: "offers-map" */ '@/views/Carriers/Offers/views/OffersMap')
        },
        {
          path: 'proposals/:state(pending|renewable|closed|accepted|all)',
          name: 'Proposals',
          component: () => import(/* webpackChunkName: "proposals" */ '@/views/Carriers/Offers/views/Proposals')
        },
        {
          path: 'searches/:uuid?',
          name: 'Searches',
          component: () => import(/* webpackChunkName: "offers" */ '@/views/Carriers/Offers/views/Offers')
        },
        {
          path: 'searches/:uuid?/map',
          name: 'SearchesMap',
          component: () => import(/* webpackChunkName: "offers-map" */ '@/views/Carriers/Offers/views/OffersMap')
        }
      ]
    },
    {
      path: '/account',
      name: 'Account',
      redirect: {
        name: 'Profile'
      },
      component: () => import(/* webpackChunkName: "account" */ '@/views/Common/Account'),
      children: [
        {
          path: 'profile',
          name: 'Profile',
          component: () => import(/* webpackChunkName: "profile" */ '@/views/Common/Account/Profile')
        }
      ]
    },
    {
      path: '/offers/:uuid',
      name: 'Offer',
      component: () => import(/* webpackChunkName: "offer" */ '@/views/Carriers/Offer')
    },
    {
      path: '/logout',
      name: 'Logout',
      beforeEnter () {
        AuthService.signOut()
      }
    },
    {
      path: '*',
      redirect: { name: 'Offers' }
    }
  ]
})

const authChecking = () => {
  // Check if the user connected to the app is the same as on the legacy
  setInterval(() => {
    store.dispatch('auth/getLegacyMe')
      .then(({ token }) => {
        if (token !== store.state.auth.token) {
          AuthService.signOut()
        }
      })
  }, 30000)
}

router.beforeEach((to, from, next) => {
  const locale = i18n.locale
  loadLanguageAsync(locale, to.path.split('/')[1]).then(() => {
    if (!hasUserInfos()) {
      store.dispatch('auth/getLegacyMe')
        .then(({ token, roles }) => {
          if (roles && rolesAllowed.includes(roles[0])) {
            if (token) {
              store.dispatch('auth/setToken', token)
              store.dispatch('auth/getMe')
                .then(() => {
                  authChecking()
                  next()
                })
                .catch((err) => {
                  console.error('GET Me - Error occured:', err)
                  AuthService.signOut()
                })
            } else {
              AuthService.signOut()
            }
          } else if (roles && rolesAdmin.includes(roles[0])) {
            // Is Admin USER ---> Go to Admin Legacy
            AuthService.redirectAdminUser()
          } else {
            // Is not logged on legacy --> Go to login page
            AuthService.redirectToLegacyLogin()
          }
        })
        .catch((err) => {
          console.log('GET LegacyMe - Error occured:', err)
          AuthService.signOut()
        })
    } else {
      next()
    }
  })
})

export default router
