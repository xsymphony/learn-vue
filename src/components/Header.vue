<template>
  <div class="nav-bar">
    <span class="left-nav nav"><router-link to="/home">首页</router-link></span>
    <span class="right-nav nav"><router-link to="/login">登录</router-link></span>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>

  @header-height: 60px;
  .nav-bar {
    position: fixed;
    top: 0;
    opacity: 0.6;
    height: @header-height;
    width: 100%;
    background-color: #f8f8f8;

    .nav {
      line-height: @header-height;
      color: black;
      margin: 0 60px;

      a {
        text-decoration: none;
        color: #777;
      }
    }
  }
</style>
