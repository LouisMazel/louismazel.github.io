export default {
  SET_CONTACTS (state, val) {
    state.contacts = val
  },
  SET_TOKEN (state, token) {
    localStorage.setItem('token', token)
    state.token = token
  },
  RESET_TOKEN (state) {
    localStorage.removeItem('token')
    state.token = null
  },
  SET_IS_LOGGED_IN (state, val) {
    state.isLoggedIn = val
  },
  DELETE_CONTACT (state, uuid) {
    state.contacts = state.contacts.filter((element) => { return element._id !== uuid })
  },
  SET_CONTACT_READED (state, payload) {
    const index = state.contacts.findIndex(i => i._id === payload.uuid)
    if (index !== -1) state.contacts[index].readed = payload.value
  }
}
