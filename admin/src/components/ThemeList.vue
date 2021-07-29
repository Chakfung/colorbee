<template>
  <div class="">
    <div class="head">主题列表</div>
    <el-table :data="showItems">
      <el-table-column prop="_id" label="ID" width="230">
      </el-table-column>
      <el-table-column prop="title" label="标题" width="120">
      </el-table-column>
      <el-table-column prop="date" label="发布日期" width="120">
      </el-table-column>
      <el-table-column prop="photographer.name" label="摄影师" width="120">
      </el-table-column>
      <el-table-column prop="price" label="价格" width="120">
      </el-table-column>
      <el-table-column prop="intro" label="简介" width="520">
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
        showItems: []
      }
    },

    methods:{
      async fetch(){
        const res = await this.$http.get('rest/theme')
        this.items = res.data
        this.showItem()
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

<style lang="scss" scoped>
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
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>



