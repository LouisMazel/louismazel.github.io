<template>
  <div class="section-open-source py-5">
    <div class="container flex flex-direction-column align-center">
      <h2 class="text-white mb-3">
        Projets open-source
      </h2>
      <router-link
        class="btn btn-primary-outline"
        :to="{ name: 'OpenSource' }"
      >
        Voir mes projets open-source
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SectionOpenSource'
  }
</script>

<style lang="scss" scoped>
  .section-open-source {
    background-color: $background-color-light;
  }
</style>
