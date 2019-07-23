import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
  token: window.localStorage.getItem('token'),
  username: window.localStorage.getItem('username')
};
const mutations = {
  SET_TOKEN: (state, data) => {
    state.token = data;
    window.localStorage.setItem('token', data)
  },
  SET_USER: (state, data) => {
    state.username = data;
    window.localStorage.setItem('username', data)
  },
  LOGOUT: (state) => {
    state.token = null;
    state.username = null;
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('username');
  }
};
const actions = {};
export default new Vuex.Store({
  state,
  mutations,
  actions
})
