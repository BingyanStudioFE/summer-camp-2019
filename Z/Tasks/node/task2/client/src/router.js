import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Login from './components/Login'
// import Index from '../components/Index'
// import Register from '../components/Register'
// import Commodity from '../components/Commodity'
// import Publish from '../components/Publish'
// import UserInfo from '../components/UserInfo'
// import MyPublish from '../components/MyPublish'
// import MyCollect from "../components/MyCollect"

Vue.use(Router);

const router = new Router({
      mode: 'history',
      routes: [
        // {
        //   path: '/',
        //   name: '/',
        //   component: Index,
        //   meta: {
        //     requireAuth: true
        //   },
        //   children: [
        //     {
        //       path: 'commodity',
        //       component: Commodity,
        //       meta: {
        //         requireAuth: true
        //       }
        //     }, {
        //       path: 'publish',
        //       component: Publish,
        //       meta: {
        //         requireAuth: true
        //       }
        //     }, {
        //       path: 'userinfo',
        //       component: UserInfo,
        //       meta: {
        //         requireAuth: true
        //       }
        //     }, {
        //       path: 'mypublish',
        //       component: MyPublish,
        //       meta: {
        //         requireAuth: true
        //       }
        //     }, {
        //       path: 'mycollect',
        //       component: MyCollect,
        //       meta: {
        //         requireAuth: true
        //       }
        //     }]
        // },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        // {
        //   path: '/register',
        //   name: 'register',
        //   component: Register,
        // }
      ]
    })
;
router.beforeEach((to, from, next) => {
  const token = store.state.token;
  if (to.meta.requireAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
      })
    }
  } else {
    next()
  }
});
export default router
