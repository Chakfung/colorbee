<template>
  <div class="">
    <h1>{{id? '编辑图片':'新增图片'}}</h1>
    <div  class="m-content">
      <el-form lable-width="120px" @submit.native.prevent="save">
  <!--      <el-form-item label="上级分类">-->
  <!--        <el-select v-model="model.parent">-->
  <!--          <el-option v-for="item in parents" :key="item._id" :label="item.class"></el-option>-->
  <!--        </el-select>-->
  <!--      </el-form-item>-->

        <el-form-item label="名称" label-width="40px" class="item-flex">

          <el-input v-model="model.name"></el-input>
        </el-form-item>

        <el-form-item label="简介" label-width="40px" class="item-flex">

          <el-input v-model="model.intro"></el-input>
        </el-form-item>

        <el-form-item label="价格" label-width="40px" class="item-flex">

          <el-input v-model="model.price"> </el-input>
        </el-form-item>


        <el-form-item label="分类" >

          <el-select v-model="model.class" style="margin-left: 12px">
            <el-option v-for="item in parents" :key="item._id"
                       :label="item.name" :value="item._id"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="摄影师">
          <el-select v-model="model.photographer">
            <el-option v-for="item in photographers" :key="item._id"
                       :label="item.name" :value="item._id"></el-option>
          </el-select>
        </el-form-item>

<!--        <div class="main-flex">-->


<!--        </div>-->

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

        photographers: [],
        parents:[]
      }
    },
    methods:{
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

        this.$router.push('/photo/list')
        this.$message({
          type:'success',
          message:'保存成功'
        })
      },

      async fetch(){
        const res = await this.$http.get(`rest/photo/${this.id}`)
        this.model = res.data
      },
      // async fetchParents(){
      //   const res = await this.$http.get(`rest/photo`)
      //   this.parents = res.data
      // },
      async fetchParents(){
        const res = await this.$http.get(`rest/category`)
        this.parents = res.data.filter(obj=>{
          // console.log(obj);

          return  obj.hasOwnProperty('parent') && obj.parent.name === '图库分类'
        })

      },



      async fetchPhotographers(){
        const res = await this.$http.get(`rest/user`)
        this.photographers = res.data
      },
    },

    created() {
      this.fetchParents()
      this.fetchPhotographers()
      this.id && this.fetch()
    }
  };
</script>

<style scoped>
  /*.m-dolalr {*/
  /*  position: absolute;*/
  /*  z-index: 999;*/
  /*  padding: 0 10px;*/
  /*  border-right: 1px #dcdfe6 solid;*/
  /*  color: #707276;*/
  /*  margin-right: 10px;*/
  /*}*/
  /*.m-input {*/
  /*  padding-left: 10px;*/
  /*  margin-left: 0px;*/
  /*}*/
  .main-flex{
    display: flex;
  }
  .item-flex {
    flex: 1;
    padding-right: 100px;
    width: 40%;
    justify-content: space-between;
  }
  .m-content {
    border-top: 1px #ece8e5 solid;
    padding-top: 20px;

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

