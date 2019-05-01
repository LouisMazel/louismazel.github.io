import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import router from '@/router'
import config from '@/config'

Vue.use(VueAnalytics, {
  id: config.ga.id,
  router
})
