<template>
  <div class="classgarllery">
    <Carousel :imgWidth="2200" :imgList="imgList" :initIndex="0" :loop="true" :auto="true" :autoTime="2000"></Carousel>
    <div class="section">
      <div class="common-title">
        <div class="text">
          Sorted
          <span class="cn">
            分类图集
        </span></div>
        <div class="split"></div>
      </div>


      <div class="content">
        <div class="waterfall__column" style=" margin-left: 0px;">
          <div class="loading-image waterfall__img-wrapper" track-by="imageId" style=" margin-bottom: 4px;" v-for="n in col" @click="photodetail(items[n-1])">
            <img :src="items[n-1].img" alt="" v-if="items[n-1]">
            <div class="control-panel" >
              <i class="iconfont icon-eye"></i>
            </div>
          </div>
<!--          <div class="loading-image waterfall__img-wrapper" track-by="imageId" style=" margin-bottom: 4px;">-->
<!--            <img src="//icweiliimg9.pstatp.com/weili/sm/1060620226519629890.webp" alt="">-->
<!--          </div>-->
<!--          <div class="loading-image waterfall__img-wrapper" track-by="imageId" style=" margin-bottom: 4px;">-->
<!--            <img src="//icweiliimg9.pstatp.com/weili/sm/1046152869712101384.webp" alt="">-->
<!--          </div>-->
<!--          <div class="loading-image waterfall__img-wrapper" track-by="imageId" style=" margin-bottom: 4px;">-->
<!--            <img src="//weiliicimg9.pstatp.com/weili/sm/1051068906457792517.webp" alt="">-->
<!--          </div>-->
<!--          <div class="loading-image waterfall__img-wrapper" track-by="imageId" style=" margin-bottom: 4px;">-->
<!--            <img src="//weiliicimg1.pstatp.com/weili/sm/79053322685967404.webp" alt="">-->
<!--          </div>-->
<!--          <div class="loading-image waterfall__img-wrapper" track-by="imageId" style=" margin-bottom: 4px;">-->
<!--            <img src="//weiliicimg9.pstatp.com/weili/sm/926474602430726173.webp" alt="">-->
<!--          </div>-->
        </div>

        <div class="waterfall__column" style=" margin-left: 4px;">
          <div class="loading-image waterfall__img-wrapper" track-by="imageId" style=" margin-bottom: 4px;" v-for="n in col" @click="photodetail(items[n+col])">
            <img :src="items[n+col-1].img" alt="" v-if="items[n+col-1]">
            <div class="control-panel" >
              <i class="iconfont icon-eye"></i>
            </div>
          </div>

        </div>

        <div class="waterfall__column" style=" margin-left: 4px;">
          <div class="loading-image waterfall__img-wrapper" track-by="imageId" style=" margin-bottom: 4px;" v-for="n in col" @click="photodetail(items[n+2*col-1])">
            <img :src="items[n+2*col-1].img" alt="" v-if="items[n+2*col-1]">
            <div class="control-panel" >
              <i class="iconfont icon-eye"></i>
            </div>
          </div>
        </div>

        <div class="waterfall__column" style=" margin-left: 4px;">
          <div class="loading-image waterfall__img-wrapper" track-by="imageId" style=" margin-bottom: 4px;" v-for="n in col" @click="photodetail(items[n+3*col-1])">
            <img :src="items[n+3*col-1].img" alt="" v-if="items[n+3*col-1]">
            <div class="control-panel" >
              <i class="iconfont icon-eye"></i>
            </div>
          </div>

          <div class="loading-image waterfall__img-wrapper" track-by="imageId" style=" margin-bottom: 4px;" v-for="n in remain" @click="photodetail(items[4*col-1+n])" v-if="remain">
            <img :src="items[4*col-1+n].img" alt="">
            <div class="control-panel" >
              <i class="iconfont icon-eye"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--    弹窗-->

    <pop-panel v-bind:pop=pop v-bind:user=pop></pop-panel>
    <!--    黑幕-->
    <div id="fade" class="black_overlay" ></div>


  </div>
</template>

