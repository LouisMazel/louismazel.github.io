<template>
  <div class="section-skills-item flex-1 flex flex-direction-column align-center px-4">
    <img
      :src="skill.asset"
      alt="node js"
    >
    <h3 class="label py-4 text-white">
      {{ skill.title }}
    </h3>
    <p class="description text-center">
      {{ skill.label }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'SectionSkillsItem',
    props: {
      skill: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-skills-item {
    img {
      max-width: 100%;
      max-height: 100px;
    }
  }
</style>
