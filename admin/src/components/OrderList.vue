<template>
  <div class="">
    <div class="head">订单列表</div>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230">
      </el-table-column>
      <el-table-column prop="theme.title" label="主题" width="230">
      </el-table-column>
      <el-table-column prop="name" label="拍摄者" width="120">
      </el-table-column>
      <el-table-column prop="date" label="日期" width="200">
      </el-table-column>
      <el-table-column prop="tel" label="电话" width="140">
      </el-table-column>
      <el-table-column prop="info" label="备注" width="140">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="240">
      </el-table-column>

      <el-table-column
          fixed="right"
          label="操作"
          width="220">
        <template slot-scope="scope">

          <el-button type="primary" size="small" @click="$router.push(`/advertisement/edit/${scope.row._id}`)">编辑</el-button>
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
        const res = await this.$http.get('rest/appoint_orders')
        this.items = res.data
      },

      async remove(row) {
        console.log(row);
        this.$confirm(`是否删除订单"${row.name}", 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {

          const res = await this.$http.delete(`rest/appoint_orders/${row._id}`)
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
  }
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