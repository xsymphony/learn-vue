<template>
  <div class="panel">
    <div>
      <input type="text" class="plan-input" @keyup.enter="add_this"
             v-model="newPlan.describe" placeholder="要做什么呢">
    </div>
    <div>
      <ul class="todo-list list-group">
        <li v-for='plan in planList' class="list-group-item"
            :class="{'hover-this':selectedPlan === plan.id}"
            @mouseenter="hover_this(plan.id)" @mouseleave="hover_this(plan.id)">
          <span class="form-group">
            <input type="checkbox" :key="plan.id" :id="plan.id"
                   :checked="plan.done" @click="update_this(plan)"/>
            <label :for="plan.id">{{plan.describe}}</label>
            <strong @click="remove_this(plan)" class="x-default x-active">[X]</strong>
          </span>
        </li>
      </ul>
    </div>
    <div>
      <div class="panel-heading">
        <h1>总计</h1>
      </div>
      <div class="panel-body">
        {{ time }}分钟
      </div>
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
        selectedPlan: '',
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
        let plan = Object.assign({}, this.newPlan);
        this.ADD_PLAN(plan);
        this.newPlan.describe = '';
        console.log(plan.id);
      },
      remove_this(plan) {
        this.DELETE_PLAN(plan.id)
      },
      update_this(plan) {
        this.UPDATE_PLAN(plan)
      },
      hover_this(id) {
        if (this.selectedPlan === id) {
          this.selectedPlan = '';
          return
        }
        this.selectedPlan = id;
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
  .plan-input {
    display: block;
    width: 100%;
    height: 22px;
    padding: 6px 12px;
    font-size: 14px;
    color: #555;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  }

  .x-default {
    display: none;
  }

  .panel {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    top: 160px;
    left: 160px;
    background-color: #f8f8f8;
    padding: 20px;
    height: auto;

    div {
      width: 60%;
    }
  }

  .todo-list {
    font-size: 14px;
    margin-top: 3px;
    list-style: none;

    li {
      position: relative;
      padding: 5px 0;
      display: block;
      border: 0.5px solid #ccc;
      border-radius: 4px;
    }
    .hover-this {
      background: #e5e5e5;

      span {
        .x-active {
          display: inline;
        }
      }
    }
  }
</style>
