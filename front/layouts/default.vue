<template>
  <div
    id="app"
    class="flex-1 flex flex-direction-column w-100"
  >
    <nav-bar />
    <nuxt class="main flex-1" />
    <nav-footer />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  import NavFooter from '@/components/NavFooter'

  import auth from '@/mixins/auth'

  export default {
    mixins: [auth],
    components: {
      NavBar,
      NavFooter
    },
    metaInfo () {
      return {
        title: this.title,
        titleTemplate: this.titleTemplate
      }
    },
    data () {
      return {
        title: 'Developer Full Stack Javascript | VueJS',
        titleTemplate: '%s - Loïc Mazuel'
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/main.scss';

  #app {
    background-color: $background-color;

    .main {
      padding-top: 75px !important;
    }
  }
</style>
