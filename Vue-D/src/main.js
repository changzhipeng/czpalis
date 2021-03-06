import Vue from 'vue'
import App from './App'
import router from './router'
import AppFooter from './components/tabbar'
import './base/js/base.js'
import './base/css/base.scss'
import 'swiper/dist/css/swiper.css'
import store from './store'
// import './ui/my-own-ui.js'
// import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.prototype.$axios = axios


// /*滑动事件*/
// import VueTouch from 'vue-touch'
// Vue.use(VueTouch, { name: 'v-touch' })

// /*图片懒加载*/
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   loading: require('@/assets/head.jpg'),
//   attempt: 1
// })

/* 轮播图 */
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);

/* tabbar */
Vue.component('app-footer',AppFooter);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
