<template>
  <div class="section-skills">
    <h2 class="text-white text-center mb-4">
      Compétences
    </h2>
    <div class="section-skills__items flex">
      <section-skills-item
        v-for="(skill, i) in skills"
        :key="i"
        :skill="skill"
      />
    </div>
  </div>
</template>

<script>
  import SectionSkillsItem from './_subs/SectionSkillsItem'

  export default {
    name: 'SectionSkills',
    components: {
      SectionSkillsItem
    },
    data () {
      return {
        skills: [
          {
            title: 'Back-End',
            label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            asset: require('@/assets/img/skills/node.svg')
          },
          {
            title: 'Front-End',
            label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            asset: require('@/assets/img/skills/vue.svg')
          },
          {
            title: 'Nuxt',
            label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            asset: require('@/assets/img/skills/nuxt.svg')
          },
          {
            title: 'Mobile',
            label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            asset: require('@/assets/img/skills/react.svg')
          },
          {
            title: 'SEO',
            label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            asset: require('@/assets/img/skills/node.svg')
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-skills {
    background-color: $background-color-light;
  }
</style>
