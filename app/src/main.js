import Vue from 'vue'
import App from './App.vue'

import '@babel/polyfill'

import router from './router'

import VueAxios from 'vue-axios'
import axios from 'axios'
import VueMeta from 'vue-meta'

Vue.use(VueAxios, axios)

Vue.use(VueMeta)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
