<template>
  <div class="">
    <h1>博客列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230">
      </el-table-column>
      <el-table-column prop="cover" label="封面" width="240">
        <template slot-scope="scope">
          <img :src="scope.row.cover" alt="" style="height: 3rem">
        </template>
      </el-table-column>
      <el-table-column prop="class.name" label="分类" width="200">
      </el-table-column>
      <el-table-column prop="tag[1].name" label="标签" width="200">
      </el-table-column>
      <el-table-column prop="title" label="标题" width="200">
      </el-table-column>
      <el-table-column prop="introduction" label="简介" width="200">
      </el-table-column>
      <el-table-column prop="author.name" label="作者" width="180">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="220">
        <template slot-scope="scope">

          <el-button type="primary" size="small" @click="$router.push(`/blog/edit/${scope.row._id}`)">编辑</el-button>
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
        const res = await this.$http.get('rest/blog')
        this.items = res.data
      },

      async remove(row) {
        this.$confirm(`是否删除博客"${row.title}", 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {

          const res = await this.$http.delete(`rest/blog/${row._id}`)
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



