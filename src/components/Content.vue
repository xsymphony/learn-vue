<template>
  <div>
    <common-bar></common-bar>
    <div class="box">
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
  </div>
</template>

<script>
  import Bar from "@/components/Siderbar";
  export default {
    components: {
      "commonBar": Bar
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
