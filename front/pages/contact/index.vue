<template>
  <div class="contact container">
    <div class="py-5">
      <h2 class="mb-3">
        Contact
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
    </div>
    <form
      @submit.prevent="addContact()"
      class="pb-5"
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
        :data-vv-as="'e-mail'"
        v-validate="'required|email'"
        class="mb-3"
        dark
      />
      <vue-phone-number-input
        v-model="phone"
        class="mb-3"
        label="Numéro de téléphone"
        default-country="FR"
        :preferred-countries="['FR', 'BE', 'DE']"
        :translations="translations"
        type="tel"
        no-use-browser-locale
        name="phone"
        :data-vv-as="'Numéro de téléphone'"
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
      <div class="flex justify-content-end">
        <button
          type="submit"
          class="btn"
          :disabled="$wait.is('contact adding')"
        >
          Add contact
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

  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Contact',
    metaInfo () {
      return {
        title: 'Contact',
        meta: [
          {
            name: 'description',
            content: 'Contactez-moi pour réaliser vos projets web'
          }
        ]
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
        translations: {
          countrySelectorLabel: 'Code pays',
          countrySelectorError: 'Choisir un pays',
          phoneNumberLabel: 'Numéro de téléphone',
          example: 'Exemple :'
        }
      }
    },
    computed: {
      ...mapGetters(['getContacts'])
    },
    methods: {
      ...mapActions(['setContacts']),
      addContact () {
        const payload = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        }
        this.$validator.validateAll()
          .then(valid => {
            if (!valid) {
              return
            }
            Contact.save({}, payload)
          })
      }
    }
  }
</script>
