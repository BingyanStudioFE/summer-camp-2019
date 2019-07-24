import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
  token: window.localStorage.getItem('token'),
};
const mutations = {
  SET_TOKEN: (state, data) => {
    state.token = data;
    window.localStorage.setItem('token', data)
  },
  LOGOUT: (state) => {
    state.token = null;
    window.localStorage.removeItem('token');
  }
};
const actions = {};
export default new Vuex.Store({
  state,
  mutations,
  actions
})
