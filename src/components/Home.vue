<template>
  <div class="jumbotron">
    <div><h1>任务</h1></div>
    <div>
      <p>
      <strong>
        <router-link to="/entries">
          创建一个新任务
        </router-link>
      </strong>
    </p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .jumbotron {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 400px;
    top: 160px;
    left: 700px;
    background-color: gainsboro;
    padding: 20px;

  }
</style>
