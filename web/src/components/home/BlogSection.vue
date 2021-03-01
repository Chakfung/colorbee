<template>
  <div>
    <section>
      <div class="blog">

        <div class="section-title">
          <h2>博客</h2>
          <p>本系统提供图库的销售.</p>
        </div>

        <div class="container">
          <div class="blog-item" v-if="items[0]">
            <div class="img"
                 :style="{backgroundImage: 'url(' +items[0].cover + ')'}" ></div>
            <div class="text">
              <div class="left">
                <h3><a href="#">{{items[0].title}}</a></h3>
                <span class="f-left">2019-04-20 21:50:35</span>
              </div>
              <div class="right">
                <a @click="blogDetail(item[0]._id)">Read More </a>
              </div>


            </div>

          </div>

          <div class="blog-item"  v-if="items[1]">
            <div class="img"
                 :style="{backgroundImage: 'url(' +items[1].cover + ')'}" v-if="items[1]"></div>
            <div class="text">
              <div class="left">
                <h3><a href="#">{{items[1].title}}</a></h3>
                <span class="f-left">2019-04-20 21:50:35</span>
              </div>
              <div class="right">
                <a @click="blogDetail(item[1]._id)">Read More </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
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

    max-width: 1200px;


    .container {
      width: 100%;
      height: 500px;
      display: flex;
      justify-content: space-between;


      .blog-item {
        width: 48%;;
        height: 400px;

        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #f5f9fc;

        .img {
          width: 100%;
          height: 300px;
          box-shadow: 0px 0px 20px #7083a8;
          background: no-repeat;
          background-size: 100%;

          &:hover {
            box-shadow: 0px 0px 40px #7083a8;;
            transition: 0.2s ease all;
            background-size: 105%;

          }
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

            a {
              background: #428bca;
              color: white;
              width: 160px;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 10px;
              position: absolute;


              &:hover {
                background: #346d9e;
                transition: 0.2s all ease;
                text-decoration: none;
              }
            }

          }
        }


      }
    }
  }

</style>