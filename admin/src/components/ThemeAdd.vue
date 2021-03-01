<template>
  <div class="">
    <h1>{{id? '编辑主题':'新增主题'}}</h1>
    <el-form lable-width="120px" @submit.native.prevent="save">
<!--      <el-form-item label="上级分类">-->
<!--        <el-select v-model="model.parent">-->
<!--          <el-option v-for="item in parents" :key="item._id" :label="item.class"></el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->
      <el-form-item label="标题" label-width="40px">
        <el-input v-model="model.title"></el-input>
      </el-form-item>



      <el-form-item label="简介" label-width="40px">
        <el-input v-model="model.intro"></el-input>
      </el-form-item>

      <el-form-item label="价格" label-width="40px">
        <el-input v-model="model.price"></el-input>
      </el-form-item>

      <el-form-item label="摄影师">
        <el-select v-model="model.photographer">
          <el-option v-for="item in photographers" :key="item._id"
                     :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="分类">

        <el-select v-model="model.parent"  style="margin-left: 12px">
          <el-option v-for="item in parents" :key="item._id"
                     :label="item.name" :value="item._id"></el-option>
        </el-select>

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

      <el-form-item label="图片">

        <el-upload
            class="upload-demo"
            :action="$http.defaults.baseURL +'/upload'"
            :on-preview="handlePreview"
            :headers="getAuthHeaders()"
            :on-remove="handleRemove"
            :file-list="this.img"
            :on-success="afterUpload"
            list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>



<!--      npm install &#45;&#45;save vue2-editor-->
      <el-form-item label="详情" label-width="40px">
        <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"  ></vue-editor>

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
    props:{
      id:{}
    },
    data() {
      return{
        model:{},
        parents:[],
        photographers: [],
        img:[],
        tags:[]
      }
    },
    methods:{
      afterUpload(res){

        this.img.push({name:res.originalname,url:res.url})

      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
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

      async save(){
        this.$set(this.model,'img',this.img)
        let res
        if(this.id){
          res = await this.$http.put(`rest/theme/${this.id}`,this.model)
        }else{
          res = await this.$http.post('rest/theme',this.model)
        }

        this.$router.push('/theme/list')
        this.$message({
          type:'success',
          message:'保存成功'
        })
      },

      async fetch(){
        const res = await this.$http.get(`rest/theme/${this.id}`)
        this.model = res.data
        this.img = res.data.img
      },
      async fetchPhotographers(){
        const res = await this.$http.get(`rest/photographer`)
        this.photographers = res.data
      },
      async fetchTags(){
        const res = await this.$http.get(`rest/category`)
        this.tags = res.data.filter(obj=>{
          // console.log(obj);

          return  obj.hasOwnProperty('parent') && obj.parent.name === '标签分类'
        })
      },
      async fetchParents(){
        const res = await this.$http.get(`rest/category`)
        this.parents = res.data.filter(obj=>{
          // console.log(obj);

          return  obj.hasOwnProperty('parent') && obj.parent.name === '主题分类'
        })
      },
    },

    created() {
      this.fetchTags()
      this.fetchParents()
      this.fetchPhotographers()
      this.id && this.fetch()
    }
  };
</script>

<style scoped>
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

