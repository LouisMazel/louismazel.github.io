<template>
  <div class="section-experiences">
    <h2 class="text-white text-center mb-4">
      Expériences
    </h2>
    <div class="container section-experiences-container">
      <experience-item
        v-for="experience in experiences"
        :key="experience.title"
        :experience="experience"
      />
    </div>
  </div>
</template>

<script>
  import ExperienceItem from './_subs/ExperienceItem'

  export default {
    name: 'SectionExperiences',
    components: {
      ExperienceItem
    },
    data () {
      return {
        experiences: [
          {
            title: 'Freelance',
            urls: [
              'http://louismazel.github.io'
            ],
            logos: [],
            period: 'Février 2017 - En cours',
            address: '-',
            job: 'Developpeur Full Stack Javascript',
            missions: [
              { value: 'Web', description: 'Création et developpement web d\'applications complexes (VueJs) dans le domaine du transport de marchandises' },
              { value: 'Emailing', description: 'MJML' }
            ],
            technologies: [
              'VueJS', 'Vuex', 'VueRouter', 'MomentJs', 'Leaflet', 'Google Analytics', 'VueI18n', 'VueResource', 'Flexbox'
            ]
          },
          {
            title: 'Chronotruck',
            urls: [
              'https://chronotruck.com'
            ],
            logos: [
              require('@/assets/img/experiences/chronotruck.png')
            ],
            period: 'Mai 2017 - Juin 2019',
            address: 'Paris 75005',
            job: 'Lead Développeur Frontend | VueJS',
            missions: [
              { value: 'Web', description: 'Création et developpement web d\'applications complexes (VueJs) dans le domaine du transport de marchandises' },
              { value: 'Emailing', description: 'MJML' }
            ],
            technologies: [
              'VueJS', 'Vuex', 'VueRouter', 'MomentJs', 'Leaflet', 'Google Analytics', 'VueI18n', 'VueResource', 'Flexbox'
            ]
          },
          {
            title: 'Marcel & YusoFleet',
            urls: [
              'https://marcel.cab',
              'https://yusofleet.com'
            ],
            logos: [
              require('@/assets/img/experiences/marcel.png'),
              require('@/assets/img/experiences/yuso.svg')
            ],
            period: 'Avril 2014 - Avril 2017',
            address: 'Paris 75012',
            job: 'Développeur Frontend - UX Designer Web et Mobile',
            missions: [
              { value: 'Web', description: 'Création d\'application web en AngularJS - Redéfinition UX/UI | Mise en place de Wordpress - API REST - Fonctionnalité sur le logiciel SAAS' },
              { value: 'Mobile', description: 'Application SAAS Android et iOS avec API : Cordova et IonicFramework (AngularJS)' },
              { value: 'Emailing', description: 'Conception et intégration des newsletters et e-mails transactionnels' },
              { value: 'Graphisme/Infographie', description: 'Création de charte graphique - Supports marketing physiques' },
              { value: 'SEO', description: 'Optimisation référencement naturel' },
              { value: 'SEM', description: 'Adwords - FacebookAds' }
            ],
            technologies: [
              'VueJS', 'Vuex', 'VueRouter', 'MomentJs', 'Leaflet', 'Google Analytics', 'VueI18n', 'VueResource', 'Flexbox'
            ]
          },
          {
            title: 'Krapahute',
            urls: [
              'http://www.krapahute.com/'
            ],
            period: 'Avril 2013 - Aout 2013',
            address: 'Mourmelon-Le-Petit 51',
            job: 'Intégrateur Frontend - Web-Marketing',
            logos: [
              require('@/assets/img/experiences/krapahute.png')
            ],
            missions: [
              { value: 'SEO', description: 'Optimisation référencement naturel “Onsite” & “Offsite” - Structure HTML' },
              { value: 'Intégration', description: 'Landing Page. Mise en place de Wordpress (Blog)' },
              { value: 'UEX', description: 'Création et intégration de guide d\'achat & F.A.Q, autres' },
              { value: 'Emailing', description: 'Création (UI et contenus) des newsletters et des e-mails transactionnels' },
              { value: 'Graphisme/Infographie', description: 'Illustration Web & Print' }
            ],
            technologies: [
              'VueJS', 'Vuex', 'VueRouter', 'MomentJs', 'Leaflet', 'Google Analytics', 'VueI18n', 'VueResource', 'Flexbox'
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.section-experiences {
  $item-height: 50px;
  &-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;

    @media screen and (max-width: $breakpoint-laptop-s) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
