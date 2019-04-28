<template>
  <header
    class="nav-bar"
    role="banner"
  >
    <div class="container flex justify-content-between">
      <router-link
        :to="{ name: 'Home' }"
        class="nav-bar-item nav-bar-item__main p-3 pl-4"
      >
        <h1 class="fs-16 fw-400">
          Loïc Mazuel <br>
          <span class="fs-12">Developer Full Stack Javascript | VueJS</span>
        </h1>
      </router-link>
      <div class="nav-bar-items flex">
        <router-link
          v-for="route in routes"
          :key="route.name"
          :to="{ name: route.name }"
          class="nav-bar-item p-3 flex align-center"
        >
          {{ route.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'NavBar',
    data () {
      return {
        routes: this.$router.options.routes.filter(route => typeof route.name !== 'undefined' && route.name !== 'Home')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    background-color: $background-color;

    &-item {
      color: white;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      transition: all 500ms;
      cursor: pointer;

      &.router-link-exact-active:not(.nav-bar-item__main) {
        border-bottom: 2px solid $brand-color;
      }

      &:hover {
        background-color: rgba(white, 0.2);
        &:not(.nav-bar-item__main) {
          border-bottom: 2px solid white;
        }
      }

      &__main {
        line-height: 18px;

        h1 {
          position: relative;

          &:after {
            content: '';
            position: absolute;
            width: 2px;
            left: -10px;
            top: 0;
            height: 36px;
            background-color: $brand-color;
          }
        }

        span {
          color: $brand-color;
        }
      }
    }
  }
</style>
