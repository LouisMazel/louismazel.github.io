import Vue from 'vue'
import App from './App.vue'

import '@babel/polyfill'

import router from './router'

import VueAxios from 'vue-axios'
import axios from 'axios'

import VueMeta from 'vue-meta'

import VeeValidate, { Validator } from 'vee-validate'
import veeValidateLocale from 'vee-validate/dist/locale/fr'

Validator.localize('fr', veeValidateLocale)

Vue.use(VeeValidate, {
  locale: 'fr',
  fieldsBagName: 'fieldsBag'
})

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
