<template>
  <div class="home flex flex-direction-column justify-content-between">
    <section-profile class="py-5" />
    <section-skills class="py-5" />
    <section-experiences class="py-5" />
    <section-contact class="py-5" />
    <section-open-source class="py-5" />
  </div>
</template>

<script>
  import SectionProfile from '@/components/Sections/SectionProfile'
  import SectionSkills from '@/components/Sections/SectionSkills'
  import SectionContact from '@/components/Sections/SectionContact'
  import SectionOpenSource from '@/components/Sections/SectionOpenSource'
  import SectionExperiences from '@/components/Sections/SectionExperiences'

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
      SectionOpenSource,
      SectionExperiences
    }
  }
</script>
