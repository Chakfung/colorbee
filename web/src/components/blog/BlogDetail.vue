<template>
  <div class="frame">
    <div class="collect" @click="collectBlog(model._id)">收藏 <i class="iconfont icon-star"></i></div>
    <div class="main" v-if="model">
      <div class="title">
        {{model.title}}
      </div>
      <div class="intro">
        {{model.introduction}}
      </div>
      <div class="cover">
        <img :src="model.cover" alt="">
      </div>
      <vue-editor style="display: none;"></vue-editor>
      <div v-html="model.body" class="body ql-editor"></div>
    </div>
  </div>
</template>

<script>
  import { VueEditor } from "vue2-editor";
  export default {
    name: "BlogDetail",
    components:{

      VueEditor

    },
    props:{
      id:{}
    },
    data(){
      return {
        model: {},
        collect:{}
      }
    },
    methods:{
      async collectBlog() {
        if(!localStorage.user){
          this.$router.push('/login')
        }
        let res
        res = await this.$http.post('rest/collect_blogs',this.collect)

        console.log(res);
        this.$message({
          type:'success',
          message:'收藏博客成功'
        })
      },


      async fetch(){

        const res = await this.$http.get(`rest/blog/${this.id}`)
        this.model = res.data

        this.collect.blog = res.data._id

        this.collect.user = localStorage.user
      },
    },
    created(){
      this.fetch()
    }
  }
</script>

<style scoped lang="scss">
  .frame {
    position: absolute;
    top: 70px;
    width: 100%;
    background-color: #eaeaea;
    display: flex;
    justify-content: center;

    .collect{
      position: fixed;
      width: 50px;
      height: 90px;
      background-color: #428bca;
      border-radius: 5px;
      color: #fff;
      padding: 14px;
      left: 5%;
      top: 40%;
      display: flex;
      justify-content: center;
      align-content: space-around;
      font-size: 20px;
      i {
        position: absolute;
        top: 65px;
      }
      &:hover {
        background-color: #2d5e8a;
      }
    }

    .main {
      width: 1000px;
      background-color: #f8f8f8;
      min-height: 1000px;
      display: flex;
      flex-direction: column;
      .title {
        text-align: center;
        margin-top: 20px;
        font-size: 35px;
        color: #2774c4;

      }
      .intro {
        margin-top: 15px;
        text-align: center;
      }
      .cover {
        margin-top: 20px;
        img {
          width: 1000px;
        }
      }
      .body{
        width: 100%;
      }
    }
  }

</style>