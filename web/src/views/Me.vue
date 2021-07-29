<template>
  <div class="me">
    <div class="me-nav">
      <el-menu router :default-openeds="open_list" unique-opened :default-active="$route.path" >
          <el-menu-item-group>
            <template slot="title">预约摄影</template>
            <el-menu-item index="/me/appointorder">预约订单</el-menu-item>
            <el-menu-item index="/me/collecttheme">收藏主题</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title">博客</template>
            <el-menu-item index="/me/myblog">我的博客</el-menu-item>
            <el-menu-item index="/me/collectblog">收藏博客</el-menu-item>
            <el-menu-item index="/me/releaseblog">发布博客</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title">图库</template>
            <el-menu-item index="/me/mygallery">我的图片</el-menu-item>
            <el-menu-item index="/me/buygallery">已购图片</el-menu-item>
            <el-menu-item index="/me/releasegallery">发布图片</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title">设置</template>
            <el-menu-item index="/me/countinfo">账号信息</el-menu-item>
          </el-menu-item-group>
      </el-menu>
    </div>
      <div class="me-content">
        <router-view></router-view>
      </div>

  </div>
</template>

<script>


  export default {
    name: "Me",
    data(){
      return {
        open_list:['1','2','3']
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .me {
    position: absolute;
    top: 70px;
    width: 100%;
    /*background-color: #f9f8f7;*/
    /*background-image: url(../assets/image/backgroundImg.jpg);*/
    /*-webkit-background-size: 100%;*/
    /*background-size: 100%;*/
    /*background-repeat: repeat;*/
    background: #edf2f6;
    display: flex;
    justify-content: center;
    /*background-image: url("../assets/image/home/bg1.jpg") ;*/
    /*background-size: 100%;*/
    min-height: 100%;

    .me-nav {
      width: 200px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      background: #fff;
      margin-top: 25px;
      padding-top: 10px;
      height: 650px;
      .el-menu {
        width: 160px;
        border-right: none;
        li {
          border-radius: 5px;
        }
      }
    }

    }
    .me-content {
      border-radius: 10px;
      margin-left: 15px;
      width: 780px;
      margin-top: 25px;
      background-color: #fff;
      margin-bottom: 200px;
    }


</style>