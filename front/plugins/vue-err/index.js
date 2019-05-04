import Vue from 'vue'

export class VueErr {
  constructor (options = {}) {
    this.options = options
    this.vueHandler = new Vue({
      computed: {
        has: () => error => this.options.store.getters['err/has'](error)
      }
    })

    this.init()
  }

  init () {
    this.options.store.registerModule('err', {
      state () {
        return {
          errors: []
        }
      },
      getters: {
        'err/has': state => error => state.errors.includes(error)
      },
      mutations: {
        'err/SHOW' (state, error) {
          const index = state.errors.findIndex(err => err === error)
          if (index === -1) state.errors.push(error)
        },
        'err/HIDE' (state, error) {
          const index = state.errors.findIndex(err => err === error)
          if (index !== -1) {
            state.errors.splice(index, 1)
          }
        }
      }
    })
  }

  show (error) {
    this.options.store.commit('err/SHOW', error)
  }

  hide (error) {
    this.options.store.commit('err/HIDE', error)
  }

  has (error) {
    return this.vueHandler.has(error)
  }
}

Vue.use({
  install (v) {
    v.prototype.$err = null

    v.mixin({
      beforeCreate () {
        const { store, parent } = this.$options
        const storeToUse = store || (parent && parent.$store)

        if (storeToUse && !v.prototype.$err) {
          v.prototype.$err = new VueErr({
            Vue: v,
            store: storeToUse
          })
        }
      }
    })
  }
})
