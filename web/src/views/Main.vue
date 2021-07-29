<template>
  <div>
    <header class="header" id="topbar1">
      <a href="" class="logo">COLORBEE</a>
      <div class="nav">
        <ul>
          <li><a @click="goHome()">主页</a></li>
          <li><a @click="goGallery()">图库</a></li>
          <li><a @click="goAppoint()">拍摄</a></li>
          <li><a @click="goBlog()">博客</a></li>
          <li><a @click="goCommunity()">社区</a></li>
          <li><a @click="goMe()">我的</a></li>
          <li><a @click="goLogin()">登录</a></li>
        </ul>

      </div>
      <div class="avatar-profile"   v-if="userid">
        <img :src="user.avatar" alt="">
      </div>
    </header>
    <header class="header" id="topbar2">
      <a href="" class="logo">COLORBEE</a>
      <div class="nav">
        <ul>
          <li><a @click="goHome()">主页</a></li>
          <li><a @click="goGallery()">图库</a></li>
          <li><a @click="goAppoint()">拍摄</a></li>
          <li><a @click="goBlog()">博客</a></li>
          <li><a @click="goCommunity()">社区</a></li>
          <li><a @click="goMe()">我的</a></li>
          <li><a @click="goLogin()">登录</a></li>
        </ul>
      </div>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
  import $ from 'jquery'
  $(function(){

    $(window).scroll(function(){
      if($(window).scrollTop()>=150) {
        $("#topbar2").css({"opacity":".8","position":"fixed","top":"0","transition-duration":"0.5s"});
      } else{
        $("#topbar2").css({"opacity":"0","position":"fixed","top":"0","transition":"0s","z-index":"999"});


      }
    });
  });

  export default {
    name: "Main",
    data(){
      return{
        path:'',
        user: {},
        userid:''
      }
    },
    computed:{

    },
    mounted() {
      window.onload = function () {
        if (!window.sessionStorage["ISlogin"]) {
          // 关闭浏览器
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("user");
        } else {
          // 刷新
        }
      };
      window.onunload = function () {
        window.sessionStorage["ISlogin"] = true;
      };
      window.onbeforeunload = function () {
        window.sessionStorage["ISlogin"] = true;
      };
    },
    methods:{
      goHome(){
        this.$router.push('/')
        this.path = this.$route.path
      },
      goGallery(){
        this.$router.push('/gallery')
        this.path = this.$route.path
      },
      goAppoint(){
        this.$router.push('/appoint')
        this.path = this.$route.path
      },
      goMe(){
        this.$router.push('/me')
        this.path = this.$route.path
      },
      goBlog(){
        this.$router.push('/blog')
        this.path = this.$route.path
      },
      goCommunity() {
        this.$router.push('/community')
        this.path = this.$route.path
      },
      goLogin(){
        this.$router.push('/login')
        this.path = this.$route.path
      },
      async fetchUser(){
        const res = await this.$http.get(`rest/user/${this.userid}`)
        this.user = res.data
      },
    },
    created () {
      if(localStorage.user) {
        this.userid =localStorage.user
        this.fetchUser()
      }
    },
    mounted () {
      if(localStorage.user) {
        this.userid = localStorage.user
        this.fetchUser()
      }
    }
  }

</script>

<style lang="scss">
  .avatar-profile {
    position: absolute;
    right: 100px;
    top: 10px;
    width: 50px;
    height: 50px;
    border-radius: 25px ;
    img {
      width: 50px;
      height: 50px;
      border-radius: 25px;
    }
  }
  .nav {
    li {
      font-size: 18px;
      &:hover {
        cursor: pointer;
        color: #42b983;
      }
    }
  }
  #topbar2 {
    position: fixed;
  }

</style>