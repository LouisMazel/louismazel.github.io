import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Load files from lang folder
const loadLocales = [
  { isocode: 'en', language: 'English' },
  { isocode: 'fr', language: 'Français' }
]
let messages = {}

const jsonConcat = function (o1, o2) {
  for (var key in o2) {
    o1[key] = o2[key]
  }
  return o1
}
let files = ['app']
loadLocales.forEach((lang) => {
  let translations = {}
  files.forEach((file) => {
    messages[lang.isocode] = jsonConcat(translations, require('./translations/' + lang.isocode + '/' + file + '.json'))
  })
})

let lang = Vue.config.lang || window.navigator.userLanguage || window.navigator.language || 'en'
// this seems to have become obsolete in vue-i18n / v6:
Vue.config.lang = lang.substr(0, 2) // "en-US" >> "en"

const i18n = new VueI18n({
  locale: Vue.config.lang, // set locale
  fallbackLocale: 'fr',
  silentTranslationWarn: false,
  messages // set locale messages
})
export default i18n
