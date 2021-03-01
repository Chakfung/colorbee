import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './style.scss'
import './assets/css/index.scss'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/css/iconfont/iconfont.css'
import './plugins/element.js'

import http from './http'
Vue.prototype.$http = http


new Vue({
  router,
  $,
  render: h => h(App)
}).$mount('#app')
