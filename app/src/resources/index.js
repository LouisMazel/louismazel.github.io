import Vue from 'vue'
import VueResource from 'vue-resource'
import config from './../config'

Vue.use(VueResource)

Vue.http.options.root = config.apiBase[process.env.NODE_ENV]

export const Contact = Vue.resource('contact-form', {}, {
  add: {
    method: 'POST',
    url: 'contact-form/add'
  },
  delete: {
    method: 'GET',
    url: 'contact-form/delete{/id}'
  }
})
