/**
 * Created by Administrator on 2017/8/2.
 */
export const ADD_TOTAL_TIME = 'ADD_TOTAL_TIME';
export const DEC_TOTAL_TIME = 'DEC_TOTAL_TIME';

export const SAVE_PLAN = 'SAVE_PLAN';
export const DELETE_PLAN = 'DELETE_PLAN';

export default {
  state: {
    totalTime: 12,
    planList: []
  },
  mutations: {
    [ADD_TOTAL_TIME](state, time) {
      state.totalTime = state.totalTime + time
    },
    [DEC_TOTAL_TIME](state, time) {
      state.totalTime = state.totalTime - time
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
    [DEC_TOTAL_TIME]({commit}, time) {
      commit(DEC_TOTAL_TIME, time)
    },
    [SAVE_PLAN]({commit}, plan) {
      commit(SAVE_PLAN, plan)
    },
    [DELETE_PLAN]({commit}, plan) {
      commit(DELETE_PLAN, plan)
    }
  }
}


