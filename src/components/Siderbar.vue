<template>
  <div class="panel">
    <div class="panel-heading">
      <h1>已有时长</h1>
    </div>
    <div class="panel-body">
      <h1>{{ time }}小时</h1>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
  	computed: mapState({time: state => state.plan.totalTime})
  }
</script>

<style lang="less" scoped>
  .panel {
    position: fixed;
    top: 160px;
    left: 160px;
    background-color: gainsboro;
    padding: 20px;
    width: 300px;
  }
</style>
