import Vue from 'vue'
import VueResource from 'vue-resource'
import config from './../config'

Vue.use(VueResource)

Vue.http.options.root = config.apiBase[process.env.NODE_ENV]

export const Contact = Vue.resource('contacts', {}, {
  add: {
    method: 'POST',
    url: 'contacts'
  },
  delete: {
    method: 'DELETE',
    url: 'contacts{/id}'
  }
})
