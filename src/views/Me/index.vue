<template>
  <el-container
    id="home"
    class="home bg-secondary-light"
  >
    <el-main>
      <div class="flex flex">
        <div class="flex-1 p-2 text-white">
          <h3 class="mt-1">À propos</h3>
          <p>
            Passionné depuis toujours par le secteur du web, je suis aujourd'hui un développeur autodidacte.
            <br>
            Mes expériences professionnelles et personnelles m'ont aujourd'hui permis d'acquérir de solides compétences dans le developpement de site web.
          </p>
        <!-- <a class="waves-effect waves-light btn-large brand-bg grey darken-4 white-text" target="_blank" href="assets/img/CV-loic-mazuel.pdf"><i class="material-icons left">archive</i> CV</a> -->
        </div>
        <div
          class="flex flex-1 p-2 align-center justify-content-center"
          style="visibility: visible; animation-name: fadeIn;">
          <img
            class="w-100 profile-img box-shadow"
            src="@/assets/img/loic-mazuel.jpg"
            alt="loic mazuel developpeur front end">
        </div>
        <div class="flex flex-1 flex-direction-column p-2 text-white">
          <div>
            <h3 class="mt-1">Informations</h3>
            <h5 class="light"><span>Nom :</span> Mazuel Loïc</h5>
            <h5 class="light"><span>Âge :</span> 28 Years (3 février 1990)</h5>
            <!--<h5><span>Phone :</span> +0123456789</h5>-->
            <h5 class="light"><span>E-mail :</span> me@loic-mazuel.com</h5>
            <h5 class="light"><span>Localisation :</span> Paris</h5>
            <h5 class="light"><span>Nationalité :</span> Française</h5>
          </div>

          <div class="flex align-center">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="mr-2">
              <el-button
                size="mini"
                type="secondary">
                {{ social.name }}
              </el-button>
            </a>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        socials: [
          { name: 'Twitter', url: 'https://twitter.com/Mazeel' },
          { name: 'Linkedin', url: 'https://www.linkedin.com/in/lo%C3%AFc-mazuel-a2b37577' },
          { name: 'Github', url: 'https://github.com/LouisMazel' },
          { name: 'Bitbucket', url: 'https://bitbucket.org/LoicMazuel' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .profile-img {
    border: 8px solid #fff;
    max-width: 360px;
    width: 100%;
  }
</style>
