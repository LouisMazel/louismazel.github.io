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
        <h1 class="fs-18 fw-400 text-white">
          Loïc Mazuel <br>
          <span class="fs-14">Developer Full Stack Javascript | VueJS</span>
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
        <router-link
          v-if="getIsLoggedIn"
          :to="{ name: 'Admin' }"
          class="nav-bar-item nav-bar-item__admin  p-3 flex align-center"
        >
          Admin
        </router-link>
        <button
          class="nav-bar-item nav-bar-item__logout p-3 flex align-center"
          v-if="getIsLoggedIn"
          @click="logout"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  </header>
</template>

<script>
  import { Logout } from '@/resources'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'NavBar',
    data () {
      return {
        routes: this.$router.options.routes.filter(
          route => typeof route.name !== 'undefined' &&
            route.name !== 'Home' &&
            route.name !== 'Admin' &&
            route.name !== 'Login'
        )
      }
    },
    computed: {
      ...mapGetters(['getIsLoggedIn'])
    },
    methods: {
      ...mapActions(['resetToken', 'setIsLoggedIn']),
      logout () {
        Logout.update()
          .then(() => {
            this.resetToken(null)
            this.setIsLoggedIn(false)
            if (this.$route.name === 'Admin') {
              this.$router.push({ name: 'Home' })
            }
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    background-color: $background-color;
    border-bottom: 1px solid $background-color-light;
    position: fixed;
    width: 100%;
    z-index: 9;

    &-item {
      color: white;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      transition: all 500ms;
      cursor: pointer;
      outline: none;

      &:hover,
      &:focus {
        background-color: rgba(white, 0.2);

        &:not(.nav-bar-item__main) {
          border-bottom: 2px solid white;
        }
      }

      &.router-link-exact-active:not(.nav-bar-item__main) {
        border-bottom: 2px solid $brand-color;
      }

      &__main {
        line-height: 20px;

        h1 {
          position: relative;

          &::after {
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
      &__admin {
        background-color: dodgerblue;
        &:hover,
        &:focus {
          background-color: darken(dodgerblue, 20%);
        }
      }
      &__logout {
        background-color: orangered;
        &:hover,
        &:focus {
          background-color: darken(orangered, 20%);
        }
      }
    }
  }
</style>
