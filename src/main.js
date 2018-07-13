// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import './assets/css/base.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import './common/less/index.less'
import './assets/js/validate.js'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

Vue.prototype.$axios = axios

//创建一个日期的过滤器，全局使用
Vue.filter('formatDate',function(old){
  function fillZero (value) {
    return value > 10 ? value : '0' + value
  }
  let date = new Date(old);
  let year = fillZero(date.getFullYear());
  let month = fillZero(date.getMonth() + 1);
  let day = fillZero(date.getDate());
  let hours = fillZero(date.getHours());
  let second = fillZero(date.getSeconds());
  return `${year}-${month}-${day} ${hours}:${second}`;
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
