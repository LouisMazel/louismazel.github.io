<template>
  <header
    class="nav-bar py-3"
    role="banner"
  >
    <div class="container flex justify-content-between">
      <div class="nav-bar-logo">
        Logo
      </div>
      <div class="nav-bar-item">
        Item
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    background-color: $background-color;
  }
</style>
