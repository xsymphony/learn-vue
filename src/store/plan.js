/**
 * Created by Administrator on 2017/8/2.
 */
export const ADD_TOTAL_TIME = 'ADD_TOTAL_TIME';

export const SAVE_PLAN = 'SAVE_PLAN';
export const DELETE_PLAN = 'DELETE_PLAN';

export const RESET_ALL = 'RESET_ALL';

export default {
  state: {
    totalTime: 0,
    planList: []
  },

  mutations: {
    [ADD_TOTAL_TIME](state, time) {
      state.totalTime = state.totalTime + time
    },
    [RESET_ALL](state) {
      state.totalTime = 0;
      state.planList = 0;
    },
    [SAVE_PLAN](state, plan) {
      state.planList.push(plan)
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
    [SAVE_PLAN]({commit}, plan) {
      commit(SAVE_PLAN, plan)
    },
    [DELETE_PLAN]({commit}, plan) {
      commit(DELETE_PLAN, plan)
    }
  }
}


