<template>
  <div class="home flex flex-direction-column justify-content-between">
    <div class="section-profile py-5">
      <div class="section-profile__picture">
        <img
          src="@/assets/img/loic-mazuel.jpg"
          class="profile-container-picture__picture"
          alt="personal picture"
        >
      </div>
    </div>
    <div class="section-contact py-5">
      <div class="container flex justify-content-center">
        <router-link
          class="btn btn-outline"
          :to="{ name: 'Contact' }"
        >
          Contactez-moi ici
        </router-link>
      </div>
    </div>
    <div class="section-open-source py-5">
      <div class="container flex justify-content-center">
        <router-link
          class="btn btn-outline"
          :to="{ name: 'OpenSource' }"
        >
          Voir mes projets open-source
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    metaInfo () {
      return {
        title: 'Développeur Full Stack Javascript | VueJS'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    .section-profile {
      &__picture {
        img {
          border: 8px solid white;
          height: 300px;
        }
      }
    }
    .section-open-source, .section-profile {
      background-color: $background-color-light;
    }
  }
</style>
