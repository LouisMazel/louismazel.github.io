<template>
  <el-menu
    :default-active="$router.currentRoute.path"
    class="flex align-center justify-content-center"
    mode="horizontal"
    style="border-bottom: 0;"
    :background-color="$store.state.secondaryColor"
    :active-text-color="$store.state.infoColor"
  >
    <el-menu-item
      :index="rule.path"
      v-for="rule in $router.options.routes"
      :key="rule.name"
      @click="goTo(rule.name)"
      router
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
        this.$router.push( {name: route} )
      }
    }
  }
</script>
