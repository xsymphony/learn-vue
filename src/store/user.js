/**
 * Created by Administrator on 2017/8/3.
 */
export const USER_LOG_IN = "USER_LOG_IN";
export const USER_LOG_OUT = "USER_LOG_OUT";


export default {
  state: {
    username: JSON.parse(sessionStorage.getItem('username')) || '',
    isActive: JSON.parse(sessionStorage.getItem('isActive')) || false,
  },
  mutations: {
    [USER_LOG_IN](state, username) {
      sessionStorage.setItem('username', JSON.stringify(username));
      sessionStorage.setItem('isActive', JSON.stringify(true));
      Object.assign(state, {username:username,isActive:true})
    },
    [USER_LOG_OUT](state) {
      sessionStorage.removeItem('isActive');
      state.isActive = false
    }
  },
  actions: {
    [USER_LOG_IN]({commit}, username) {
      commit(USER_LOG_IN, username)
    },
    [USER_LOG_OUT]({commit}) {
      commit(USER_LOG_OUT)
    }
  }
}
