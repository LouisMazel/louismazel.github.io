import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import veeValidateLocale from 'vee-validate/dist/locale/fr'

Validator.localize('fr', veeValidateLocale)

Vue.use(VeeValidate, {
  locale: 'fr',
  fieldsBagName: 'fieldsBag'
})
