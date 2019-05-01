<template>
  <footer
    class="nav-footer"
    role="contentinfo"
  >
    <div class="nav-footer-content container flex justify-content-between py-4">
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
    </div>
    <div class="nav-footer-subs py-2">
      <div class="container flex flex-end">
        <a
          href="https://github.com/LouisMazel/louismazel.github.io"
          title="loïc mazuel link to github project"
          target="_blank"
          class="fs-14 text-white-muted"
        >
          © Loïc Mazuel | Site réalisé avec VueJS & NodeJS
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'NavFooter',
    data () {
      return {
        routes: this.$router.options.routes.filter(
          route => typeof route.name !== 'undefined' &&
            route.name !== 'Home' &&
            route.name !== 'Admin'
        )
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-footer {
    border-top: 1px solid $background-color-light;
    color: $grey-color-light;

    &-subs {
      border-top: 1px solid $background-color-light;
    }
  }
</style>
