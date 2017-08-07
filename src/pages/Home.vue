<template>
  <div class="flex-box">
    <div class="flex-child-left">
      <common-bar></common-bar>
    </div>
    <div class="flex-child-right">
      <common-clock></common-clock>
    </div>
  </div>
</template>

<script>
  import Siderbar from "@/components/Siderbar"
  import Clock from "@/components/Clock"
  export default {
    components: {
      "commonBar": Siderbar,
      "commonClock": Clock
    }
  }
</script>

<style lang="less" scoped>
  .flex-box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 160px;

    .flex-child-right {
      width: 25%;
    }
    .flex-child-left {
      width: 30%;
    }
  }
</style>
