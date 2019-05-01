<template>
  <div class="section-skills">
    <h2 class="text-white text-center mb-4">
      Compétences
    </h2>
    <div class="section-skills__items flex">
      <div class="flex-1 flex flex-direction-column align-center section-skills__items__skill px-4">
        <img src="@/assets/img/skills/node.svg" alt="node js">
        <h3 class="label py-4 text-white">
          Back-End
        </h3>
        <p class="description text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SectionSkills'
  }
</script>

<style lang="scss" scoped>
  .section-skills {
    background-color: $background-color-light;

    &__items__skill {
      img {
        max-width: 100%;
        max-height: 100px;
      }
    }
  }
</style>
