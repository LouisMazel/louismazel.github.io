import capitalize from './capitalize'
import uppercase from './uppercase'

export default {
  filters: {
    capitalize,
    uppercase
  },
  create: function (Vue) {
    Object.keys(this.filters).forEach(function (filter) {
      Vue.filter(filter, this.filters[filter])
    }.bind(this))
  }
}
