<template>
  <a
    :title="project.name"
    :href="project.githubUrl"
    class="open-source-item br-4 text-white flex flex-direction-column justify-content-between"
    target="_blank"
  >
    <img
      class="open-source-item__img brt-4"
      :src="project.imgUrl"
      :alt="`image illustration ${project.name}`"
    >
    <open-source-item-content :project="project" />
    <open-source-item-footer :project="project" />
  </a>
</template>

<script>
  import OpenSourceItemFooter from './_subs/OpenSourceItemFooter'
  import OpenSourceItemContent from './_subs/OpenSourceItemContent'

  export default {
    name: 'OpenSourceItem',
    components: {
      OpenSourceItemFooter,
      OpenSourceItemContent
    },
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .open-source-item {
    background-color: $background-color-light;
    border: 1px solid $background-color-light;
    text-decoration: none;
    transition: all 300ms;
    position: relative;
    // overflow: hidden;

    &:hover,
    &:focus {
      background-color: #41425C;
      transform: translateY(-3px);
      box-shadow: 0 3px 12px #1E1E25;
      outline: none;
    }

    &__img {
      max-width: 100%;
      min-width: 288px;
    }
  }
</style>
