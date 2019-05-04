<template>
  <div class="section-profile flex container">
    <div class="section-profile__about-me flex-1 pr-3">
      <h2 class="mb-4">
        À propos
      </h2>
      <p class="mb-4">
        Passionné depuis toujours par le secteur du web, je suis un développeur autodidacte.
      </p>
      <p class="mb-4">
        Mes expériences professionnelles et personnelles me permettent d'être aujourd'hui un développeur Javascript confirmé, spécialisé en Front-End avec VueJS.
      </p>
      <button
        class="btn btn-primary-outline"
      >
        CV
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
      <div class="flex flex-direction-column mb-4">
        <div
          v-for="info in infos"
          :key="info.label"
          class="flex section-profile__infos__item"
        >
          <div class="flex-1 section-profile__infos__item__label">
            {{ info.label }}
          </div>
          <div class="flex-1 section-profile__infos__item__value">
            {{ info.value }}
          </div>
        </div>
      </div>
      <social-buttons />
    </div>
  </div>
</template>

<script>
  import SocialButtons from '@/components/SocialButtons'

  export default {
    name: 'SectionProfile',
    components: {
      SocialButtons
    },
    data () {
      return {
        infos: [
          {
            label: 'Nom',
            value: 'Loïc Mazuel'
          },
          {
            label: 'Âge',
            value: '29 ans'
          },
          {
            label: 'Localisation',
            value: 'Paris'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-profile {
    &__picture {
      img {
        border: 4px solid white;
        height: 300px;
        width: 300px;
        border-radius: 50%;
      }
    }

    &__infos {
      &__item {
        padding: 10px 0;
        border-bottom: 2px solid $background-color-light;

        &:first-child {
          border-top: 2px solid $background-color-light;
        }

        &__label {
          flex: 0 0 120px;
        }
      }
    }

    @media screen and (max-width: $breakpoint-laptop-s) {
      flex-direction: column;
    }
  }
</style>
