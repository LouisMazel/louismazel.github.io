<template>
  <div class="open-source-projects">
    <h3 class="open-source-projects__title pb-2 mb-3">
      Mes projets open-source
    </h3>
    <div class="open-source-projects__list">
      <open-source-item
        v-for="project in projects"
        :key="project.id"
        :project="project"
        class="open-source-projects__list__item flex-1"
      />
    </div>
  </div>
</template>

<script>
  import OpenSourceItem from './_subs/OpenSourceItem'

  export default {
    name: 'OpenSourceProjects',
    components: {
      OpenSourceItem
    },
    data () {
      return {
        projects: [
          {
            id: '1',
            name: 'Vue Date Time Range Picker',
            description: 'A VueJS component for select date & time (range mode)',
            githubUrl: 'https://github.com/chronotruck/vue-ctk-date-time-picker',
            imgUrl: 'https://github.com/chronotruck/vue-ctk-date-time-picker/raw/master/assets/illu-animated-dark.gif',
            demoUrl: 'https://chronotruck.github.io/vue-ctk-date-time-picker/',
            npmUrl: 'https://www.npmjs.com/package/vue-ctk-date-time-picker',
            keywords: ['VueJS', 'MomentJS', 'Calendar', 'Date', 'Time', 'Picker', 'Range', 'VueComponent']
          },
          {
            id: '4',
            name: 'Vue Phone Number Input',
            description: 'A beautiful text field to format phone numbers',
            githubUrl: 'https://github.com/LouisMazel/vue-phone-number-input',
            imgUrl: 'https://github.com/LouisMazel/vue-phone-number-input/raw/master/public/vue-phone-number-input-demo.gif',
            demoUrl: 'https://louismazel.github.io/vue-phone-number-input/',
            npmUrl: 'https://www.npmjs.com/package/vue-phone-number-input',
            keywords: ['VueJS', 'LibphonenumberJS', 'VueInputUi', 'Phone Number', 'Format', 'Validator', 'UI']
          },
          {
            id: '2',
            name: 'Vue Input UI',
            description: 'A beautiful input & textarea field component',
            githubUrl: 'https://github.com/LouisMazel/vue-input-ui',
            imgUrl: 'https://github.com/LouisMazel/vue-input-ui/raw/master/public/vue-input-ui-demo.gif',
            demoUrl: 'https://louismazel.github.io/vue-input-ui/',
            npmUrl: 'http://npmjs.com/package/vue-input-ui',
            keywords: ['VueJS', 'Full CSS', 'Input', 'Textarea', 'Errors management']
          },
          {
            id: '3',
            name: 'Vue Leaflet Movingmarker',
            description: 'MovingMarker plugin extension for vue2-leaflet package',
            githubUrl: 'https://github.com/LouisMazel/vue2-leaflet-movingmarker',
            imgUrl: 'http://louismazel.github.io/assets/img/portfolio/leaflet-moving-marker.gif',
            npmUrl: 'https://www.npmjs.com/package/vue2-leaflet-movingmarker',
            keywords: ['VueJS', 'Leaflet', 'Vue2 Leaflet', 'Moving Marker', 'Maps']
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .open-source-projects {
    &__title {
      border-bottom: 1px solid $background-color-light;
    }
    &__list {
      margin-right: -10px;
      margin-left: -10px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 16px;

      @media screen and (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
      }

      &__item {
        margin-right: 10px;
        margin-left: 10px;
        margin-bottom: 20px;
      }
    }
  }
</style>
