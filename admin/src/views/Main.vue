<template>
  <div>

    <div class="m-header">

      <el-header>

        <div class="header-logo" >
        </div>
        <div class="header-text" >彩蜂摄影平台管理页面</div>

        <div class="header-fun" >
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px ;color: #fff; font-size: 25px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click="gologin()">登录</el-dropdown-item>
              <el-dropdown-item>前端</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </div>
      </el-header>
    </div>



  <el-container style="height: 100vh; border: 1px solid #eee">





    <el-aside width="200px" style="background-color: rgb(238, 241, 246)"  class="m-aside">
      <el-menu router :default-openeds="open_list" unique-opened :default-active="$route.path" >

        <el-submenu index="1" style="font-size: 25px">
          <template slot="title"><i class="el-icon-message"></i>内容管理</template>


<!--          <el-menu-item-group>-->
<!--            <template slot="title">用户管理</template>-->
<!--            <el-menu-item index="/user/list">用户列表</el-menu-item>-->
<!--            <el-menu-item index="/user/add">添加用户</el-menu-item>-->
<!--          </el-menu-item-group>-->
          <el-menu-item-group>
            <template slot="title">主题管理</template>
            <el-menu-item index="/theme/list">主题列表</el-menu-item>
            <el-menu-item index="/theme/add">添加主题</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title">图库管理</template>
            <el-menu-item index="/photo/list">图片列表</el-menu-item>
            <el-menu-item index="/photo/add">添加图片</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title">博客管理</template>
            <el-menu-item index="/blog/list">博客列表</el-menu-item>
            <el-menu-item index="/blog/add">新增博客</el-menu-item>
          </el-menu-item-group>


        </el-submenu>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>用户管理</template>
          <el-menu-item-group>
            <template slot="title">普通用户管理</template>
            <el-menu-item index="/user/list">普通用户列表</el-menu-item>
            <el-menu-item index="/user/add">添加普通用户</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title">管理员</template>
            <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
            <el-menu-item index="/admin_users/add">新建管理员</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title">摄影师管理</template>
            <el-menu-item index="/photographer/list">摄影师列表</el-menu-item>
            <el-menu-item index="/photographer/add">添加摄影师</el-menu-item>
          </el-menu-item-group>

        </el-submenu>



        <el-submenu index="3">
          <template slot="title"><i class="el-icon-menu"></i>系统管理</template>
          <el-menu-item-group>
            <template slot="title">分类管理</template>
            <el-menu-item index="/category/list">分类列表</el-menu-item>
            <el-menu-item index="/category/add">新增分类</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">广告管理</template>
            <el-menu-item index="/advertisement/list">广告列表</el-menu-item>
            <el-menu-item index="/advertisement/add">新建广告</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">订单管理</template>
            <el-menu-item index="/order/list">未处理订单列表</el-menu-item>
            <el-menu-item index="/order/list">已处理订单列表</el-menu-item>
          </el-menu-item-group>

        </el-submenu>



      </el-menu>
    </el-aside>

    <el-container style="background-color: #fcffec;">


      <el-main class="m-card">
<!--        <el-table :data="tableData">-->
<!--          <el-table-column prop="date" label="日期" width="140">-->
<!--          </el-table-column>-->
<!--          <el-table-column prop="name" label="姓名" width="120">-->
<!--          </el-table-column>-->
<!--          <el-table-column prop="address" label="地址">-->
<!--          </el-table-column>-->
<!--        </el-table>-->
          <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        open_list:['1'],
        items:[]
      }
    },
    methods:{
      gologin(){
        this.$router.push('/login')
      }
    },
    mounted() {
      window.onload = function () {
        console.log(window.sessionStorage["ISlogin"]);
        if (!window.sessionStorage["ISlogin"]) {
          // 关闭浏览器
          window.localStorage.removeItem("token");
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
  };
</script>

<style>
  @import '../assets/css/icofont/icofont.min.css';
  /*@import '../assets/css/style.css';*/
  .header-text{
    flex: 1;
    text-align: left;
    padding-left: 50px;
    color: white;
    font-size: 20px;

  }
  .header-logo{
    background: url(../assets/image/logo.png) no-repeat;
    -webkit-background-size: 50px;
    background-size: 50px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-top: 5px;

  }
  .m-header {
    height: 65px;

  }

  .el-header {
    display: flex;
    background-color: #1e88e5;
    color: #333;
    line-height: 60px;
    box-shadow: 0px 2px 5px #000000;
  }

  .el-aside {
    color: #333;
  }
  .m-card {
    border: 1px #bbe9ff solid;
    background-color: #e1fcff;
    border-radius: 10px;
    margin: 10px 10px;
  }
  .m-aside {
    font-size: 25px;
    background-color: #000;
  }
</style>