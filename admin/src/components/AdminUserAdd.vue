<template>
  <div class="">
    <h1>{{id? '编辑管理员':'新增管理员'}}</h1>
    <div  class="m-content">
      <el-form lable-width="120px" @submit.native.prevent="save">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type='password' v-model="model.password"></el-input>
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
        model:{}
      }
    },
    methods:{
      async save(){
        let res
        if(this.id){
          res = await this.$http.put(`rest/admin_users/${this.id}`,this.model)
        }else{
          res = await this.$http.post('rest/admin_users',this.model)
        }

        this.$router.push('/admin_users/list')
        this.$message({
          type:'success',
          message:'保存成功'
        })
      },

      async fetch(){
        const res = await this.$http.get(`rest/admin_users/${this.id}`)
        this.model = res.data
      }
    },

    created() {
      this.id && this.fetch()
    }
  };
</script>

<style scoped>
  .m-content {
    padding-top: 20px;
    border-top: 1px #ece8e5 solid;

  }
</style>

