<template>
  <el-menu
    :default-active="$router.currentRoute.name"
    :background-color="$store.state.secondaryColor"
    :active-text-color="$store.state.primaryColor"
    class="flex align-center justify-content-center"
    mode="horizontal"
    style="border-bottom: 0;"
  >
    <component
      v-for="route in $router.options.routes"
      :key="route.name"
      :index="route.name ? route.name : ''"
      :is="route.children ? 'el-submenu' : 'el-menu-item'"
      router
      @click="goTo(route)">
      <template
        v-if="route.children"
        slot="title">{{ route.menu }}</template>
      <span
        v-else
      >
        {{ route.menu }}
      </span>
      <el-menu-item
        v-for="child in route.children"
        v-if="child.name !== 'Summary'"
        :key="child.name"
        :index="child.name"
        router
        @click="goTo(child)"
      >
        <i
          v-if="child.icon"
          :class="child.icon" />
        {{ child.menu }}
      </el-menu-item>
    </component>
  </el-menu>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'TopMenu',
    computed: {
      ...mapGetters(['getName'])
    },
    methods: {
      goTo (route) {
        this.$router.push({ name: route.name })
      }
    }
  }
</script>
