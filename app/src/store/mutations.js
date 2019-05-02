export default {
  SET_CONTACTS (state, val) {
    state.contacts = val
  },
  SET_TOKEN (state, token) {
    localStorage.setItem('token', token)
    state.token = token
  }
}
