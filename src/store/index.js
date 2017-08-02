/**
 * Created by Administrator on 2017/8/2.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import plan from './plan'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    plan
  }
})
