<template>
  <div class="social-buttons">
    <a
      v-for="social in socialMedias"
      :key="social.name"
      :title="social.name"
      :href="social.url"
      target="_blank"
      class="btn btn-primary-outline btn-rounded"
    >
      <i :class="`icon-${social.name}`" />
    </a>
  </div>
</template>

<script>
  export default {
    name: 'SocialButtons',
    data () {
      return {
        socialMedias: [
          {
            name: 'twitter',
            url: 'https://twitter.com/Mazeel'
          },
          {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/lo%C3%AFc-mazuel-a2b37577/'
          },
          {
            name: 'github',
            url: 'https://github.com/LouisMazel/'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .social-buttons {
    a {
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
