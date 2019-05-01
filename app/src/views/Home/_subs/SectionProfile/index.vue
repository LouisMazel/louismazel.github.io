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
      <div class="section-profile__socials">
        <a
          v-for="social in socialMedias"
          :key="social.name"
          :title="social.name"
          :href="social.url"
          target="_blank"
          class="btn btn-primary-outline btn-rounded"
        >
          <i :class="`icon-${social.name}`" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SectionProfile',
    data () {
      return {
        socialMedias: [
          {
            name: 'twitter',
            url: 'https://twitter.com/Mazeel'
          },
          {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/lo%C3%AFc-mazuel-a2b37577/'
          },
          {
            name: 'github',
            url: 'https://github.com/LouisMazel/'
          }
        ],
        infos: [
          {
            label: 'Nom',
            value: 'Loïc Mazuel'
          },
          {
            label: 'Âge',
            value: '29 ans (03 février 1990)'
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
        border: 8px solid white;
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

    &__socials {
      a {
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
