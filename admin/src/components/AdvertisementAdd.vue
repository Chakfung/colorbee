<template>
  <div class="">
    <div class="head">{{id? '编辑广告':'新增广告'}}</div>
    <el-form lable-width="120px" @submit.native.prevent="save">
<!--      <el-form-item label="上级分类">-->
<!--        <el-select v-model="model.parent">-->
<!--          <el-option v-for="item in parents" :key="item._id" :label="item.class"></el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->


      <el-form-item label="名称" lable-width="120px">
        <el-input v-model="model.name" style="width:240px"></el-input>
      </el-form-item>
      <el-form-item label="标语1" lable-width="120px">
        <el-input v-model="model.slogan1" style="width:640px"></el-input>
      </el-form-item>
      <el-form-item label="标语2" lable-width="120px">
        <el-input v-model="model.slogan2" style="width:640px"></el-input>
      </el-form-item>

      <el-form-item label="图片">
        <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL +'/upload'"
            :headers="getAuthHeaders()"
            :show-file-list="false"
            :on-success="afterUpload"
        >
          <img v-if="model.img" :src="model.img" class="avatar ell">
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
    props:{
      id:{}
    },
    data() {
      return{
        model:{},

      }
    },
    methods:{
      afterUpload(res){
        this.$set(this.model,'img',res.url)

      },
      async save(){
        let res
        if(this.id){
          res = await this.$http.put(`rest/advertisement/${this.id}`,this.model)
        }else{
          res = await this.$http.post('rest/advertisement',this.model)
        }

        this.$router.push('/advertisement/list')
        this.$message({
          type:'success',
          message:'保存成功'
        })
      },

      async fetch(){

        const res = await this.$http.get(`rest/advertisement/${this.id}`)

        this.model = res.data
      },
      // async fetchParents(){
      //   const res = await this.$http.get(`rest/photo`)
      //   this.parents = res.data
      // },
    },

    created() {
      // this.fetchParents()
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

