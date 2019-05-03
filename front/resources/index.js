import Vue from 'vue'
import VueResource from 'vue-resource'
import config from './../config'
import { getters } from '@/store'

Vue.use(VueResource)

Vue.http.options.root = config.apiBase[process.env.NODE_ENV]

Vue.http.interceptors.push((request, next) => {
  const token = getters['getToken'] || localStorage.getItem('token')
  if (token) {
    request.headers.set('csrf-token', `${token}`)
  }

  request.credentials = true

  next()
})

export const Contact = Vue.resource('contacts{/id}', {}, {})
export const Login = Vue.resource('auth/login', {}, {})
export const Register = Vue.resource('auth/register', {}, {})
export const Logout = Vue.resource('auth/logout', {}, {})
export const Me = Vue.resource('auth/me', {}, {})
