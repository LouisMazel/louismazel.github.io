export default ({ store }) => {
  if (store.getters['getToken']) {
    store.commit('SET_IS_LOGGED_IN', true)
  }
}
