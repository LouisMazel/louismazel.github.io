<template>
  <div class="home flex flex-direction-column justify-content-between">
    <section-profile class="py-5" />
    <section-skills class="py-5" />
    <section-contact class="py-5" />
    <section-open-source class="py-5" />
  </div>
</template>

<script>
  import SectionProfile from './_subs/SectionProfile'
  import SectionSkills from './_subs/SectionSkills'
  import SectionContact from './_subs/SectionContact'
  import SectionOpenSource from './_subs/SectionOpenSource'

  export default {
    name: 'Home',
    metaInfo () {
      return {
        title: 'Developer Full Stack Javascript | VueJS',
        meta: [
          {
            name: 'description',
            content: 'Je suis développeur Full Stack Javascript, spécialisé VueJS.'
          }
        ]
      }
    },
    components: {
      SectionProfile,
      SectionSkills,
      SectionContact,
      SectionOpenSource
    }
  }
</script>
