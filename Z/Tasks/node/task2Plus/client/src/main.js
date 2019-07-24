import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import store from './store'
import router from './router/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.use(ElementUI);
axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
