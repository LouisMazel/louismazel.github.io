// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  env: {
    browser: true,
    node: true
  },

  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    'plugin:vue/essential',
    '@vue/standard'
  ],

  // required to lint *.vue files
  plugins: [
    'vue'
  ],

  // // add your custom rules here
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-const': 2,
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },

  /**
   * This will disable the default indent rule for .vue files
   * since the script-indent makes the check. Otherwise, this
   * causes interference between both plugins.
   *
   * See: https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/script-indent.md
   */
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
        'vue/component-name-in-template-casing': ['error', 'kebab-case']
      }
    }
  ]
}
