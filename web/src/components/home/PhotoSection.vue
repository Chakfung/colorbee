<template>
  <div>
    <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="section-title">
          <i class="iconfont icon-fire" style="font-size: 25px;color: red;padding-right: 10px"></i>
          <h2>图库</h2>
          <p>本系统提供图库的销售.</p>
        </div>

        <div class="photo">
          <div class="photo-item first">
            <a @click="classGallery('人物肖像')">
              <div class="img" style=" background-image: url(https://s1.tuchong.com/content-image/202101/bebff324eecf12c62fe6867d501b035f.jpg);"></div>
              <div class="info">
                <span class="info-text">人物肖像</span>
                <i class="iconfont icon-eye"></i>
              </div>
            </a>
          </div>
          <div class="wrap">
            <div class="photo-item second">
              <a @click="classGallery('壮美风光')">
                <div class="img" style=" background-image: url(https://s1.tuchong.com/content-image/202101/2bbbbb3649e9f0d6039dd5667bf2a723.jpg);"></div>
                <div class="info">
                  <span class="info-text">壮美风光</span>
                  <i class="iconfont icon-eye"></i>
                </div>
              </a>
            </div>
            <div class="photo-item third">
              <a @click="classGallery('艺术创作')">
                <div class="img" style=" background-image: url(https://s1.tuchong.com/content-image/202101/871b6975344150a11a851d91a5f5c1df.jpg);"></div>
                <div class="info">
                  <span class="info-text">艺术创作</span>
                  <i class="iconfont icon-eye"></i>
                </div>
              </a>
            </div>
            <div class="photo-item fourth">
              <a @click="classGallery('设计素材')">
                <div class="img" style=" background-image: url(https://s1.tuchong.com/content-image/202101/4aff0e281f3cc567933207addc8d859f.jpg);"></div>
                <div class="info">
                  <span class="info-text">设计素材</span>
                  <i class="iconfont icon-eye"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="photo-item">
            <a >
              <div class="img" style=" background-image: url(https://s1.tuchong.com/content-image/202101/ab7b893ef2eb465533657d76decd2723.jpg);"></div>
              <div class="info">
                <span class="info-text">儿童</span>
                <i class="iconfont icon-eye"></i>
              </div>
            </a>
          </div>
          <div class="photo-item">
            <a >
              <div class="img" style=" background-image: url(https://s1.tuchong.com/content-image/202101/b66f4a0a68faa3e76dd41a98e1eaff91.jpg);"></div>
              <div class="info">
                <span class="info-text">艺术</span>
                <i class="iconfont icon-eye"></i>
              </div>
            </a>
          </div>
          <div class="photo-item">
            <a >
              <div class="img" style=" background-image: url(https://s1.tuchong.com/content-image/202101/d037d3fd7536bcb9cb2d56000eeffcf7.jpg);"></div>
              <div class="info">
                <span class="info-text">纹理</span>
                <i class="iconfont icon-eye"></i>
              </div>
            </a>
          </div>
          <div class="photo-item">
            <a >
              <div class="img" style=" background-image: url(https://s1.tuchong.com/content-image/202101/714dd55a09129f9c490b94b459b416a5.jpg);"></div>
              <div class="info">
                <span class="info-text">人文</span>
                <i class="iconfont icon-eye"></i>
              </div>
            </a>
          </div>
        </div>



      </div>
    </section>
  </div>
</template>

<script>
  // import '../../assets/js/counterup/counterup.min'
  // import '../../assets/js/venobox/venobox.min'
  // import '../../assets/js/jquery-sticky/jquery.sticky'



  export default {
    name: "PhotoSection",
    components:{

    },
    data(){
      return{
        sort: 'all'
      }
    },
    // router:[
    //   {
    //     path: '',
    //     redirect: '/all'
    //   },
    //   {
    //     path: '/all',
    //     component: PhotoContainer
    //   },
    //   {
    //     path: '/scenry',
    //     component: PhotoContainer
    //   },
    //   {
    //     path: '/poster',
    //     component: PhotoContainer
    //   },
    //   {
    //     path: '/product',
    //     component: PhotoContainer
    //   }
    // ],
    methods:{
      classGallery(gclass){
        this.$router.push(`/classgallery/${gclass}`)
      },
      goAllPhoto(){
        this.sort = 'all'
      },
      goSceneryPhoto(){
        this.sort = 'scenery'
      },
      goProductPhoto(){
        this.sort = 'artist'
      },
      goPosterPhoto(){
        this.sort = 'portrait'
      },
    },


  }
</script>

<style lang="scss">
  a {
    text-decoration: none;
  }
  .photo {
    box-sizing: border-box;
    display: flex;
    min-width: 1220px;
    margin: 0 auto;
    height: 915px;
    /*border: 1px red solid;*/
    flex-wrap: wrap;
    align-items: stretch;
    margin-left: -50px;

    .photo-item {
      position: relative;
      width: calc(25% - 20px);
      margin-right: 20px;
      /*border: #7e8000 1px solid;*/
      height: 285px;

      &:hover {
        cursor: pointer;
        .info {
          height: 100%;
          transition: all 0.2s ease;
          background-image: linear-gradient(135deg, rgba(255, 0, 121, 0.77), rgba(255, 131, 87, 0.61));
          display: flex;
          flex-direction: column;
          color: #eeeeee;

          .info-text {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%,-50%);
            margin: 0;
            font-size: 32px;
          }
          .info-text:before {
            width: 0px;
            height: 0px;
          }
          .iconfont {
            display: block;
            font-size: 40px;
            position: absolute;
            top: 53%;
            left: 50%;
            transform: translate(-50%,-50%);
            margin: 0;
          }
        }
      }

      .img {
        width: 100%;
        height: 100%;
        position: relative;
        background-position: center;
        background-size: cover;
      }

      .info {
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        font-size:20px ;
        text-decoration: none;
        width: 100%;
        height: 65px;
        opacity: 0.77;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0));
        align-items: center;

        .iconfont {
          display: none;
        }
        .info-text {
          position: absolute;
          top: 10px;
          left: 30px;
        }



      }
      .info-text:before {
        content: '';
        display: inline-block;
        width: 12px;
        height: 12px;
        background: #fff;
        border-radius: 6px;
        margin-right: 12px;
      }
    }
    .wrap {
      display: flex;
      width:50% ;
      /*border: #007d80 1px solid;*/
      height: 590px;
      flex-wrap: wrap;
    }
    .first {

      width:calc(50% - 20px);
      height: 590px;
      /*border: green 1px solid;*/
    }
    .second {

      width: 100%;
      height: 285px;

    }
    .third {
      margin-top: 20px;
      width: calc(50% - 20px);
      margin-bottom: 0;
      height: 285px;
    }
    .fourth {
      margin-top: 20px;
      width: calc(50% - 20px);
      margin-bottom: 0;
      height: 285px;
    }



  }



</style>