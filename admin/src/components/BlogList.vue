<template>
  <div class="">
    <div class="head">博客列表</div>
    <el-table :data="showItems">
      <el-table-column prop="_id" label="ID" width="100">
      </el-table-column>
      <el-table-column prop="cover" label="封面" width="180">
        <template slot-scope="scope">
          <img :src="scope.row.cover" alt="" style="height: 100px">
        </template>
      </el-table-column>
      <el-table-column prop="class.name" label="分类" width="120">
      </el-table-column>
      <el-table-column prop="tag[1].name" label="标签" width="120">
      </el-table-column>
      <el-table-column prop="author.name" label="作者" width="180">
      </el-table-column>
      <el-table-column prop="title" label="标题" width="200">
      </el-table-column>
      <el-table-column prop="introduction" label="简介" width="400">
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
        pageSize: 5,
        showItems: []
      }
    },

    methods:{
      async fetch(){
        const res = await this.$http.get('rest/blog')
        this.items = res.data
        this.showItem()
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




