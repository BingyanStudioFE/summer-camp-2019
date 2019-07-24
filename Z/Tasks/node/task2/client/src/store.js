import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: window.localStorage.getItem('token'),
    username: window.localStorage.getItem('username')
  },
  mutations: {
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
  },
  actions: {}
})
