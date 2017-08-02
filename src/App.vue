<template>
  <div class="container">
    <div class="nav-bar">
      <span class="left-nav nav"><router-link to="/">首页</router-link></span>
      <span class="right-nav nav">登录</span>
    </div>
    <siderbar></siderbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import SiderBar from "./components/Siderbar";
  export default {
    name: 'app',
    components: {
    	'siderbar': SiderBar
    }
  }
</script>

<style lang="less" scoped>
  @header-height: 60px;
  .container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 2000px;

    .nav-bar {
      position: fixed;
      top: 0;
      opacity: 0.6;
      height: @header-height;
      width: 100%;
      background-color: gainsboro;

      .nav {
        line-height: @header-height;
        color: black;
        margin: 0 60px;
      }
    }
  }
</style>
