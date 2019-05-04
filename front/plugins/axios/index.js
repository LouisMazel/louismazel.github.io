import config from '@/config'

export default ({ $axios, redirect, store }) => {
  $axios.defaults.baseURL = `${config.apiBase[process.env.NODE_ENV]}/api`
  $axios.defaults.withCredentials = true

  $axios.onRequest(config => {
    config.headers.common['csrf-token'] = store.state.token
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
