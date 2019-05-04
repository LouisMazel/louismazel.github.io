export default ({ store, redirect }) => {
  if (!store.getters['getToken']) {
    redirect('/login')
  }
}
