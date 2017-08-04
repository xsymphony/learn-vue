<template>
  <div>
    <common-header></common-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
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
  .slide-enter-active, .slide-leave-active {
    transition: transform .3s;
    transform-origin: right;
  }

  .slide-enter, .slide-leave-active {
    transform: scale(0, 1);
  }
</style>
