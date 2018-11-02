<template>
  <el-container
    id="libraries"
    class="libraries bg-secondary-light"
  >
    <side-bar-menu/>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import SideBarMenu from './_subs/SideBarMenu'
  export default {
    name: 'Libraries',
    components: {
      SideBarMenu
    }
  }
</script>
