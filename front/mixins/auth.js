import { mapGetters } from 'vuex'
import { Me } from '@/resources'

export default {
  computed: mapGetters(['getToken', 'getIsLoggedIn']),
  mounted () {
    if (!this.getIsLoggedIn) {
      Me.get()
        .then(() => {
          this.$store.dispatch('setIsLoggedIn', true)
          console.log(this.$store.state)
        })
    }
  }
}