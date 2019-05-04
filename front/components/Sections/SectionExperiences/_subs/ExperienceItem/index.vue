<template>
  <div class="experience-item br-4 text-white flex flex-direction-column justify-content-between p-4">
    <div class="header flex justify-content-between mb-3">
      <div class="descriptions">
        <h3>{{ experience.title }}</h3>
        <p class="text-white-muted">{{ experience.period }}</p>
        <h4>{{ experience.job }}</h4>
        <p>{{ experience.address }}</p>
      </div>
      <div class="flex flex-direction-column align-center jsutify-content-center">
        <img
          v-for="(logo, i) in experience.logos"
          :key="i"
          :src="logo"
          :alt="experience.title"
        >
      </div>
    </div>
    <div class="experience-item__missions mb-3">
      <div
        v-for="(mission, i) in experience.missions"
        :key="i"
        class="experience-item__missions__mission flex"
      >
        <span class="value">{{ mission.value }}</span>
        <span class="missions">{{ mission.description }}</span>
      </div>
    </div>
    <div class="experience-item__keywords">
      <span
        v-for="technology in experience.technologies"
        :key="technology"
        class="experience-item__keywords__keyword fs-14"
      >
        {{ technology | capitalize }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExperienceItem',
    props: {
      experience: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .experience-item {
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

    img {
      height: 50px;
    }

    &__keywords {
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
    &__missions__mission {
      padding: 10px 0;
      border-bottom: 2px solid lighten($background-color-light, 10%);

      &:first-child {
        border-top: 2px solid lighten($background-color-light, 10%);
      }
      .value {
        flex: 0 0 200px;
      }
    }
  }
</style>
