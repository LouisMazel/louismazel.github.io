// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/scss/override-element.scss'
import './assets/scss/main.scss'
import i18n from '@/locales'
import store from './store'
import { sync } from 'vuex-router-sync'
import filters from './filters/filters'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.min.css'
import VueAnalytics from 'vue-analytics'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

Vue.use(AirbnbStyleDatepicker)

Vue.component('ctk-date-time-picker', VueCtkDateTimePicker)

sync(store, router)

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(VueAnalytics, {
  id: 'UA-90099342-1',
  router
})

filters.create(Vue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
