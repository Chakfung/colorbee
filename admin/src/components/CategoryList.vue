<template>
  <div class="">
    <div class="head">分类列表</div>
    <el-table :data="showItems">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="parent.name" label="上级分类"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
              type="text"
              size="small"
              @click="$router.push(`/category/add/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
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
        pageSize: 12,
        showItems: []
      }
    },

    methods:{
      async fetch() {
        const res = await this.$http.get("rest/category");
        this.items = res.data;
        this.showItem()
      },
      remove(row) {
        this.$confirm(`是否确定要删除分类 "${row.name}"`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(async () => {
          const res = await this.$http.delete(`rest/category/${row._id}`);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.fetch();
        });
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


