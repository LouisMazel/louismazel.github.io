export default {
  getContacts (state) {
    return state.contacts
  },
  getToken (state) {
    return state.token || localStorage.getItem('token')
  },
  getIsLoggedIn (state) {
    return state.isLoggedIn
  }
}
