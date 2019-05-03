<template>
  <div class="login container flex align-center justify-content-center">
    <div class="form-login-container p-5 br-4 my-4">
      <form
        @submit.prevent="login()"
      >
        <vue-input-ui
          id="email-login"
          label="E-mail"
          type="email"
          name="email"
          v-model="email"
          :error="errors.has('email')"
          :hint="errors.first('email')"
          :data-vv-as="'e-mail'"
          v-validate="'required|email'"
          class="mb-3"
          dark
          required
        />
        <vue-input-ui
          id="password-login"
          label="Mot de passe"
          v-model="password"
          name="password"
          class="mb-3"
          type="password"
          :error="errors.has('password')"
          :hint="errors.first('password')"
          :data-vv-as="'mot de passe'"
          v-validate="'required|min:8'"
          dark
          required
        />
        <div class="flex justify-content-end">
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="$wait.is('contact adding')"
          >
            Se connecter
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import VueInputUi from 'vue-input-ui'

  import { Login } from '@/resources'
  import { getters, state } from '@/store'
  import { mapActions } from 'vuex'

  export default {
    name: 'Login',
    components: {
      VueInputUi
    },
    data () {
      return {
        email: null,
        password: null
      }
    },
    methods: {
      ...mapActions(['setToken', 'setIsLoggedIn']),
      login () {
        Login.save({
          email: this.email,
          password: this.password
        })
          .then(({ data }) => {
            this.setToken(data.csrfToken)
            this.setIsLoggedIn(true)
            this.$router.push({ name: 'admin' })
          })
      }
    },
    // beforeRouteEnter (to, from, next) {
    //   console.log('getters', getters['getIsLoggedIn'], state.isLoggedIn)
    //   const isLoggedIn = getters['getIsLoggedIn']
    //   isLoggedIn ? next({ name: 'index' }) : next()
    // }
  }
</script>

<style lang="scss" scoped>
  .login {
    .form-login-container {
      background-color: $background-color-light;
      min-width: 400px;
    }
  }
</style>
