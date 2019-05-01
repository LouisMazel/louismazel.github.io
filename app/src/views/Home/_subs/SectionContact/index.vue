<template>
  <div class="section-contact">
    <div class="container flex flex-direction-column align-center">
      <h2 class="text-white mb-3">
        Confiez-moi votre projet
      </h2>
      <router-link
        class="btn btn-primary-outline"
        :to="{ name: 'Contact' }"
      >
        Contactez-moi ici
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SectionContact'
  }
</script>
