<template>
  <div class="contact-item-value flex flex-direction-column flex-1">
    <p class="label text-white-muted">
      {{ label }}
    </p>
    <p class="value">
      {{ value || '-' }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'ContactItemValue',
    props: {
      label: {
        type: String,
        required: true
      },
      value: {
        type: String,
        default: null
      }
    }
  }
</script>
