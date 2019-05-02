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
  import ContactItem from './_subs/ContactItem'

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
    },
    methods: {
      ...mapActions(['setContacts'])
    }
  }
</script>
