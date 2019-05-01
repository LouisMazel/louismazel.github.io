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
        :data-vv-as="'E-mail'"
        v-validate="'required|email'"
        class="mb-3"
        dark
      />
      <vue-phone-number-input
        v-model="phone"
        class="mb-3"
        label="Numéro de téléphone"
        :preferred-countries="['FR', 'BE', 'DE']"
        :translations="translations"
        type="tel"
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
        <button
          type="button"
          class="btn btn-danger"
          @click.stop="removeContact"
          :disabled="$wait.is('contact deleting')"
        >
          Remove contact
        </button>
      </div>
    </form>
    <div
      v-if="getContacts.length"
      class="bg-white br-4 p-4 mb-4 text-muted"
    >
      <p
        v-for="contact in getContacts"
        :key="contact._id"
      >
        {{ contact }}
      </p>
    </div>
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
    mounted () {
      Contact.get()
        .then(({ data }) => {
          this.setContacts(data)
        })
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
            Contact.add({}, payload)
          })
      },
      removeContact () {
        this.$wait.start('contact deleting')
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
