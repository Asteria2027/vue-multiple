import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/index/home/home.vue'
import memberCentre from '@/components/index/memberCentre/memberCentre.vue'
import myTender from '@/components/index/myTender/myTender.vue'

Vue.use(Router)

export default new Router({
  // base: '/wapfront/',
  // mode:'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    // 首页
    {
      path: '/home',
      component: home
    },
    //会员中心
    {
      path: '/memberCentre',
      component: memberCentre
    },
    //我要投标
    {
      path: '/myTender',  
      component: myTender
    },
  ]
})
