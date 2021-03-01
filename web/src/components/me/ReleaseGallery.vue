<template>
  <div class="release">
    <div class="panel-title">发布图片</div>
    <el-form lable-width="120px" @submit.native.prevent="save">
      <!--      <el-form-item label="上级分类">-->
      <!--        <el-select v-model="model.parent">-->
      <!--          <el-option v-for="item in parents" :key="item._id" :label="item.class"></el-option>-->
      <!--        </el-select>-->
      <!--      </el-form-item>-->
      <el-form-item label="分类" >

        <el-select v-model="model.class" style="margin-left: 12px">
          <el-option v-for="item in parents" :key="item._id"
                     :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="标题" label-width="40px">
        <el-input v-model="model.title"></el-input>
      </el-form-item>

      <el-form-item label="简介" label-width="40px">
        <el-input v-model="model.intro"></el-input>
      </el-form-item>

      <el-form-item label="价格" label-width="40px">
        <el-input v-model="model.price"></el-input>
      </el-form-item>



      <el-form-item label="图片">
        <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL +'/upload'"

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
    name: "ReleaseGallery",
   data() {
    return{
      model:{},
      parents:[]

    }
  },
    methods:{
      async fetchParents(){
        const res = await this.$http.get(`rest/category`)
        this.parents = res.data.filter(obj=>{
          // console.log(obj);

          return  obj.hasOwnProperty('parent') && obj.parent.name === '图库分类'
        })

      },



      afterUpload(res){
        this.$set(this.model,'img',res.url)

      },
      async save(){
        let res
        if(this.id){
          res = await this.$http.put(`rest/photo/${this.id}`,this.model)
        }else{
          res = await this.$http.post('rest/photo',this.model)
        }

        this.$router.push('mygallery')
        this.$message({
          type:'success',
          message:'保存成功'
        })
      },

    },
    created() {
      this.fetchParents()
    }

  }
</script>

<style scoped lang="scss">
  .release {
    padding: 15px;
    border: 1px #d9d9d9 solid;
    .panel-title {
      width: 100%;
      border-bottom: 1px #d9d9d9 solid;
      margin-bottom: 10px;
      color:#ff5f5f;
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
    border-radius: 5%;
    display: block;
  }
</style>