<template>
  <div class="">
    <div class="head">{{id? '编辑分类':'新增分类'}}</div>
    <el-form label-width="70px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option v-for="item in parents" :key="item._id"
                     :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name" style="width: 220px"></el-input>
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
        model:{

        },
        parents: [],
      }
    },
    methods:{
      async save(){
        let res
        if (this.id) {
          res = await this.$http.put(`rest/category/${this.id}`, this.model)
        } else {
          res = await this.$http.post('rest/category', this.model)
        }
        this.$router.push('/category/list')
        this.$message({
          type: 'success',
          message: '保存成功'
        })
      },
      async fetch(){
        const res = await this.$http.get(`rest/category/${this.id}`)
        this.model = res.data
      },
      async fetchParents(){
        const res = await this.$http.get(`rest/category`)
        this.parents = res.data.filter(obj=>{
          // console.log(obj);

          return  obj.name.endsWith("分类")
        })
      },


    },

    created() {
      this.fetchParents()
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
</style>

