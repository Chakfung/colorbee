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
          <li><a @click="goMe()">我的</a></li>
          <li><a @click="goLogin()">登录</a></li>
        </ul>

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


  // $(function(){
  //   $(window).scroll(function(){
  //     if($(window).scrollTop()<=100){
  //       // $("header").css({"position":"static"});
  //       $("header").fadeIn(0)
  //
  //     }else if($(window).scrollTop()>100 && $(window).scrollTop()<250){
  //       $("header").fadeOut(0)
  //
  //     } else if($(window).scrollTop()>=250){
  //       // $("header").css({"position":"static"});
  //       $("header").css({"position":"fixed","top":0,"width":"100%","-webkit-animation":"1s"});
  //       $("header").fadeIn(1000)
  //
  //     }
  //   });
  // });
  export default {
    name: "Main",
    data(){
      return{
        path:''
      }
    },
    computed:{
      // changeCssOfHeader () {
      //   // if(this.path=='/gallery'){
      //   //   console.log('111');
      //   //   $(".header").css({"background":"rgba(255, 255, 255, 0.75)","position":"absolute","z-index":"999"});
      //   // }else {
      //   //   console.log('222');
      //   //   $(".header").css({"background":"rgb(255,255,255)","position":"static","z-index":"999"});
      //   }
      // }
    },
    mounted() {
      window.onload = function () {
        console.log(window.sessionStorage["ISlogin"]);
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
      goLogin(){
        this.$router.push('/login')
        this.path = this.$route.path
      },

    },


    beforeUpdate(){
      if (this.path === '/gallery') {
        $(".header").css({"background": "rgba(255, 255, 255, 0.75)", "position": "absolute", "z-index": "999"});
      }
      if (this.path === '/login/log') {
        $("#topbar2").css({"display": "none", "position": "fixed", "top": "0", "transition": "0s"});
        $(".header").css({"background": "rgb(255,255,255)", "position": "static", "z-index": "999"});
      }
      if(this.path != '/login' && this.path != '/gallery') {
        $(".header").css({"background": "rgb(255,255,255)", "position": "static", "z-index": "999"});
      }
    },

  }

</script>

<style lang="scss">
  .nav {
    li {

      font-size: 18px;
      &:hover {
        cursor: pointer;
        color: #42b983;

      }
    }
  }

</style>