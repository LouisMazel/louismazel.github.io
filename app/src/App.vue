<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
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
    >
      Add contact
    </button>
    <button
      @click="getContact()"
    >
      get contact
    </button>
  </div>
</template>

<script>
  export default {
    name: 'App',
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2C3E50;
    margin-top: 60px;
  }
</style>
