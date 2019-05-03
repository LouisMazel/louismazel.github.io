module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Loïc Mazuel - Developer Full Stack Javascript | VueJS',
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
    '~/plugins/VeeValidate',
    '~/filters'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/style-resources',
    ['vue-wait/nuxt', { useVuex: true }]
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss'
    ]
  },
  build: {
    /*
    ** Run ESLint on save
    */
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

