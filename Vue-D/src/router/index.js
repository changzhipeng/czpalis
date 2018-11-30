import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index.vue'
import Mine from '@/page/mine.vue'
import Recommend from '@/page/recommend.vue'
import Cart from '@/page/cart.vue'
import PageDetails from '@/components/pageDetails'
import Login from '@/page/login.vue'
import EditAddressPage from '@/page/editAddressPage.vue'
import ModifyAddress from '@/page/ModifyAddress.vue'
import AddNewAddress from '@/page/AddNewAddress.vue'

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
      path: '/cart', //推荐
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/mine', //我的
      name: 'Mine',
      component: Mine,
      children: [
        // {
          // path: 'editAddressPage',
          // component: EditAddressPage
        // },
        // {
        //   path: 'AddNewAddress',
        //   component: AddNewAddress
        // },
        // {
        //   path: 'ModifyAddress',
        //   component: ModifyAddress
        // }
      ]
    },
    {
      path: '/pageDetails',
      name:'PageDetails',
      component: PageDetails
    },
    {
      path: '/login',
      name:'Login',
      component: Login
    },
    {
      path: '/editAddressPage',
      name: 'EditAddressPage',
      component: EditAddressPage
    },
    {
      path: '/AddNewAddress',
      name: 'AddNewAddress',
      component: AddNewAddress
    },
    {
      path: '/ModifyAddress',
      name: 'ModifyAddress',
      component: ModifyAddress
    },
  ]
})
