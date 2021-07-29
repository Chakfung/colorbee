<template>
  <div class="">
    <div class="head">{{id? '编辑摄影师':'新增摄影师'}}</div>
    <el-form lable-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称" label-width="60px">
        <el-input v-model="model.name" style="width:240px"></el-input>
      </el-form-item>

      <el-form-item label="电话" label-width="60px">
      <el-input v-model="model.tel" style="width:240px"></el-input>
    </el-form-item>

      <el-form-item label="微信" label-width="60px">
        <el-input v-model="model.wechat" style="width:240px"></el-input>
      </el-form-item>

      <el-form-item label="头像" label-width="60px">
        <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL +'/upload'"
            :headers="getAuthHeaders()"
            :show-file-list="false"
            :on-success="afterUpload"
        >
          <img v-if="model.avatar" :src="model.avatar" class="avatar ell">
          <i v-else class="ell el-icon-plus avatar-uploader-icon" ></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="用户名" label-width="60px">
        <el-input v-model="model.username" style="width:240px"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="60px">
        <el-input v-model="model.password" style="width:240px"></el-input>
      </el-form-item>
      <el-form-item label="类型" label-width="60px">
        <el-input v-model="model.type" style="width:240px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    props:{
      id:{}
    },
    data() {
      return{
        model:{}
      }
    },
    methods:{
      afterUpload(res){
        this.$set(this.model,'avatar',res.url)

      },
      async save(){
        let res
        if(this.id){
          res = await this.$http.put(`rest/photographer/${this.id}`,this.model)
        }else{
          res = await this.$http.post('rest/photographer',this.model)
        }

        this.$router.push('/photographer/list')
        this.$message({
          type:'success',
          message:'保存成功'
        })
      },

      async fetch(){
        const res = await this.$http.get(`rest/photographer/${this.id}`)
        this.model = res.data
      }
    },

    created() {
      this.id && this.fetch()
    }
  };
</script>

<style scoped>
  .head {
    border-left: 5px solid #09b4c5;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    background: #f2f2f2;
    font-family: "microsoft yahei";
    font-weight: 600;
    color: #919191;
    margin-bottom: 15px;
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
    border-radius: 5%;
    display: block;
  }
</style>

