<template>
  <div class="release">
    <div class="panel-title">用户信息</div>
    <el-form lable-width="120px" @submit.native.prevent="save">
      <!--      <el-form-item label="上级分类">-->
      <!--        <el-select v-model="model.parent">-->
      <!--          <el-option v-for="item in parents" :key="item._id" :label="item.class"></el-option>-->
      <!--        </el-select>-->
      <!--      </el-form-item>-->


      <el-form-item label="用户名" label-width="55px">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="姓名" label-width="40px">
        <el-input v-model="model.name"></el-input>
      </el-form-item>


      <el-form-item label="密码" label-width="40px">
        <el-input v-model="model.password" type="password"></el-input>
      </el-form-item>



      <el-form-item label="图片">
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



      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "CountInfo",
    data() {
      return{
        model:{},

        user:{}
      }
    },
    methods:{
      async fetchUser(){
        const res = await this.$http.get(`rest/user/${this.user}`)
        this.model = res.data

      },



      afterUpload(res){
        this.$set(this.model,'avatar',res.url)

      },
      async save(){
        let res
        res = await this.$http.put(`rest/user/${this.user}`,this.model)


        this.$message({
          type:'success',
          message:'修改成功'
        })
      },

    },
    created() {
      this.user = localStorage.user
      this.fetchUser()
    }
  }
</script>

<style scoped lang="scss">
  .release {
    padding: 15px;
    .panel-title {
      width: 100%;
      border-bottom: 1px #d9d9d9 solid;
      margin-bottom: 10px;
      color:#259;
      font-size: 18px;
      font-family: 'PingFangSC','helvetica neue','hiragino sans gb','arial','microsoft yahei ui','microsoft yahei','simsun','sans-serif'!important;
      font-weight: bold;
    }
  }


  .ell{
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    padding: 10px;
  }
  .ell:hover {
    border-color: #409EFF;
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
    height: 178px;
    border-radius: 5%;
    display: block;
  }
</style>