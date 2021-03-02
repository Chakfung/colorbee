import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http  = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

//前端请求 利用token
http.interceptors.request.use(config=>{
  if(localStorage.token){

  config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
},err=>{

    return Promise.reject(err)

})

//拦截错误
http.interceptors.response.use(res=>{
  return res
},err=>{
  if(err.response.data.message){

    Vue.prototype.$message({
      type:'error',
      message:err.response.data.message
    })


    return Promise.reject(err)
  }
})


export default http