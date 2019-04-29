<template>
  <div class="open-source-item-content p-3">
    <h4 class="fs-18 text-white mb-2">
      {{ project.name }}
    </h4>
    <p class="mb-2">
      {{ project.description }}
    </p>
    <div class="open-source-item-content__keywords">
      <span
        v-for="keyword in project.keywords"
        :key="keyword"
        class="open-source-item-content__keywords__keyword fs-14"
      >
        {{ keyword }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OpenDourceItemContent',
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .open-source-item-content {
    &__keywords {
      margin: 0 -5px;

      &__keyword {
        border: 2px solid lighten($background-color-light, 10%);
        padding: 0 10px;
        margin: 5px;
        display: inline-block;
        border-radius: 35px;
        height: 35px;
        line-height: 33px;
        color: lighten($background-color-light, 40%);
      }
    }
  }
</style>
