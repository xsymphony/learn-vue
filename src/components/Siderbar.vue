<template>
  <div class="panel">
    <input type="text" @keyup.enter="add_this" v-model="newPlan.describe" placeholder="要做什么呢">
    <ul class="todo-list list-group">
      <li v-for='plan in planList'>
          <span class="form-group">
            <input type="checkbox" :key="plan.id" :checked="plan.done" @click="update_this(plan)"/>
            <label :for="plan.id">{{plan.describe}}</label>
            <strong @click="remove_this(plan)">X</strong>
          </span>
      </li>
    </ul>
    <div class="panel-heading">
      <h1>总计</h1>
    </div>
    <div class="panel-body">
      {{ time }}分钟
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'
  import {ADD_PLAN, DELETE_PLAN, UPDATE_PLAN} from '@/store/plan'
  export default {
    data() {
      return {
      	show: false,
        newPlan: {
          id: '',
          describe: '',
          done: false,
        }
      }
    },

    methods: {
      ...mapActions([ADD_PLAN, DELETE_PLAN, UPDATE_PLAN]),
      add_this() {
      	let plan = Object.assign({},this.newPlan)
        this.ADD_PLAN(plan);
      	this.newPlan.describe = '';
        console.log(plan.id);
      },
      remove_this(plan) {
      	this.DELETE_PLAN(plan.id)
      },
      update_this(plan) {
      	this.UPDATE_PLAN(plan)
      }
    },

    computed: {
      ...mapState({
        time: state => state.plan.totalTime,
        planList: state => state.plan.planList,
      }),
    }
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
