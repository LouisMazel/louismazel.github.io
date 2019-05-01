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
      <vue-phone-number-input
        v-model="phone"
        class="mb-3"
        label="Numéro de téléphone"
        default-country-code="FR"
        :preferred-countries="['FR', 'BE', 'DE']"
        :translations="translations"
        type="tel"
        name="phone"
        :error="errors.has('phone')"
        :hint="errors.first('phone')"
        :data-vv-as="'Numéro de téléphone'"
        v-validate="'required'"
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
        dark
        textarea
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
          :disabled="$wait.is('contact adding')"
        >
          Add contact
        </button>
        <button
          type="button"
          class="btn btn-danger"
          @click="removeContact"
          :disabled="$wait.is('contact deleting')"
        >
          Remove contact
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import VueInputUi from 'vue-input-ui'
  import VuePhoneNumberInput from 'vue-phone-number-input'
  import 'vue-phone-number-input/dist/vue-phone-number-input.css'

  import { Contact } from '@/resources'

  export default {
    name: 'Contact',
    metaInfo () {
      return {
        title: 'Contact'
      }
    },
    components: {
      VueInputUi,
      VuePhoneNumberInput
    },
    data () {
      return {
        contacts: [],
        name: null,
        email: null,
        phone: null,
        message: null,
        inputColor: '#96BF31',
        translations: {
          countrySelectorLabel: 'Code pays',
          countrySelectorError: 'Choisir un pays',
          phoneNumberLabel: 'Numéro de téléphone',
          example: 'Exemple :'
        }
      }
    },
    mounted () {
      Contact.get()
        .then(({ data }) => {
          this.contacts = data
        })
    },
    methods: {
      addContact () {
        const payload = {
          name: this.message,
          email: this.email,
          phone: this.phone,
          message: this.message
        }
        this.$validator.validateAll()
          .then(valid => {
            if (!valid) {
              return
            }
            Contact.add({}, payload)
          })
      },
      removeContact () {
        this.$wait.start('contact deleting')
        console.log('this.contacts[this.contacts.length - 1]._id', this.contacts[this.contacts.length - 1]._id)
        Contact.delete({
          id: this.contacts[this.contacts.length - 1]._id
        })
          .then(() => console.log('Delete'))
          .finally(() => this.$wait.end('contact deleting'))
      }
    }
  }
</script>

<style lang="scss">
  .field .field-input {
    background-color: $background-color-light !important;
  }
</style>
