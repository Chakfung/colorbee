<template>
  <div>
    <div class="centered-title text-center"  style="margin-top: 50px">
      <h2 style="color: white">Login</h2>
      <div class="clear"></div>
      <em style="color: white">ColorBee welcome you to login in！</em>
    </div>

    <div class="clear"></div>

    <div class=" elements-tab-area col-md-12 ptb-0 choice-bottom">
      <button class="btn-skin mr-60">顾客</button>
      <button class="btn-skin ml-60">摄影师</button>
    </div>

    <div class="col-md-6 col-sm-6 offset-3">
      <div class="row">
        <div  class="login-form bg-opacity-black-70">
          <p class="form-row pd-right mt-50 input-size">
            <label for="username" style="color: white">Username or email <span class="required">*</span></label>
            <input type="text" name="username" id="username" class="form-controller" v-model="model.username">
          </p>
          <p class="form-row pd-left input-size">
            <label for="password" style="color: white">Passwords <span class="required">*</span></label>
            <input type="password" name="password" id="password" class="form-controller" v-model="model.password">
          </p>
          <p class="form-row ">
            <input type="submit" value="Login" name="login" class="theme-button marL0" @click="login()">
            <label class="inline" for="rememberme">
              <input type="checkbox" value="forever" id="rememberme" name="rememberme"  style="color: white"> Remember me
            </label>
          </p>
          <p class="lost_password mb-60">
            <a href="#" style="color: white" @click="goRegister()">want to register?</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginCard",

    data(){
      return{
        model:{}
      }
    },
    methods:{
      goRegister(){
        this.$router.push('register')
      },


      async login() {

        const res = await this.$http.post('login',this.model)
        // sessionStorage.token = res.data.token

        localStorage.token = res.data.token
        localStorage.user = res.data.user._id

        this.$router.push('/')
        this.$message({
          type:'success',
          message:'登陆成功'
        })

        //   if(this.username=='admin'){
        //     this.$message({
        //       type: "success",
        //       message: "管理员登陆成功"
        //     });
        //     this.$router.push('/admin')
        //   }
        //   else{
        //     let that = this;
        //     that.$axios.post("/login", {
        //       username:that.username,
        //       password: that.password,
        //
        //     }).then(res =>{
        //       if (res.data.status == 1) {
        //         that.$message({
        //           type: "success",
        //           message: "登陆成功"
        //         });
        //         localStorage.setItem('username',that.username)
        //         that.$router.push('/home')
        //       }
        //       else{
        //         that.$message({
        //           type: "fail",
        //           message: "登陆失败"
        //         });
        //       }
        //     })
        //   }
        //
        // }

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

<style scoped>

</style>