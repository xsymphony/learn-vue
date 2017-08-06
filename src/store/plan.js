/**
 * Created by Administrator on 2017/8/2.
 */
export const ADD_TOTAL_TIME = 'ADD_TOTAL_TIME';

export const ADD_PLAN = 'ADD_PLAN';
export const DELETE_PLAN = 'DELETE_PLAN';
export const UPDATE_PLAN = 'UPDATE_PLAN';

export const RESET_ALL = 'RESET_ALL';

export default {
  state: {
    totalTime: JSON.parse(localStorage.getItem('totalTime')) || 0,
    planList: JSON.parse(localStorage.getItem('planList')) || [],
  },

  mutations: {
    [ADD_TOTAL_TIME](state, time) {
      state.totalTime = parseInt(state.totalTime) + parseInt(time);
      localStorage.setItem('totalTime', JSON.stringify(state.totalTime))
    },
    [RESET_ALL](state) {
      localStorage.removeItem('planList');
      localStorage.removeItem('totalTime')
    },
    [ADD_PLAN](state, plan) {
      const index = state.planList.length>0 ? state.planList[state.planList.length - 1].id + 1 : 0;
      plan.id = index;
      state.planList.push(plan);
      localStorage.setItem('planList', JSON.stringify(state.planList))
    },
    [DELETE_PLAN](state, id) {
      for (let plan of state.planList) {
        if (plan.id === id) {
          const index = state.planList.indexOf(plan);
          console.log(index);
          state.planList.splice(index,1);
          localStorage.setItem('planList', JSON.stringify(state.planList))
          break;
        }
      }
    },
    [UPDATE_PLAN](state, plan) {
      plan.done = !plan.done;
      Object.assign(state.planList, plan);
      localStorage.setItem('planList', JSON.stringify(state.planList))
    }
  },

  actions: {
    [ADD_TOTAL_TIME]({commit}, time) {
      commit(ADD_TOTAL_TIME, time)
    },
    [RESET_ALL]({commit}, time) {
      commit(RESET_ALL, time)
    },
    [ADD_PLAN]({commit}, plan) {
      commit(ADD_PLAN, plan)
    },
    [DELETE_PLAN]({commit}, plan) {
      commit(DELETE_PLAN, plan)
    },
    [UPDATE_PLAN]({commit}, plan) {
      commit(UPDATE_PLAN, plan)
    }
  }
}


