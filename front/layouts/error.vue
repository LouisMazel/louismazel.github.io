<template>
  <div class="container flex flex-direction-column align-center justify-content-center">
    <h1 v-if="error.statusCode === 404">
      Page non trouvée
    </h1>
    <h1 v-else>
      Une erreur s'est produite
    </h1>
    <nuxt-link to="/">Retour à l'accueil</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: {
      error: {
        type: Object,
        default: Object
      }
    }
  }
</script>
