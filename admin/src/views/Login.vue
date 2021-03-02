<template>
  <div class="login-container">
    <div class="bg">
      <div class="stars"></div>
      <el-card header="-请登陆-" class="login-card">

        <el-form @submit.native.prevent="login">
          <el-form-item label="用户名">
            <el-input v-model="model.username" ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="model.password" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit">登陆</el-button>
          </el-form-item>


        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'




  $(document).ready(function(){
    var stars=2800;  /*星星的密集程度，数字越大越多*/
    var $stars=$(".stars");
    var r=800;   /*星星的看起来的距离,值越大越远,可自行调制到自己满意的样子*/
    for(var i=0;i<stars;i++){
      var $star=$("<div/>").addClass("star");
      $stars.append($star);
    }
    $(".star").each(function(){
      var cur=$(this);
      var s=0.2+(Math.random()*1);
      var curR=r+(Math.random()*300);
      cur.css({
        transformOrigin:"0 0 "+curR+"px",
        transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")",
        width: "2px",
        height: "2px",
        background: "#F7F7B6",
        position: "absolute",
        top: "0",
        left: "0",

      })
    })
  })
  export default {
    name: "Login",
    data(){
      return{
        model:{}
      }
    },
    methods:{
      async login(){
        const res = await this.$http.post('login',this.model)
        // sessionStorage.token = res.data.token
        localStorage.token = res.data.token
        this.$router.push('/')
        this.$message({
          type:'success',
          message:'登陆成功'
        })
      }
    },
    mounted() {
      this.$message({
        type:'warning',
        message:'请先登录'
      })
    }
  }
</script>

<style scoped lang="scss">
  .login-card {
    width:28rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: linear-gradient(45deg, rgba(109, 210, 255, 0.68), rgba(255, 220, 194, 0.81));
    color: rgb(255, 255, 255);
    font-size: 20px;
  }





  .login-container {

    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;


  }

  .bg {
    background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #75517d, #1b2947);
    background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
    background-attachment: fixed;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  @keyframes rotate {
    0% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
    }
    100% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
    }
  }
  .stars {
    transform: perspective(500px);
    transform-style: preserve-3d;
    position: absolute;
    bottom: 0;
    perspective-origin: 50% 100%;
    left: 50%;
    animation: rotate 90s infinite linear;
  }

  /*.star {*/
  /*  width: 2px;*/
  /*  height: 2px;*/
  /*  background: #F7F7B6;*/
  /*  position: absolute;*/
  /*  top: 0;*/
  /*  left: 0;*/
  /*  transform-origin: 0 0 -300px;*/
  /*  transform: translate3d(0, 0, -300px);*/
  /*  backface-visibility: hidden;*/
  /*}*/
</style>