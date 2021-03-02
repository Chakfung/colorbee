<template>
  <div class="">
    <h1>图片列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230">
      </el-table-column>
      <el-table-column prop="title" label="标题" width="120">
      </el-table-column>
      <el-table-column prop="photographer.name" label="摄影师" width="120">
      </el-table-column>
      <el-table-column prop="price" label="价格" width="120">
      </el-table-column>
      <el-table-column prop="intro" label="简介" width="120">
      </el-table-column>
      <el-table-column prop="parent.name" label="分类" width="120">
      </el-table-column>
      <el-table-column prop="img" label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.img[0].url" alt="" style="height: 3rem">
        </template>

      </el-table-column>

      <el-table-column
          fixed="right"
          label="操作"
          width="220">
        <template slot-scope="scope">

          <el-button type="primary" size="small" @click="$router.push(`/theme/edit/${scope.row._id}`)">编辑</el-button>
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
        const res = await this.$http.get('rest/theme')
        this.items = res.data
      },

      async remove(row) {
        this.$confirm(`是否删除博客"${row.title}", 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {

          const res = await this.$http.delete(`rest/theme/${row._id}`)
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



