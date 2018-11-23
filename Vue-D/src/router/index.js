import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index.vue'
import Mine from '@/page/mine.vue'
import Recommend from '@/page/recommend.vue'
import Car from '@/page/car.vue'
import PageDetails from '@/components/pageDetails'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: 'index',
    },
    {
      path: '/index', //首页
      name: 'Index',
      component: Index,
    },
    {
      path: '/recommend', //推荐
      name: 'Recommend',
      component: Recommend,
    },
    {
      path: '/car', //推荐
      name: 'Car',
      component: Car,
    },
    {
      path: '/mine', //我的
      name: 'Mine',
      component: Mine,
    },
    {
      path: '/pageDetails',
      component: PageDetails
    },
  ]
})
