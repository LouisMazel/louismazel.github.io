module.exports = {
  // devServer: {
  //   host: '0.0.0.0',
  //   port: process.env.APP_PORT || 8080,
  //   public: `0.0.0.0:${process.env.APP_PORT || 8080}`,
  //   disableHostCheck: true
  // },

  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/_variables.scss";`
      }
    }
  },

  pages: {
    index: {
      entry: 'src/main.js',
      filename: 'index.html',
      title: 'Loïc Mazuel'
    }
  },

  indexPath: 'index.html',
  runtimeCompiler: true,
  lintOnSave: false
}
