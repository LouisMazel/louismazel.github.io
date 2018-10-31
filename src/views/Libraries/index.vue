<template>
  <el-container
    id="libraries"
    class="libraries bg-secondary-light"
  >
    <side-bar-menu />
    <el-main>
      <div class="tile">
        <h1 class="mt-0 text-white fs-28 fw-300 text-center mb-2">Vue Ctk Date Time Picker</h1>
        <h2 class="mt-0 text-white fs-22 fw-300 text-center">DateTimePicker, DatePicker, TimePicker, RangeDatePicker</h2>
      </div>
      <div class="mb-3 p-3 br-4 bg-secondary">
        <h3 class="mt-0 text-white">DateTimePicker & DateRangePicker</h3>
        <div class="flex">
          <div class="flex-1 pr-2">
            <vue-ctk-date-time-picker
              :color="$store.state.primaryColor"
              v-model="date1"
            />
          </div>
          <div class="flex-1 pl-2">
            <vue-ctk-date-time-picker
              v-model="date2"
              :color="$store.state.infoColor"
              range-mode
            />
          </div>
        </div>
      </div>
      <div class="bg-white p-3 br-4">
        <h3 class="mt-0">DatePicker & TimePicker in dark mode</h3>
        <div class="flex">
          <div class="flex-1 pr-2">
            <vue-ctk-date-time-picker
              :color="$store.state.secondaryDarkenColor"
              v-model="date3"
              disable-date
              dark
            />
          </div>
          <div class="flex-1 pl-2">
            <vue-ctk-date-time-picker
              v-model="date4"
              :color="$store.state.infoColor"
              disable-time
              range-mode
              dark
            />
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  import SideBarMenu from './_subs/SideBarMenu'
  export default {
    name: 'Libraries',
    components: {
      SideBarMenu
    },
    data () {
      return {
        date1: null,
        date2: null,
        date3: null,
        date4: null,
        msg: 'Welcome to Your Vue.js App',
        socials: [
          { name: 'Twitter', url: 'https://twitter.com/Mazeel' },
          { name: 'Linkedin', url: 'https://www.linkedin.com/in/lo%C3%AFc-mazuel-a2b37577' },
          { name: 'Github', url: 'https://github.com/LouisMazel' },
          { name: 'Bitbucket', url: 'https://bitbucket.org/LoicMazuel' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .profile-img {
    border: 8px solid #fff;
    max-width: 360px;
    width: 100%;
  }
</style>
