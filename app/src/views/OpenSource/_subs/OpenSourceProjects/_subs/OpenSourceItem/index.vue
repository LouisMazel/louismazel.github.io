<template>
  <a
    :href="project.url"
    class="open-source-item br-4 text-white flex flex-direction-column justify-content-between"
    :title="project.name"
    target="_blank"
  >
    <img
      class="open-source-item__img brt-4"
      :src="project.imgUrl"
      :alt="`image illustration ${project.name}`"
    >
    <div class="open-source-item__content p-3">
      <h4 class="fs-18 text-white mb-2">
        {{ project.name }}
      </h4>
      <p class="mb-2">
        {{ project.description }}
      </p>
      <span
        v-for="keyword in project.keywords"
        :key="keyword"
        class="open-source-item__content-keyword"
      >
        {{ keyword }}
      </span>
    </div>
    <div class="open-source-item__footer p-3">
      <a
        v-if="project.npmUrl"
        :href="project.npmUrl"
        class="btn btn-danger btn-sm btn-outline btn-npm"
        target="_blank"
      >
        <svg viewBox="0 0 780 250">
          <path
            fill="#231F20"
            d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"
          />
        </svg>
      </a>

      <a
        v-if="project.demoUrl"
        :href="project.demoUrl"
        class="btn btn-sm btn-outline ml-3"
        target="_blank"
      >
        DEMO
      </a>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'OpenSourceItem',
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

    &:hover, &:focus {
      background-color: #41425c;
      transform: translateY(-3px);
      box-shadow: 0 3px 12px #1e1e25;
      outline: none;
    }
    &__content {
      &-keyword {
        border: 2px solid lighten($background-color-light, 10%);
        padding: 0 10px;
        margin: 5px;
        display: inline-block;
        border-radius: 35px;
        height: 35px;
        line-height: 33px;
      }
    }

    &__img {
      max-width: 100%;
      min-width: 288px;
    }

    &__footer {
      border-top: 1px solid $background-color;

      .btn-npm svg {
        width: 35px;

        path {
          fill: $danger-color;
        }
      }
    }
  }
</style>
