<template>
  <div class="test">
    <p
      v-for="contact in contacts"
      :key="contact._id"
    >
      {{ contact }}
    </p>
    <button
      @click="addContact({
        name: 'okokok',
        email: 'loic@gmail.com'
      })"
      class="btn btn-success"
    >
      Add contact
    </button>
    <button
      @click="getContact()"
      class="btn btn-dark"
    >
      get contact
    </button>
    <button
      @click="removeContact()"
      class="btn btn-danger"
    >
      remove last one
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    metaInfo () {
      return {
        title: 'test'
      }
    },
    data () {
      return {
        contacts: []
      }
    },
    mounted () {
      this.getContact()
    },
    methods: {
      addContact (payload) {
        payload = {
          ...payload,
          message: 'Bla bal bal blabl'
        }
        const uri = 'http://localhost:4000/contact-form/add'
        this.axios.post(uri, payload).then((response) => {
          console.log(response)
        })
      },
      getContact () {
        const uri = 'http://localhost:4000/contact-form'
        this.axios.get(uri).then(({ data }) => {
          this.contacts = data
        })
      },
      removeContact () {
        const uri = `http://localhost:4000/contact-form/delete/${this.contacts[this.contacts.length - 1]._id}`
        this.axios.get(uri).then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>
