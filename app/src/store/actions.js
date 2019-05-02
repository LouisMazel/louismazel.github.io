export default {
  setContacts ({ commit }, val) {
    commit('SET_CONTACTS', val)
  },
  setToken ({ commit }, token) {
    commit('SET_TOKEN', token)
  }
}
