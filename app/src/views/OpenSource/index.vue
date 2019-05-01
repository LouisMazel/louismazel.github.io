<template>
  <div class="open-source container">
    <div class="py-5">
      <h2 class="mb-3">
        Open-source
      </h2>
      <p>
        Contribuer à l'écosystème open-source permet de tester de nouvelles technologies mais aussi de faire profiter des dernières inovations à un maximum d'utilisateur
      </p>
      <open-source-projects class="mt-5" />
    </div>
  </div>
</template>

<script>
  import OpenSourceProjects from './_subs/OpenSourceProjects'

  export default {
    name: 'OpenSource',
    metaInfo () {
      return {
        title: 'Mes projets open-source',
        meta: [
          {
            name: 'description',
            content: 'Mes projets open-source'
          }
        ]
      }
    },
    components: {
      OpenSourceProjects
    }
  }
</script>
