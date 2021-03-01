<template>
  <div>

    <div class="centered-title text-center"  style="margin-top: 10px">
      <h2 style="color: white">Register</h2>
      <div class="clear"></div>
      <em style="color: white">ColorBee welcome you to register！</em>
    </div>





    <div class="col-md-6 col-sm-6 offset-3" style="margin-top: -60px">
      <div class="row">
        <div  class="login-form bg-opacity-black-70">
          <div class="col-sm-12">
            <label for="username">用户名<abbr title="required" class="required">*</abbr></label>
            <p>
              <input type="text" name="username" id="username" class="form-controller col-sm-10" placeholder="UserName" v-model="model.username" >
              <span id="s_username" class="error col-sm-2"></span>
            </p>
          </div>
          <div class="col-sm-12">
            <label for="name">姓名<abbr title="required" class="required">*</abbr></label>
            <p>
              <input type="text" name="name" id="name" class="form-controller col-sm-10"  placeholder="Name" v-model="model.name">
              <span id="s_name" class="error col-sm-2"></span>
            </p>
          </div>




          <div class="col-sm-12">
            <label class="" for="password1">密码<abbr title="required" class="required">*</abbr></label>
            <p>
              <input type="password" value="" placeholder="password" id="Password1" name="password1" class="form-controller col-sm-10" v-model="model.password">
              <span id="s_password1" class="error col-sm-2"></span>
            </p>
          </div>

          <div class="col-sm-12" >
            <label class="" for="Password Confirm">密码确认 <abbr title="required" class="required">*</abbr></label>
            <p>
              <input type="password" value="" placeholder="Password" id="Password Confirm" name="password2" class="form-controller col-sm-10">
              <span id="s_password2" class="error col-sm-2"></span>
            </p>
          </div>

          <div class="col-sm-12" >
            <label class="" for="Password Confirm">头像 <abbr title="required" class="required">*</abbr></label>
            <el-form lable-width="120px" @submit.native.prevent="save">
              <el-form-item label="">
                <el-upload
                    class="avatar-uploader"
                    :action="$http.defaults.baseURL +'/upload'"

                    :show-file-list="false"
                    :on-success="afterUpload"
                >
                  <img v-if="model.avatar" :src="model.avatar" class="avatar ell">
                  <i v-else class="ell el-icon-plus avatar-uploader-icon" ></i>
                </el-upload>
              </el-form-item>
            </el-form>
          </div>

          <div class="col-sm-12">
            <input type="checkbox" value="forever" id="rememberme" name="rememberme">
            <label class="inline" for="rememberme">I agree <a href="#">Terms & Condition</a></label>
          </div>
          <div class="col-sm-12">
            <input type="submit" id="submit" value="Register" name="signup" class="theme-button marL0" @click="register()">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Register",
    data(){
      return{
        model:{}
      }
    },
    methods:{
      afterUpload(res){
        this.$set(this.model,'avatar',res.url)

      },
      async register(){

        let res
        res = await this.$http.post('rest/user',this.model)
        this.$message({
          type:'success',
          message:'注册成功'
        })
        this.$router.push('/login')
      }
    },

  }
</script>

<style scoped lang="scss">
  .avatar-uploader {
    img {
      width: 178px;
      height: 178px;
    }
    .ell{
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      padding: 10px;
      &:hover {
        border-color: #409EFF;
      }
    }

    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      border-radius: 5%;
      display: block;
    }
  }

</style>