import Vue from 'vue'
import axios from 'axios'
import VeeValidate from 'vee-validate';
import App from './App.vue'
import store from './store'
import router from './router'

Vue.use(VeeValidate);
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app');
