// http://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  extends: 'eslint:recommended',
  rules: {
    indent: [
      'error',
      'tab'
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ]
  }
}
