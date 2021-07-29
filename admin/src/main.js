import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false


import $ from 'jquery'
import http from './http'
Vue.prototype.$http = http

Vue.mixin({
  methods:{
    getAuthHeaders(){
      return{
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})


new Vue({
  router,
  $,
  render: h => h(App)
}).$mount('#app')
