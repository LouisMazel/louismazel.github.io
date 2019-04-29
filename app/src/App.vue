<template>
  <div
    id="app"
    class="flex-1 flex flex-direction-column w-100"
  >
    <nav-bar />
    <router-view class="flex-1" />
    <nav-footer />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  import NavFooter from '@/components/NavFooter'
  export default {
    name: 'App',
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
        title: null,
        titleTemplate: 'Chronotruck'
      }
    },
    created () {
      this.$router.onReady(() => {
        this.title = 'Bienvenue'
        this.titleTemplate = '%s - Loïc Mazuel'
      })
    }
  }
</script>

<style lang="scss">
  @import './src/assets/scss/main.scss';

  #app {
    background-color: $background-color;
  }
</style>
