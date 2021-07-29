<template>
  <div class="release">
    <div class="panel-title">发布博客</div>
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
        <el-input v-model="model.introduction"></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-select v-model="model.tag" multiple>
          <el-option
              v-for="item of tags"
              :key="item._id"
              :label="item.name"
              :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <!--      npm install &#45;&#45;save vue2-editor-->
      <el-form-item label="详情" label-width="40px">
        <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded" ></vue-editor>

      </el-form-item>


      <el-form-item label="封面">
        <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL +'/upload'"

            :show-file-list="false"
            :on-success="afterUpload"
        >
          <img v-if="model.cover" :src="model.cover" class="avatar ell">
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
  import { VueEditor } from "vue2-editor";
  export default {
    components:{
      VueEditor
    },
    name: "ReleaseBlog",
    data() {
      return{
        model:{},
        parents:[],
        user:{},
        tags:{}
      }
    },
    methods:{
      async fetchParents(){
        const res = await this.$http.get(`rest/category`)
        this.parents = res.data.filter(obj=>{
        return  obj.hasOwnProperty('parent') && obj.parent.name === '博客分类'
        })

      },
      async fetchTags(){
        const res = await this.$http.get(`rest/category`)
        this.tags = res.data.filter(obj=>{
          // console.log(obj);

          return  obj.hasOwnProperty('parent') && obj.parent.name === '标签分类'
        })
      },
      afterUpload(res){
        this.$set(this.model,'cover',res.url)

      },
      async save(){
        let res
        if(this.id){
          res = await this.$http.put(`rest/blog/${this.id}`,this.model)
        }else{
          res = await this.$http.post('rest/blog',this.model)
        }

        this.$router.push('myblog')
        this.$message({
          type:'success',
          message:'保存成功'
        })
      },
      async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
        // An example of using FormData
        // NOTE: Your key could be different such as:
        // formData.append('file', file)

        const formData = new FormData();
        formData.append("file", file);

        const res = await this.$http.post('upload',formData)
        Editor.insertEmbed(cursorLocation, "image", res.data.url);
        resetUploader();

      },
    },
    created() {
      this.fetchTags()
      this.model.author = localStorage.user
      this.fetchParents()
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
      color: #259;
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