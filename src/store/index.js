import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import setting from '../views/component/setting.json'

export default new Vuex.Store({
  state: {
      item: setting,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
