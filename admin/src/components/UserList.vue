<template>
  <div class="">
    <div class="head">用户列表</div>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="140">
      </el-table-column>

      <el-table-column prop="img" label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt="" style="height: 60px">
        </template>
      </el-table-column>

      <el-table-column prop="username" label="用户名" width="120">
      </el-table-column>
      <el-table-column prop="type" label="类型">
      </el-table-column>

      <el-table-column
          fixed="right"
          label="操作"
          width="220">
        <template slot-scope="scope">

          <el-button type="primary" size="small" @click="$router.push(`/user/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="warning" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: []
      }
    },

    methods: {
      async fetch() {
        const res = await this.$http.get('rest/user')
        this.items = res.data
      },

      async remove(row) {
        this.$confirm(`是否删除用户"${row.name}", 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          const res = await this.$http.delete(`rest/user/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        })
      }
    },
    created() {
      this.fetch()

    },

  };
</script>
<style scoped lang="scss">
  .head {
    border-left: 5px solid #09b4c5;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    background: #f2f2f2;
    font-family: "microsoft yahei";
    font-weight: 600;
    color: #919191;
  }
  .block {
    position: absolute;
    bottom: 40px;
    left: 50% ;
    transform: translate(-50%, 0);
  }
</style>





