<template>
  <div class="box">
    <common-clock></common-clock>
  </div>
</template>

<script>
  import Clock from "@/components/Clock";
  export default {
    components: {
      "commonClock": Clock
    }
  }
</script>

<style lang="less" scoped>
  .box {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 400px;
    height: auto;
    top: 160px;
    left: 700px;
    background-color: #f8f8f8;
    padding: 20px;
  }
</style>
