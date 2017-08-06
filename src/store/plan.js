/**
 * Created by Administrator on 2017/8/2.
 */
export const ADD_TOTAL_TIME = 'ADD_TOTAL_TIME';

export const ADD_PLAN = 'ADD_PLAN';
export const DELETE_PLAN = 'DELETE_PLAN';

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
      localStorage.removeItem('planList')
      localStorage.removeItem('totalTime')
    },
    [ADD_PLAN](state, plan) {
      state.planList.push(plan);
      localStorage.setItem('planList', JSON.stringify(state.planList))
    },
    [DELETE_PLAN](state, id) {
      state.list.splice(id, 1);
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
    }
  }
}


