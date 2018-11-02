<template>
  <el-aside
    id="side-bar-menu"
    class="side-bar-menu bg-secondary-dark"
    width="320px">
    <el-menu
      :background-color="$store.state.secondaryDarkenColor"
      :active-text-color="$store.state.primaryColor"
      :default-active="$router.currentRoute.name"
      text-color="#fff"
      style="border-right: 0;"
    >
      <el-menu-item
        v-for="route in $router.options.routes[1].children"
        v-if="route.name !== 'Summary'"
        :key="route.name"
        :index="route.name">
        <i class="el-icon-menu" />
        <span>{{ route.menu }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    name: 'SideBarMenu'
  }
</script>
