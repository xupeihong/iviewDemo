import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
// import user from '@/components/user'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
    path:'/index',
    name:'index',
    component:index
    }
    // {
    //   path: '/user',
    //   name: 'user',
    //   component: user
    // },
  ]
})
