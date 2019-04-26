module.exports = {
  presets: [
    ['@vue/app', {
      useBuiltIns: 'entry'
    }]
  ],
  plugins: [
    'transform-vue-jsx',
    '@babel/plugin-transform-runtime'
  ],
  env: {
    test: {
      presets: [
        ['@vue/app', {
          useBuiltIns: 'entry',
          modules: 'commonjs'
        }]
      ],
      plugins: [
        'transform-vue-jsx',
        'transform-es2015-modules-commonjs',
        'dynamic-import-node'
      ]
    }
  }
}
