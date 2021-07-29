<template>
  <div class="">
    <div class="head">图片列表</div>
    <el-table :data="showItems">
      <el-table-column prop="_id" label="ID" width="230">
      </el-table-column>
      <el-table-column prop="class.name" label="分类" width="140">
      </el-table-column>
      <el-table-column prop="name" label="名称" width="140">
      </el-table-column>
      <el-table-column prop="intro" label="简介" width="320">
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

    <div class="block">
      <el-pagination
          layout="prev, pager, next"
          :total="items.length"
          :page-size="pageSize"
          :current-page="pageIndex"
          @current-change="changPage"
          @prev-click="pre"
          @next-click="next"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        items:[],
        pageIndex: 1,
        pageSize: 8,
        showItems: [],

      }
    },

    methods:{
      async fetch(){
        const res = await this.$http.get('rest/photo')
        this.items = res.data
        this.showItem()
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
      },
      changPage (index) {
        this.pageIndex = index
      },
      pre(){
        this.pageIndex--
      },
      next() {
        this.pageIndex++
      },
      showItem () {
        this.showItems = this.items.filter((item, inerindex) => {
          return inerindex >= 0 + this.pageSize * (this.pageIndex - 1) && inerindex < this.pageIndex * this.pageSize
        })
      },

    },
    watch: {
      pageIndex () {
        this.showItem()
      }
    },
    created(){
      this.fetch()
    },
    mounted () {
    }
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



