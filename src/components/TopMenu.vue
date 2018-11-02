<template>
  <el-menu
    :default-active="$router.currentRoute.path"
    :background-color="$store.state.secondaryColor"
    :active-text-color="$store.state.infoColor"
    class="flex align-center justify-content-center"
    mode="horizontal"
    style="border-bottom: 0;"
  >
    <el-menu-item
      v-for="rule in $router.options.routes"
      :key="rule.name"
      :index="rule.path"
      router
      @click="goTo(rule.name)"
    >
      {{ rule.name }}
    </el-menu-item>
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
        this.$router.push({ name: route })
      }
    }
  }
</script>
