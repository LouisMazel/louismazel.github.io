<template>
  <div class="section-profile py-5 flex container">
    <div class="section-profile__about-me flex-1">
      <h2 class="mb-4">
        À propos
      </h2>
      <p class="mb-4">
        Passionné depuis toujours par le secteur du web, je suis un développeur autodidacte. <br>
        Mes expériences professionnelles et personnelles m'ont aujourd'hui permis d'acquérir de solides compétences dans le développement. <br>
        Je recherche de nouveaux challenges au sein d'une équipe dynamique
      </p>
      <button class="btn">
        Mon CV
      </button>
    </div>
    <div class="section-profile__picture flex-1 flex justify-content-center align-center">
      <img
        src="@/assets/img/loic-mazuel.jpg"
        class="profile-container-picture__picture"
        alt="personal picture"
      >
    </div>
    <div class="section-profile__picture flex-1">
      <h2 class="mb-4">
        Informations
      </h2>
      <ul class="mb-4">
        <li>
          Nom : Mazuel Loïc
        </li>
        <li>
          Âge : 29 ans (03 février 1990)
        </li>
        <li>
          Localisation : Paris
        </li>
      </ul>
      <button class="btn btn-rounded">
        Twitter
      </button>
      <button class="btn btn-rounded">
        Linkedin
      </button>
      <button class="btn btn-rounded">
        Github
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SectionProfile'
  }
</script>

<style lang="scss" scoped>
  .section-profile {
    &__about-me {
    }
    &__picture {
      img {
        border: 8px solid white;
        height: 300px;
      }
    }
  }
</style>
