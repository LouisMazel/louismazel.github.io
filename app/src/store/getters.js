export default {
  getAppIsReady (state) {
    return state.appIsReady
  },
  getUserRoles () {
    return JSON.parse(localStorage.getItem('userRoles') || '[]')
  },
  isUserMono (state, getters) {
    return getters.getUserRoles.includes('MONO_DRIVER')
  },
  isUserDispatcher (state, getters) {
    return getters.getUserRoles.includes('DISPATCHER')
  },
  isUserDispatcherDriver (state, getters) {
    return getters.getUserRoles.includes('DISPATCHER_DRIVER')
  },
  isUserShipper (state, getters) {
    return getters.getUserRoles.includes('COMPANY')
  },
  getShowNavBar (state) {
    return state.showNavBar
  }
}
