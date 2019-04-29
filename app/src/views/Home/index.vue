<template>
  <div class="home flex flex-direction-column">
    <div class="profile">
      <div class="profile-container-picture">
        <h2>Loïc Mazuel</h2>
        <img
          src="@/assets/img/loic-mazuel.jpg"
          class="profile-container-picture__picture"
          alt="personal picture"
        >
      </div>
    </div>
    <div class="section__open-source flex justify-content-center">
      <router-link
        class="btn"
        :to="{ name: 'OpenSource' }"
      >
        Show my open source projects
      </router-link>
    </div>
    <div class="section__contact flex justify-content-center">
      <router-link
        class="btn"
        :to="{ name: 'Contact' }"
      >
        Contact me here
      </router-link>
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
    .profile {
      &-container-picture {
        img {
          border: 8px solid white;
          height: 300px;
        }
      }
    }
  }
</style>
