import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import CategoryList from '../components/CategoryList.vue'
import CategoryAdd from '../components/CategoryAdd.vue'
import UserList from '../components/UserList.vue'
import UserAdd from '../components/UserAdd.vue'
import PhotoList from '../components/PhotoList.vue'
import PhotoAdd from '../components/PhotoAdd.vue'
import BlogList from '../components/BlogList.vue'
import BlogAdd from '../components/BlogAdd.vue'
import AdminUserList from '../components/AdminUserList.vue'
import AdminUserAdd from '../components/AdminUserAdd.vue'
import AdvertisementList from '../components/AdvertisementList.vue'
import AdvertisementAdd from '../components/AdvertisementAdd.vue'
import ThemetList from '../components/ThemeList.vue'
import ThemeAdd from '../components/ThemeAdd.vue'
import PhotographerList from '../components/PhotographerList.vue'
import PhotographerAdd from '../components/PhotographerAdd.vue'

Vue.use(VueRouter)

const routes = [

  {
    path:'/login',
    name:'login',
    component:Login,
    meta: {isPublic: true}
  },
  {
    path: '/',
    name: 'main',
    component: Main,

    children:[

        //分类
      {
        path: '/category/list',
        component: CategoryList
      },
      {
        path: '/category/add',
        component: CategoryAdd
      },
      {
        path: '/category/add/:id',
        component: CategoryAdd,
        props: true
      },

        //用户
      {
        path: '/user/list',
        component: UserList
      },
      {
        path: '/user/add',
        component: UserAdd
      },
      {
        path: '/user/edit/:id',
        component: UserAdd,
        props: true
      },

      //相册
      {
        path: '/photo/list',
        component: PhotoList
      },
      {
        path: '/photo/add',
        component: PhotoAdd
      },
      {
        path: '/photo/edit/:id',
        component: PhotoAdd,
        props: true
      },

      //博客
      {
        path: '/blog/list',
        component: BlogList
      },
      {
        path: '/blog/add',
        component: BlogAdd
      },
      {
        path: '/blog/edit/:id',
        component: BlogAdd,
        props: true
      },

      //管理员用户
      {
        path: '/admin_users/list',
        component: AdminUserList
      },
      {
        path: '/admin_users/add',
        component: AdminUserAdd
      },
      {
        path: '/admin_users/edit/:id',
        component: AdminUserAdd,
        props: true
      },
      //摄影师用户
      {
        path: '/Photographer/list',
        component: PhotographerList
      },
      {
        path: '/Photographer/add',
        component: PhotographerAdd
      },
      {
        path: '/Photographer/edit/:id',
        component: PhotographerAdd,
        props: true
      },

        //广告
      {
        path: '/advertisement/list',
        component: AdvertisementList
      },
      {
        path: '/advertisement/add',
        component: AdvertisementAdd
      },
      {
        path: '/advertisement/edit/:id',
        component: AdvertisementAdd,
        props: true
      },
      //主题
      {
        path: '/theme/list',
        component: ThemetList
      },
      {
        path: '/theme/add',
        component: ThemeAdd
      },
      {
        path: '/theme/edit/:id',
        component: ThemeAdd,
        props: true
      },
    ]
  }

]

const router = new VueRouter({
  routes,
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
