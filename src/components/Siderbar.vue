<template>
  <div class="panel">
    <div class="panel-heading">
      <h1>总计</h1>
    </div>
    <div class="panel-body">
      {{ time }}分钟
    </div>
    <div v-for="plan in planList" @click="remove_this">
      {{plan.describe}}
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'
  import {DELETE_PLAN} from '@/store/plan'
  export default {
    mounted() {
      console.log(this.planList)
    },
    methods: {
      ...mapActions([DELETE_PLAN]),
      remove_this(e) {
        console.log(this.target.value)
      }
    },
    computed: mapState({
      time: state => state.plan.totalTime,
      planList: state => state.plan.planList
    })
  }
</script>

<style lang="less" scoped>
  .panel {
    position: fixed;
    top: 160px;
    left: 160px;
    background-color: #f8f8f8;
    padding: 20px;
    width: 300px;
    height: auto;
  }
</style>
