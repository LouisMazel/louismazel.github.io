import currency from './currency'
import capitalize from './capitalize'
import uppercase from './uppercase'
import telephone from './telephone'

export default {
  filters: {
    currency,
    capitalize,
    telephone,
    uppercase
  },
  create: function (Vue) {
    Object.keys(this.filters).forEach(function (filter) {
      Vue.filter(filter, this.filters[filter])
    }.bind(this))
  }
}
