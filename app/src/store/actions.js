export default {
  setContacts ({ commit }, val) {
    commit('SET_CONTACTS', val)
  },
  setToken ({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  resetToken ({ commit }) {
    commit('RESET_TOKEN')
  },
  setIsLoggedIn ({ commit }, val) {
    commit('SET_IS_LOGGED_IN', val)
  },
  deleteContact ({ commit }, uuid) {
    commit('DELETE_CONTACT', uuid)
  },
  setContactReaded ({ commit }, payload) {
    commit('SET_CONTACT_READED', payload)
  }
}
