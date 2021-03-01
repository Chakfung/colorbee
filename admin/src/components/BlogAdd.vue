<template>
  <div class="">
    <h1>{{id? '编辑博客':'新增博客'}}</h1>
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


      <el-form-item label="作者">
        <el-select v-model="model.author">
          <el-option v-for="item in users" :key="item._id"
                     :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>


      <!--      npm install &#45;&#45;save vue2-editor-->
      <el-form-item label="详情" label-width="40px">
        <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded" ></vue-editor>

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

      <el-form-item label="封面">
        <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL +'/upload'"
            :headers="getAuthHeaders()"
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
    props:{
      id:{}
    },
    data() {
      return{
        model:{},
        parents:[],
        users:[],
        classes:[],
        tags:[]
      }
    },
    methods:{
      async fetchParents(){
        const res = await this.$http.get(`rest/category`)
        this.parents = res.data.filter(obj=>{
          // console.log(obj);

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
        let res
        if(this.id){
          res = await this.$http.put(`rest/blog/${this.id}`,this.model)
        }else{
          res = await this.$http.post('rest/blog',this.model)
        }

        this.$router.push('/blog/list')
        this.$message({
          type:'success',
          message:'保存成功'
        })
      },

      async fetch(){
        const res = await this.$http.get(`rest/blog/${this.id}`)
        this.model = res.data
      },
      async fetchUser(){
        const res = await this.$http.get(`rest/user`)
        this.users = res.data
      },
      // async fetchParents(){
      //   const res = await this.$http.get(`rest/photo`)
      //   this.parents = res.data
      // },
    },

    created() {
      this.fetchTags()
      this.fetchUser()
      this.fetchParents()
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

