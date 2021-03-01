<template>
  <div class="">
    <h1>{{id? '编辑分类':'新增分类'}}</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option v-for="item in parents" :key="item._id"
                     :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
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

</style>

