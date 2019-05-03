<template>
  <div class="admin">
    <div class="container">
      <div
        v-if="getContacts.length"
        class="contact-list flex flex-direction-column py-4"
      >
        <contact-item
          v-for="contact in getContacts"
          :key="contact._id"
          :contact="contact"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { Contact } from '@/resources'
  import { mapActions, mapGetters } from 'vuex'
  import ContactItem from '@/components/ContactItem'
  import { getters } from '@/store'
  import state from '@/store/state'

  export default {
    name: 'Admin',
    components: {
      ContactItem
    },
    computed: {
      ...mapGetters(['getContacts'])
    },
    mounted () {
      Contact.get()
        .then(({ data }) => this.setContacts(data))
        .catch(() => console.error('Error get contacts'))
      console.log('sotre', this.$store.state)
    },
    methods: {
      ...mapActions(['setContacts'])
    }
    // beforeRouteEnter (to, from, next) {
    //   console.log('getters', getters['getIsLoggedIn'], state(), state().isLoggedIn)
    //   const isLoggedIn = getters['getIsLoggedIn']
    //   !isLoggedIn ? next({ name: 'login' }) : next()
    // }
  }
</script>
