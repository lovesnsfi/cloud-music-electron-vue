import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,state,mutations,getters,actions,
  strict: process.env.NODE_ENV !== 'production'
})
