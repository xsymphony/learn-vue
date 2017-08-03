<template>
  <div>
    <common-header></common-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "./components/Header"
  export default {
    name: 'app',
    components: {
      'commonHeader': Header
    }
  }
</script>

<style lang="less" scoped>

</style>