<script>
  import Carousel from '../../components/commom/carousel'
  import PopPanel from '../../components/gallery/PopPanel'
  import $ from 'jquery'


  $(window).scroll(function () {
    if ($(window).scrollTop() >= 600) {
      $("#sidebar").css({"position": "fixed", "margin-top": "0px"});
    } else {
      $("#sidebar").css({"position": "absolute", "margin-top": "-100px"});
    }
  });
  export default {
    name: "ClassGallery",
    components: {
      PopPanel,
      Carousel
    },
    props:{
      gclass:{}
    },
    data(){
      return {
        items:[],
        num:{},
        col:{},
        remain:{},
        pop:{},
        buyphoto:{},
        user:{},
        imgList: [
          {
            img: 'https://s1.tuchong.com/content-image/202101/ad1583e92607b94cfa56ca48a6c7f07c.jpg'
          },
          {
            img: 'https://s1.tuchong.com/content-image/202012/ba94d3d7bd243064c27ca9175cac2911.jpg'
          },
          {
            img: 'https://s1.tuchong.com/content-image/202008/9684c6eadec628dd135c49e42ab61e0e.jpg'
          }
        ]
      }
    },
    methods:{
      photodetail(pop){
        if(!localStorage.user){
          this.$router.push('/login')
        }
        this.pop = pop
        this.buyphoto.photo = pop._id
        $('#light').css({"display":"block"});
        $('#fade').css({"display":"block"});

      },

      async fetch(){

        let res = await this.$http.get('/rest/photo')

        this.items = res.data.filter(obj=>{
          return obj.class.name === this.gclass
        })
        this.num = this.items.length
        this.col = parseInt(this.items.length/4)
        this.remain =this.items.length%4



      },

    },
    created(){
      this.fetch()
      this.buyphoto.user = localStorage.user
      this.user = localStorage.user
    }
  }
</script>

<style scoped lang="scss">
  .classgarllery {
    .black_overlay {
      display: none;
      position: fixed;
      z-index:1000;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      filter: alpha(opacity=70);
      opacity: 0.7;
      overflow: hidden;
      background-color: #000;
    }
    .section {

        width: 1200px;

        /*border: 1px red solid;*/
        margin: 20px auto;




      .common-title {
        display: flex;
        align-items: flex-end;
        margin-bottom: 40px;

        .text {
          position: relative;
          font-size: 70px;
          font-weight: 500;
          color: rgba(34, 34, 34, 0.05);
        }

        .cn {
          position: absolute;
          left: 0;
          bottom: 0;
          font-weight: 600;
          font-size: 30px;
          color: #222222;
        }

        .split {
          position: relative;
          flex: 1;
          height: 74px;
          margin-left: 30px;
          bottom: 25px;
          border-bottom: dashed 1px #e2e2e2;

          &::before {
            content: '';
            display: block;
            position: absolute;
            bottom: -4px;
            width: 8px;
            height: 8px;
            border-radius: 4px;
            background-color: #e2e2e2;
          }
        }
      }
      .content {

        width: 1200px;

        margin-left: 50%;
        transform: translate(-50%);
        .waterfall__column {
          display: inline-block;
          vertical-align: top;


          .waterfall__img-wrapper {
            position: relative;
            cursor: pointer;
            transform-origin: center;
            transition: all 0.8s ease-in-out;
            overflow: hidden;
            border: 1px solid #f0f0f0;
            box-sizing: border-box;
            width: 275px;

            .control-panel {
              z-index: 999;
              position: absolute;
              top: 0;
              left: 0;
              color: #fff;
              font-size:20px ;
              text-decoration: none;
              width: 100%;
              height: 0px;
              opacity: 0.77;
              background-image: linear-gradient( rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0));
              align-items: center;
              display: flex;
              justify-content: center;
              .iconfont {
                display: none;
              }
            }

            &:hover {
              img {
                transition: all 0.2s ease-in-out;
                transform: scale(1.2);
              }
              .control-panel {

                position: absolute;
                top: 0;
                z-index: 999;
                width: 100%;
                height: 100%;
                transition: all 0.2s ease-in-out;
                background-image: linear-gradient(135deg, rgba(255, 0, 121, 0.77), rgba(255, 131, 87, 0.61));
                display: flex;
                flex-direction: column;
                color: #eeeeee;

                .iconfont {
                  display: block;
                  font-size: 35px;

                }
              }
            }

            img {
              width: 275px;



            }



          }
        }
      }
    }
  }
</style>