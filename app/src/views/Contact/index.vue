<template>
  <div class="contact container">
    <form
      @submit.prevent="addContact()"
      class="p-4"
    >
      <vue-input-ui
        label="Nom"
        v-model="name"
        name="name"
        :error="errors.has('name')"
        :hint="errors.first('name')"
        :data-vv-as="'nom'"
        class="mb-3"
        v-validate="'required|max:255'"
        dark
      />
      <vue-input-ui
        label="E-mail"
        type="email"
        name="email"
        v-model="email"
        :error="errors.has('email')"
        :hint="errors.first('email')"
        :data-vv-as="'E-mail'"
        v-validate="'required|email'"
        class="mb-3"
        dark
      />
      <vue-input-ui
        label="Message"
        v-model="message"
        name="message"
        class="mb-3"
        :error="errors.has('message')"
        :hint="errors.first('message')"
        :data-vv-as="'message'"
        v-validate="'required'"
        no-label
        dark
      />
      <p
        v-for="contact in contacts"
        :key="contact._id"
      >
        {{ contact }}
      </p>
      <div class="flex justify-content-end">
        <button
          type="submit"
          class="btn"
        >
          Add contact
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import VueInputUi from 'vue-input-ui'

  export default {
    name: 'Contact',
    metaInfo () {
      return {
        title: 'Contact'
      }
    },
    components: {
      VueInputUi
    },
    data () {
      return {
        contacts: [],
        name: null,
        email: null,
        message: null,
        inputColor: '#96BF31'
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
        this.$validator.validateAll()
          .then(valid => {
            console.log(valid)
            if (!valid) {
              return
            }
            const uri = 'http://localhost:4000/contact-form/add'
            this.axios.post(uri, payload).then((response) => {
              console.log(response)
            })
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

<style lang="scss">
  .field .field-input {
    background-color: $background-color-lighter !important;
  }
</style>
