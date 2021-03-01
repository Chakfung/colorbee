<template>
  <div class="me">

    <div class="me-sidebar">
      <ul>
        <li class="group">
          <span class="group-title">预约摄影</span>
          <ul>
            <li><a href="" @click="goAppointOrder()">预约订单</a></li>
            <li><a href="" @click="goCollectTheme()">收藏主题</a></li>
          </ul>
        </li>
        <li class="group">
          <span class="group-title">博客</span>
          <ul>
            <li><a href="" @click="goMyBlog()">我的博客</a></li>
            <li><a href="" @click="goCollectBlog()">收藏博客</a></li>
            <li><a href="" @click="goReleaseBlog()">发布博客</a></li>
          </ul>
        </li>
        <li class="group">
          <span class="group-title">图库</span>
          <ul>
            <li><a href="" @click="goMyGallery()">我的图片</a></li>
            <li><a href="" @click="goBuyGallery()">已购图片</a></li>
            <li><a href="" @click="goReleaseGallery()">发布图片</a></li>
          </ul>
        </li>
        <li class="group">
          <span class="group-title">设置</span>
          <ul>
            <li><a href="" @click="goCountInfo()">账号信息</a></li>

          </ul>
        </li>

      </ul>
    </div>
    <div class="me-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


  export default {
    name: "Me",
    methods: {
      goAppointOrder() {
        this.$router.push('appointorder')
      },
      goCollectTheme() {
        this.$router.push('collecttheme')
      },
      goMyBlog() {
        this.$router.push('myblog')
      },
      goCollectBlog() {
        this.$router.push('collectblog')
      },
      goReleaseBlog() {
        this.$router.push('releaseblog')
      },
      goMyGallery() {
        this.$router.push('mygallery')
      },
      goBuyGallery() {
        this.$router.push('buygallery')
      },
      goReleaseGallery() {
        this.$router.push('releasegallery')
      },
      goCountInfo() {
        this.$router.push('countinfo')
      }
    }
  }
</script>

<style lang="scss" scoped>




  .me {

    position: absolute;
    top: 70px;
    width: 100%;
    background-color: #f9f8f7;
    display: flex;
    justify-content: center;
    /*background-image: url("../assets/image/home/bg1.jpg") ;*/
    /*background-size: 100%;*/
    min-height: 1000px;

    .me-sidebar {
      width: 200px;
      /*border: 0.01rem red solid;*/
      margin-right: 50px ;
      margin-top: 50px;
      background-color: #eaeaea;
      height: 600px;
      
      .group {

        width: 100%;

        margin-top: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;



        .group-title {
          color: #B6B6B6;
          width: 100%;
          text-align: center;
          /*border: #42b983 1px solid;*/
        }
        ul {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          margin-top: 10px;

          li {
            height: 35px;

            width: 100%;
            text-align: center;
            line-height: 33px;
            
            
            a {

              width: 100%;
              display: block;
              text-decoration: none;
              color: #666666;
              font-family: 'PingFangSC','helvetica neue','hiragino sans gb','arial','microsoft yahei ui','microsoft yahei','simsun','sans-serif'!important;
            }

            &:hover {
              background-color: rgba(251, 196, 77, 0.57);
              a {
                color: white;
              }
            }

            &.active {
              background-color: #ff632a;
              color: #ffffff;
            }
            
          }
        }

      }

    }
    .me-content {
      width: 800px;
      margin-top: 50px;
      background-color: #fff;

    }
  }

</style>