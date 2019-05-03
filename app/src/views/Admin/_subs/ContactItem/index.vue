<template>
  <div
    class="contact-item mb-3 flex align-center py-2 px-4 br-4"
    :class="{ 'readed': contact.readed }"
  >
    <contact-item-value
      label="Nom"
      :value="contact.name"
    />
    <contact-item-value
      label="E-mail"
      :value="contact.email"
    />
    <contact-item-value
      label="Téléphone"
      :value="contact.phone"
    />
    <contact-item-value
      label="Message"
      :value="contact.message"
    />
    <div class="contact-item__actions flex justify-content-end">
      <button
        class="btn btn-primary-outline btn-sm dots-text"
        @click="readed"
      >
        <i class="material-icons">
          {{ contact.readed ? 'visibility' : 'visibility_off' }}
        </i>
      </button>
      <button
        class="btn btn-danger-outline btn-sm ml-3 dots-text"
        @click="confirmDeleteDialog = true"
      >
        <i class="material-icons">
          delete
        </i>
      </button>
    </div>
    <lm-dialog
      v-if="confirmDeleteDialog"
      @handle-close="confirmDeleteDialog = false"
      @validate="remove"
    >
      <div slot="title">
        Confirmation
      </div>
      <div class="p-3">
        Êtes-vous sûr de vouloir supprimer cette demande de contact ?
      </div>
    </lm-dialog>
  </div>
</template>

<script>
  import { Contact } from '@/resources'
  import { mapActions } from 'vuex'

  import ContactItemValue from './_subs/ContactItemValue'
  import LmDialog from '@/components/LmDialog'

  export default {
    name: 'ContactItem',
    components: {
      ContactItemValue,
      LmDialog
    },
    props: {
      contact: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        confirmDeleteDialog: false
      }
    },
    methods: {
      ...mapActions(['deleteContact', 'setContactReaded']),
      remove () {
        Contact.delete({ id: this.contact._id })
          .then(() => this.deleteContact(this.contact._id))
          .catch(() => console.log('error'))
      },
      readed () {
        const id = this.contact._id
        Contact.update({ id }, {
          message: this.contact.message,
          email: this.contact.email,
          phone: this.contact.phone,
          name: this.contact.name,
          readed: !this.contact.readed
        })
          .then(() => {
            this.setContactReaded({ uuid: this.contact._id, value: !this.contact.readed })
          })
          .catch(() => console.log('error'))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .contact-item {
    background-color: $background-color-light;
    border: 1px solid transparent;
    &.readed {
      background-color: $background-color;
      border: 1px solid $background-color-light;
    }
    &__actions {
      width: 135px;
    }
  }
</style>
