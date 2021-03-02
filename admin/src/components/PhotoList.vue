<template>
  <div class="">
    <h1>图片列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230">
      </el-table-column>
      <el-table-column prop="class.name" label="分类" width="140">
      </el-table-column>
      <el-table-column prop="name" label="名称" width="120">
      </el-table-column>
      <el-table-column prop="intro" label="简介" width="120">
      </el-table-column>
      <el-table-column prop="user.name" label="用户" width="120">
      </el-table-column>
      <el-table-column prop="price" label="价格" width="120">
      </el-table-column>

      <el-table-column prop="img" label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" style="height: 3rem">
        </template>
      </el-table-column>

      <el-table-column
          fixed="right"
          label="操作"
          width="220">
        <template slot-scope="scope">

          <el-button type="primary" size="small" @click="$router.push(`/photo/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="warning" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        items:[]
      }
    },

    methods:{
      async fetch(){
        const res = await this.$http.get('rest/photo')
        this.items = res.data
      },

      async remove(row) {
        console.log(row);
        this.$confirm(`是否删除图片"${row.name}", 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {

          const res = await this.$http.delete(`rest/photo/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        })
      }
    },
    created(){
      this.fetch()

    },

  };
</script>

<style scoped>

</style>



