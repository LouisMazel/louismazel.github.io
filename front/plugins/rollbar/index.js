import Vue from 'vue'
import Rollbar from 'vue-rollbar'
import config from '@/config'
if (process.env.NODE_ENV === 'production') {
  Vue.use(Rollbar, {
    accessToken: config.rollbar.accessToken,
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      environment: 'production'
    }
  })
}
