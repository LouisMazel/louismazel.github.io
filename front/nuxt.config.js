import config from './config'

module.exports = {
  head: {
    title: 'Developer Full Stack Javascript - VueJS',
    titleTemplate: '%s | Loïc Mazuel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Je suis développeur Full Stack Javascript, spécialisé VueJS.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    '~/filters',
    '~/plugins/axios',
    '~/plugins/vee-validate',
    '~/plugins/rollbar'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'dodgerblue' },
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-material-design-icons',
    ['vue-wait/nuxt', { useVuex: true }],
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', {
      id: config.ga.id || '',
      dev: true
    }],
    ['vue-wait/nuxt', { useVuex: true }],
    ['@nuxtjs/robots']
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss'
    ]
  },
  robots: [
    {
      UserAgent: '*',
      Disallow: '/login'
    }, {
      UserAgent: '*',
      Disallow: '/admin'
    }
  ],
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
