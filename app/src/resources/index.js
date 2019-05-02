import Vue from 'vue'
import VueResource from 'vue-resource'
import config from './../config'
import store from '@/store'

Vue.use(VueResource)

Vue.http.options.root = config.apiBase[process.env.NODE_ENV]

Vue.http.interceptors.push((request, next) => {
  const token = store.getters['getToken']
  if (token) {
    request.headers.set('csrf-token', `${token}`)
  }
  next()
})

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

export const Login = Vue.resource('auth/login', {}, {})
export const Register = Vue.resource('auth/register', {}, {})
export const Me = Vue.resource('auth/me', {}, {})
