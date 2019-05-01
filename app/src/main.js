import Vue from 'vue'
import App from './App.vue'

import '@babel/polyfill'

import VueWait from 'vue-wait'

import filters from '@/filters'

import router from './router'
import store from './store'

import './plugins'

filters.create(Vue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  wait: new VueWait({
    useVuex: true
  }),
  template: '<App/>'
})
