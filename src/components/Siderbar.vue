<template>
  <div class="panel">
    <div class="panel-heading">
      <h1>总计</h1>
    </div>
    <div class="panel-body">
      {{ time }}分钟
    </div>
    <input type="text" @keyup.enter="add_todo" v-model="newPlan.describe" placeholder="要做什么呢">
    <div v-for="plan in planList" @click="remove_this">
      {{plan.id}}{{plan.describe}}{{plan.done}}
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'
  import {ADD_PLAN, DELETE_PLAN} from '@/store/plan'
  export default {
    data() {
      return {
        newPlan: {
          id: '',
          describe: '',
          done: false,
        }
      }
    },
    mounted() {
      console.log(this.planList)
    },
    methods: {
      ...mapActions([ADD_PLAN, DELETE_PLAN]),
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
