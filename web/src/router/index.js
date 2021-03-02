import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import ClassGallery from '../components/gallery/ClassGallery.vue'
import Gallery from '../views/Gallery.vue'
import Login from '../views/Login.vue'


import Blog from '../views/Blog'
import BlogDetail from '../components/blog/BlogDetail'

import Appoint from '../views/Appoint'
import AppointDetail from '../components/appoint/AppointDetail'

import Me from '../views/Me'
//me的子组件
import AppointOrder from '../components/me/AppointOrder'
import BuyGallery from '../components/me/BuyGallery'
import CollectBlog from '../components/me/CollectBlog'
import CollectTheme from '../components/me/CollectTheme'
import CountInfo from '../components/me/CountInfo'
import MyBlog from '../components/me/MyBlog'
import MyGallery from '../components/me/MyGallery'
import ReleaseBlog from '../components/me/ReleaseBlog'
import ReleaseGallery from '../components/me/ReleaseGallery'



import LoginCard from '../components/login/LoginCard'
import RegisterCard from '../components/login/RegisterCard'


Vue.use(VueRouter)

//解决重复点出错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}



const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    meta: {isPublic: true},

    children:[
      {path: '/',
        name: 'home',
        component: Home,
        meta: {isPublic: true},
      },
      {path: '/gallery',
        name: 'gallery',
        component: Gallery,
        meta: {isPublic: true},
      }
      ,
      {path: '/classgallery',
        name: 'classgallery',
        component: ClassGallery,
        meta: {isPublic: true},
      }
      ,
      {path: '/classgallery/:gclass',
        name: 'classgallery',
        component: ClassGallery,
        meta: {isPublic: true},
        props:true
      }
      ,
      {path: '/blog',
        name: 'blog',
        component: Blog,
        meta: {isPublic: true},
      }
      ,
      {path: '/appoint',
        name: 'appoint',
        component: Appoint,
        meta: {isPublic: true},
      },

      {
        path:'/appointdetail',
        name:'appointdetail',
        component:AppointDetail,
        meta: {isPublic: true},
      }
      ,
      {
        path:'/appointdetail/:id',
        name:'appointdetail',
        component:AppointDetail,
        meta: {isPublic: true},
        props: true
      }
      ,
      {
        path:'/blogdetail',
        name:'blogdetail',
        component:BlogDetail,
        meta: {isPublic: true},
      }
      ,
      {
        path:'/blogdetail/:id',
        name:'blogdetail',
        component:BlogDetail,
        meta: {isPublic: true},
        props: true
      }
      ,
      {path: '/me',
        name: 'me',
        component: Me,


        children:[
          {
            path: '/',
            redirect: 'appointorder'
          },
          {
            path: 'appointorder',
            name: 'appointorder',
            component: AppointOrder,
          },
          {
            path:'appointorder/:id',
            name:'appointorder',
            component:AppointOrder,
            props: true
          }
          ,
          {
            path: 'buygallery',
            name: 'buygallery',
            component: BuyGallery,
          }
          ,
          {
            path: 'collectblog',
            name: 'collectblog',
            component: CollectBlog,
          }
          ,

          {
            path: 'collecttheme',
            name: 'collecttheme',
            component: CollectTheme,
          }
          ,
          {
            path:'collecttheme/:id',
            name:'collecttheme',
            component:CollectTheme,
            props: true
          }
          ,


          {
            path: 'countinfo',
            name: 'countinfo',
            component: CountInfo,
          }
          ,
          {
            path: 'myblog',
            name: 'myblog',
            component: MyBlog,
          }
          ,
          {
            path: 'mygallery',
            name: 'mygallery',
            component: MyGallery,
          },
          {
            path: 'releaseblog',
            name: 'releaseblog',
            component: ReleaseBlog,
          },
          {
            path: 'releasegallery',
            name: 'releasegallery',
            component: ReleaseGallery,
          }
        ]
      }
      ,

      {path: 'login',
        name: 'login',
        component: Login,
        meta: {isPublic: true},
        children:[
          {
            path: '/',
            redirect: 'log',
            meta: {isPublic: true},
          },
          {
            path: 'log',
            name: 'log',
            component: LoginCard,
            meta: {isPublic: true},
          },
          {
            path: 'register',
            name: 'register',
            component: RegisterCard,
            meta: {isPublic: true},
          }
        ]
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]




const router = new VueRouter({
  routes,
  //去掉url#
  // mode: 'history',




})


//导航守卫
router.beforeEach((to, from, next)=>{
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next()
})



export default router
