<template>
  <el-container id="home" class="home mh-100 h-100">
    <el-header class="p-0">
      <top-menu />
    </el-header>
    <el-container >
      <router-view/>
    </el-container>
    <el-footer
      class="bg-secondary text-white flex align-center justify-content-center">
      <el-button size="small" href="mailto:mazuel.loic@gmail.com">mazuel.loic@gmail.com</el-button>
    </el-footer>
  </el-container>
</template>

<script>
  import TopMenu from '@/components/TopMenu'

  export default {
    name: 'App',
    components: {
      TopMenu
    }
  }
</script>

