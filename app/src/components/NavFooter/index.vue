<template>
  <footer
    class="nav-footer py-4"
    role="contentinfo"
  >
    <div class="container flex justify-content-between">
      <ul>
        <li
          v-for="route in routes"
          :key="route.name"
        >
          <router-link
            :to="{ name: route.name }"
          >
            {{ route.name }}
          </router-link>
        </li>
      </ul>
      <div class="copyright flex flex-end">
        © Loïc Mazuel | Site réalisé avec VueJS & NodeJS
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'NavFooter',
    data () {
      return {
        routes: this.$router.options.routes.filter(route => typeof route.name !== 'undefined' && route.name !== 'Home')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-footer {
    border-top: 1px solid $background-color-light;
    color: $grey-color-light;
  }
</style>
