<template>
  <div class="home flex flex-direction-column justify-content-between">
    <section-profile />
    <div class="section-skills py-5">
      <div class="container flex justify-content-center">
        <h2 class="text-white">
          Mes compétences
        </h2>
      </div>
    </div>
    <div class="section-contact py-5">
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
    <div class="section-open-source py-5">
      <div class="container flex flex-direction-column align-center">
        <h2 class="text-white mb-3">
          Mes projets open-source
        </h2>
        <router-link
          class="btn btn-primary-outline"
          :to="{ name: 'OpenSource' }"
        >
          Voir mes projets open-source
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import SectionProfile from './_subs/SectionProfile'

  export default {
    name: 'Home',
    metaInfo () {
      return {
        title: 'Développeur Full Stack Javascript | VueJS'
      }
    },
    components: {
      SectionProfile
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    .section-open-source, .section-skills {
      background-color: $background-color-light;
    }
  }
</style>
