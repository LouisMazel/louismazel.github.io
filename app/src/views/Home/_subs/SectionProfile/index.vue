<template>
  <div class="section-profile flex container">
    <div class="section-profile__about-me flex-1 pr-3">
      <h2 class="mb-4">
        À propos
      </h2>
      <p class="mb-4">
        Passionné depuis toujours par le secteur du web, je suis un développeur autodidacte. <br>
        Mes expériences professionnelles et personnelles m'ont aujourd'hui permis d'acquérir de solides compétences dans le développement. <br>
        Je suis à la recherche de nouveaux challenges et missions passionnantes
      </p>
      <button class="btn btn-primary-outline">
        Mon CV
      </button>
    </div>
    <div class="section-profile__picture flex-1 flex justify-content-center align-center px-3">
      <img
        src="@/assets/img/loic-mazuel.jpg"
        class="profile-container-picture__picture"
        alt="personal picture"
      >
    </div>
    <div class="section-profile__infos flex-1 pl-3">
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
      <button class="btn btn-primary-outline btn-rounded">
        <i class="icon-twitter" />
      </button>
      <button class="btn btn-primary-outline btn-rounded">
        <i class="icon-linkedin" />
      </button>
      <button class="btn btn-primary-outline btn-rounded">
        <i class="icon-github" />
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
    &__picture {
      img {
        border: 8px solid white;
        height: 300px;
          width: 300px;
        border-radius: 50%;
      }
    }
    &__infos {
      ul li {
        padding: 10px 0 ;
        border-bottom: px solid $background-color-light;
      }
    }
  }
</style>
