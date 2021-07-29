<template>
  <div>
      <div class="blog">

        <div class="section-title">
          <i class="iconfont icon-shui" style="font-size: 25px;color: #007cc0;padding-right: 10px"></i>
          <h2>博客</h2>
          <p>本系统提供图库的销售.</p>
        </div>

        <div class="container">
          <div class="blog-item" v-if="items[0]" @click="blogDetail(items[0]._id)">
            <div class="img"
                 :style="{backgroundImage: 'url(' +items[0].cover + ')'}" >
            </div>
            <div class="default">
              {{items[0].title}}
            </div>
            <div class="bs-title">
              <i class="iconfont icon-eye"></i>
              {{items[0].introduction}}
              <span>2021-04-20 21:50:35</span>
            </div>
          </div>
          <div class="blog-item" v-if="items[1]" @click="blogDetail(items[1]._id)">
            <div class="img"
                 :style="{backgroundImage: 'url(' +items[1].cover + ')'}" >
            </div>
            <div class="default">
              {{items[0].title}}
            </div>
            <div class="bs-title">
              <i class="iconfont icon-eye"></i>
              {{items[1].title}}
              <span>2021-04-20 21:50:35</span>
            </div>
          </div>

        </div>

      </div>
  </div>
</template>

<script>
  export default {
    name: "BlogSection",
    data(){
      return {
        items:[]
      }
    },
    methods:{

      async fetch(){
        const res = await this.$http.get('rest/blog')
        this.items = res.data
      },
      blogDetail(id){
        console.log(id);
        this.$router.push(`/blogdetail/${id}`)
      }
    },
    created(){
      this.fetch()
    }

  }
</script>

<style lang="scss" scoped>
  .blog {
    margin: 0 auto;
    background: #f5f9fc;
    width: 100%;
    padding-top: 50px;


    .container {
      max-width: 1200px;
      height: 500px;
      display: flex;
      justify-content: space-between;


      .blog-item {
        border-radius: 5px;
        cursor: pointer;
        width: 48%;;
        height: 400px;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #f5f9fc;
        position: relative;
        .default {
          position: absolute;
          top: 380px;
          width: 280px;
          height: 60px;
          border-radius: 5px;
          background: #00b0a4;
          color: #fff;
          text-align: center;
          line-height: 58px;
          opacity: 1;
        }
        .bs-title {
          border-radius: 5px;
          position: absolute;
          left: 280px;
          top: 0;
          transform: translate(-50%, 0);
          background: rgba(0, 70, 120, 0);
          width: 100%;
          height: 0;
          opacity: 0;
          color: #00b0a4;
          font-size: 25px;
          font-family: "microsoft yahei";
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          i {
            margin-bottom: 10px;
            font-size: 35px;
          }
          span {
            margin-top: 10px;
            font-size: 18px;
          }
        }
        &:hover {
          .bs-title {
            height: 100%;
            transition: 0.3s ease-in-out;
            opacity: 1;
          }
          .img {
            filter: blur(3px);
          }
          .default {
            transition: 0.2s ease;
            opacity: 0;
          }
        }
        .img {
          border-radius: 5px;
          width: 100%;
          height: 400px;
          box-shadow: 0px 0px 20px #7083a8;
          background: no-repeat;
          background-size: 100%;

        }

        .text {
          padding: 15px;

          width: 100%;
          height: 100px;
          display: flex;

          .left {
            width: 60%;
            height: 100%;

          }

          .right {
            height: 100%;
            width: 40%;

            display: flex;
            justify-content: center;
            align-items: center;

            /*a {*/
            /*  background: #428bca;*/
            /*  color: white;*/
            /*  width: 160px;*/
            /*  height: 40px;*/
            /*  display: flex;*/
            /*  justify-content: center;*/
            /*  align-items: center;*/
            /*  border-radius: 10px;*/
            /*  position: absolute;*/


            /*  &:hover {*/
            /*    background: #346d9e;*/
            /*    transition: 0.2s all ease;*/
            /*    text-decoration: none;*/
            /*  }*/
            /*}*/

          }
        }


      }
    }
  }

</style>