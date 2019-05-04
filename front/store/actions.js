import Cookies from 'universal-cookie'

export default {
  nuxtServerInit ({ commit }, { req }) {
    const cookies = new Cookies(req.headers.cookie)
    const token = cookies.get('csrf-token')
    commit('SET_TOKEN', token)
  },
  authLogin ({ commit }, payload) {
    const { email, password } = payload
    this.$axios.$post('/auth/login', {
      email: email,
      password: password
    })
      .then((data) => {
        commit('SET_TOKEN', data.csrfToken)
        this.$router.push({ name: 'admin' })
      })
  },
  setContacts ({ commit }, val) {
    commit('SET_CONTACTS', val)
  },
  setToken ({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  resetToken ({ commit }) {
    commit('RESET_TOKEN')
  },
  deleteContact ({ commit }, uuid) {
    commit('DELETE_CONTACT', uuid)
  },
  setContactReaded ({ commit }, payload) {
    commit('SET_CONTACT_READED', payload)
  }
}
