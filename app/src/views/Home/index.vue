<template>
  <div class="home flex align-center justify-content-center">
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
          border: 8px solid #fff;
          height: 300px;
        }
      }
    }
  }
</style>
