<template>
  <div class="garllery">
    <Carousel :imgWidth="2200" :imgList="imgList" :initIndex="0" :loop="true" :auto="true" :autoTime="2000"></Carousel>
    <div class="section">
      <div class="common-title">
        <div class="text">
          Selected
          <span class="cn">
            精选图集
        </span></div>
        <div class="split"></div>
      </div>

      <div class="content">


<!--        测导航栏-->
        <div class="indicator" id="sidebar">

          <div class="tag" id="nav1">
            壮美风光
          </div>
          <div class="tag" id="nav2">
            人物肖像
          </div>
          <div class="tag" id="nav3">
            艺术创作
          </div>
          <div class="tag" id="nav4">
            设计素材
          </div>
          <div class="tag" id="nav5">
            东方人物
          </div>
          <div class="tag">
            风光
          </div>
          <div class="tag">
            商务科技
          </div>
          <div class="tag">
            节日节气
          </div>
          <div class="tag">
            教育
          </div>
          <div class="tag">
            动植物
          </div>
          <div class="tag">
            生活
          </div>
          <div class="tag">
            美食
          </div>
          <div class="tag">
            图虫甄选
          </div>
          <div class="tag">
            精选资源
          </div>

        </div>



<!--        壮美风光块-->
        <div class="collection">
          <div class="collection-title" >壮美风光  </div>
          <div class="more" @click="classGallery('壮美风光')">更多</div>

<!--          一张图-->
          <div class="collection__item" >
            <a data-v-04c07ed2=""  class="" @click="picClick(item)">
              <div data-v-04c07ed2="" class="loading-image collection__image">
                <div class="image loading2" data-src="//weiliicimg6.pstatp.com/weili/sm/1068392837436801163.webp"
                     lazy="loaded"
                     style="background-image: url(&quot;//weiliicimg6.pstatp.com/weili/sm/1068392837436801163.webp&quot;);"></div>
              </div>
              <div data-v-04c07ed2="" class="collection__info">
              <span data-v-04c07ed2="" class="collection__name">
              最热新年插画
              </span>
              </div>
            </a>


          </div>

<!--          一张图-->
          <div class="collection__item">
            <a data-v-04c07ed2="" href=""  class="">
              <div data-v-04c07ed2="" class="loading-image collection__image">
                <div class="image loading4" data-src="//icweiliimg1.pstatp.com/weili/sm/903376869610487821.webp"
                     lazy="loaded"
                     style="background-image: url(&quot;//icweiliimg1.pstatp.com/weili/sm/903376869610487821.webp&quot;);"></div>
              </div>
              <div data-v-04c07ed2="" class="collection__info">
              <span data-v-04c07ed2="" class="collection__name">
               新年创意图TOP
              </span>
              </div>
            </a>

          </div>

          <a data-v-04c07ed2="" href="/topic?topicId=49935" class="collection__item">
            <div data-v-04c07ed2="" class="loading-image collection__image">
              <div class="image loading3" data-src="//weiliicimg9.pstatp.com/weili/sm/1068392837432344882.webp"
                   lazy="loaded"
                   style="background-image: url(&quot;//weiliicimg9.pstatp.com/weili/sm/1068392837432344882.webp&quot;);"></div>
            </div>
            <div data-v-04c07ed2="" class="collection__info">
              <span data-v-04c07ed2="" class="collection__name">
              牛年大吉
              </span>
            </div>
          </a>

          <a data-v-04c07ed2="" href="/topic?topicId=49502" class="collection__item"><div data-v-04c07ed2="" class="loading-image collection__image"><div class="image loading4" data-src="//icweiliimg6.pstatp.com/weili/sm/1047391289172164690.webp" lazy="loaded" style="background-image: url(&quot;//icweiliimg6.pstatp.com/weili/sm/1047391289172164690.webp&quot;);"></div></div><div data-v-04c07ed2="" class="collection__info"><span data-v-04c07ed2="" class="collection__name">
        春节海报背景
      </span></div></a>

          <a data-v-04c07ed2="" href="/topic?topicId=50025" class="collection__item"><div data-v-04c07ed2="" class="loading-image collection__image"><div class="image loading3" data-src="//weiliicimg1.pstatp.com/weili/sm/1095006061086113800.webp" lazy="loaded" style="background-image: url(&quot;//weiliicimg1.pstatp.com/weili/sm/1095006061086113800.webp&quot;);"></div></div><div data-v-04c07ed2="" class="collection__info"><span data-v-04c07ed2="" class="collection__name">
        年货节
      </span></div></a>

          <a data-v-04c07ed2="" href="/topic?topicId=50029" class="collection__item"><div data-v-04c07ed2="" class="loading-image collection__image"><div class="image loading2" data-src="//weiliicimg1.pstatp.com/weili/sm/708084337260101647.webp" lazy="loaded" style="background-image: url(&quot;//weiliicimg1.pstatp.com/weili/sm/708084337260101647.webp&quot;);"></div></div><div data-v-04c07ed2="" class="collection__info"><span data-v-04c07ed2="" class="collection__name">
        春运
      </span></div></a>
        </div>
<!--        壮美风光块-->

        <div class="collection">
          <div class="collection-title" >人物肖像 </div>
          <div class="more" @click="classGallery('人物肖像')">更多</div>

          <!--          一张图-->
          <a data-v-04c07ed2="" href="/topic?topicId=50049" class="collection__item">
            <div data-v-04c07ed2="" class="loading-image collection__image">
              <div class="image loading2" data-src="//weiliicimg6.pstatp.com/weili/sm/1068392837436801163.webp"
                   lazy="loaded"
                   style="background-image: url(&quot;//weiliicimg6.pstatp.com/weili/sm/1068392837436801163.webp&quot;);"></div>
            </div>
            <div data-v-04c07ed2="" class="collection__info">
              <span data-v-04c07ed2="" class="collection__name">
              最热新年插画
              </span>
            </div>
          </a>
          <!--          一张图-->

          <a data-v-04c07ed2="" href="/topic?topicId=50048" class="collection__item">
            <div data-v-04c07ed2="" class="loading-image collection__image">
              <div class="image loading4" data-src="//icweiliimg1.pstatp.com/weili/sm/903376869610487821.webp"
                   lazy="loaded"
                   style="background-image: url(&quot;//icweiliimg1.pstatp.com/weili/sm/903376869610487821.webp&quot;);"></div>
            </div>
            <div data-v-04c07ed2="" class="collection__info">
              <span data-v-04c07ed2="" class="collection__name">
               新年创意图TOP
              </span>
            </div>
          </a>

          <a data-v-04c07ed2="" href="/topic?topicId=49935" class="collection__item">
            <div data-v-04c07ed2="" class="loading-image collection__image">
              <div class="image loading3" data-src="//weiliicimg9.pstatp.com/weili/sm/1068392837432344882.webp"
                   lazy="loaded"
                   style="background-image: url(&quot;//weiliicimg9.pstatp.com/weili/sm/1068392837432344882.webp&quot;);"></div>
            </div>
            <div data-v-04c07ed2="" class="collection__info">
              <span data-v-04c07ed2="" class="collection__name">
              牛年大吉
              </span>
            </div>
          </a>

          <a data-v-04c07ed2="" href="/topic?topicId=49502" class="collection__item"><div data-v-04c07ed2="" class="loading-image collection__image"><div class="image loading4" data-src="//icweiliimg6.pstatp.com/weili/sm/1047391289172164690.webp" lazy="loaded" style="background-image: url(&quot;//icweiliimg6.pstatp.com/weili/sm/1047391289172164690.webp&quot;);"></div></div><div data-v-04c07ed2="" class="collection__info"><span data-v-04c07ed2="" class="collection__name">
        春节海报背景
      </span></div></a>

          <a data-v-04c07ed2="" href="/topic?topicId=50025" class="collection__item"><div data-v-04c07ed2="" class="loading-image collection__image"><div class="image loading3" data-src="//weiliicimg1.pstatp.com/weili/sm/1095006061086113800.webp" lazy="loaded" style="background-image: url(&quot;//weiliicimg1.pstatp.com/weili/sm/1095006061086113800.webp&quot;);"></div></div><div data-v-04c07ed2="" class="collection__info"><span data-v-04c07ed2="" class="collection__name">
        年货节
      </span></div></a>

          <a data-v-04c07ed2="" href="/topic?topicId=50029" class="collection__item"><div data-v-04c07ed2="" class="loading-image collection__image"><div class="image loading2" data-src="//weiliicimg1.pstatp.com/weili/sm/708084337260101647.webp" lazy="loaded" style="background-image: url(&quot;//weiliicimg1.pstatp.com/weili/sm/708084337260101647.webp&quot;);"></div></div><div data-v-04c07ed2="" class="collection__info"><span data-v-04c07ed2="" class="collection__name">
        春运
      </span></div></a>
        </div>

        <div class="collection">
          <div class="collection-title" >艺术创作</div>
          <div class="more" @click="classGallery('艺术创作')">更多</div>

          <!--          一张图-->
          <a data-v-04c07ed2="" href="/topic?topicId=50049" class="collection__item">
            <div data-v-04c07ed2="" class="loading-image collection__image">
              <div class="image loading2" data-src="//weiliicimg6.pstatp.com/weili/sm/1068392837436801163.webp"
                   lazy="loaded"
                   style="background-image: url(&quot;//weiliicimg6.pstatp.com/weili/sm/1068392837436801163.webp&quot;);"></div>
            </div>
            <div data-v-04c07ed2="" class="collection__info">
              <span data-v-04c07ed2="" class="collection__name">
              最热新年插画
              </span>
            </div>
          </a>
          <!--          一张图-->

          <a data-v-04c07ed2="" href="/topic?topicId=50048" class="collection__item">
            <div data-v-04c07ed2="" class="loading-image collection__image">
              <div class="image loading4" data-src="//icweiliimg1.pstatp.com/weili/sm/903376869610487821.webp"
                   lazy="loaded"
                   style="background-image: url(&quot;//icweiliimg1.pstatp.com/weili/sm/903376869610487821.webp&quot;);"></div>
            </div>
            <div data-v-04c07ed2="" class="collection__info">
              <span data-v-04c07ed2="" class="collection__name">
               新年创意图TOP
              </span>
            </div>
          </a>

          <a data-v-04c07ed2="" href="/topic?topicId=49935" class="collection__item">
            <div data-v-04c07ed2="" class="loading-image collection__image">
              <div class="image loading3" data-src="//weiliicimg9.pstatp.com/weili/sm/1068392837432344882.webp"
                   lazy="loaded"
                   style="background-image: url(&quot;//weiliicimg9.pstatp.com/weili/sm/1068392837432344882.webp&quot;);"></div>
            </div>
            <div data-v-04c07ed2="" class="collection__info">
              <span data-v-04c07ed2="" class="collection__name">
              牛年大吉
              </span>
            </div>
          </a>

          <a data-v-04c07ed2="" href="/topic?topicId=49502" class="collection__item"><div data-v-04c07ed2="" class="loading-image collection__image"><div class="image loading4" data-src="//icweiliimg6.pstatp.com/weili/sm/1047391289172164690.webp" lazy="loaded" style="background-image: url(&quot;//icweiliimg6.pstatp.com/weili/sm/1047391289172164690.webp&quot;);"></div></div><div data-v-04c07ed2="" class="collection__info"><span data-v-04c07ed2="" class="collection__name">
        春节海报背景
      </span></div></a>

          <a data-v-04c07ed2="" href="/topic?topicId=50025" class="collection__item"><div data-v-04c07ed2="" class="loading-image collection__image"><div class="image loading3" data-src="//weiliicimg1.pstatp.com/weili/sm/1095006061086113800.webp" lazy="loaded" style="background-image: url(&quot;//weiliicimg1.pstatp.com/weili/sm/1095006061086113800.webp&quot;);"></div></div><div data-v-04c07ed2="" class="collection__info"><span data-v-04c07ed2="" class="collection__name">
        年货节
      </span></div></a>

          <a data-v-04c07ed2="" href="/topic?topicId=50029" class="collection__item"><div data-v-04c07ed2="" class="loading-image collection__image"><div class="image loading2" data-src="//weiliicimg1.pstatp.com/weili/sm/708084337260101647.webp" lazy="loaded" style="background-image: url(&quot;//weiliicimg1.pstatp.com/weili/sm/708084337260101647.webp&quot;);"></div></div><div data-v-04c07ed2="" class="collection__info"><span data-v-04c07ed2="" class="collection__name">
        春运
      </span></div></a>
        </div>

        <div class="collection">
          <div class="collection-title" >设计素材</div>
          <div class="more" @click="classGallery('设计素材')">更多</div>

          <!--          一张图-->
          <a data-v-04c07ed2="" href="/topic?topicId=50049" class="collection__item">
            <div data-v-04c07ed2="" class="loading-image collection__image">
              <div class="image loading2" data-src="//weiliicimg6.pstatp.com/weili/sm/1068392837436801163.webp"
                   lazy="loaded"
                   style="background-image: url(&quot;//weiliicimg6.pstatp.com/weili/sm/1068392837436801163.webp&quot;);"></div>
            </div>
            <div data-v-04c07ed2="" class="collection__info">
              <span data-v-04c07ed2="" class="collection__name">
              最热新年插画
              </span>
            </div>
          </a>
          <!--          一张图-->

          <a data-v-04c07ed2="" href="/topic?topicId=50048" class="collection__item">
            <div data-v-04c07ed2="" class="loading-image collection__image">
              <div class="image loading4" data-src="//icweiliimg1.pstatp.com/weili/sm/903376869610487821.webp"
                   lazy="loaded"
                   style="background-image: url(&quot;//icweiliimg1.pstatp.com/weili/sm/903376869610487821.webp&quot;);"></div>
            </div>
            <div data-v-04c07ed2="" class="collection__info">
              <span data-v-04c07ed2="" class="collection__name">
               新年创意图TOP
              </span>
            </div>
          </a>

          <a data-v-04c07ed2="" href="/topic?topicId=49935" class="collection__item">
            <div data-v-04c07ed2="" class="loading-image collection__image">
              <div class="image loading3" data-src="//weiliicimg9.pstatp.com/weili/sm/1068392837432344882.webp"
                   lazy="loaded"
                   style="background-image: url(&quot;//weiliicimg9.pstatp.com/weili/sm/1068392837432344882.webp&quot;);"></div>
            </div>
            <div data-v-04c07ed2="" class="collection__info">
              <span data-v-04c07ed2="" class="collection__name">
              牛年大吉
              </span>
            </div>
          </a>

          <a data-v-04c07ed2="" href="/topic?topicId=49502" class="collection__item"><div data-v-04c07ed2="" class="loading-image collection__image"><div class="image loading4" data-src="//icweiliimg6.pstatp.com/weili/sm/1047391289172164690.webp" lazy="loaded" style="background-image: url(&quot;//icweiliimg6.pstatp.com/weili/sm/1047391289172164690.webp&quot;);"></div></div><div data-v-04c07ed2="" class="collection__info"><span data-v-04c07ed2="" class="collection__name">
        春节海报背景
      </span></div></a>

          <a data-v-04c07ed2="" href="/topic?topicId=50025" class="collection__item"><div data-v-04c07ed2="" class="loading-image collection__image"><div class="image loading3" data-src="//weiliicimg1.pstatp.com/weili/sm/1095006061086113800.webp" lazy="loaded" style="background-image: url(&quot;//weiliicimg1.pstatp.com/weili/sm/1095006061086113800.webp&quot;);"></div></div><div data-v-04c07ed2="" class="collection__info"><span data-v-04c07ed2="" class="collection__name">
        年货节
      </span></div></a>

          <a data-v-04c07ed2="" href="/topic?topicId=50029" class="collection__item"><div data-v-04c07ed2="" class="loading-image collection__image"><div class="image loading2" data-src="//weiliicimg1.pstatp.com/weili/sm/708084337260101647.webp" lazy="loaded" style="background-image: url(&quot;//weiliicimg1.pstatp.com/weili/sm/708084337260101647.webp&quot;);"></div></div><div data-v-04c07ed2="" class="collection__info"><span data-v-04c07ed2="" class="collection__name">
        春运
      </span></div></a>
        </div>

      </div>
    </div>

<!--    弹窗--> 

    <pop-panel></pop-panel>
    <!--    黑幕-->
    <div id="fade" class="black_overlay" ></div>


  </div>
</template>

<script>
  import Carousel from '../components/commom/carousel'
  import PopPanel from '../components/gallery/PopPanel'
  import $ from 'jquery'
  // $(window).scroll(function () {
  //   if ($(window).scrollTop() >= 600) {
  //     $("#sidebar2").css({"position": "fixed", "margin-top": "0px"});
  //   } else {
  //     $("#sidebar2").css({"position": "absolute", "margin-top": "-100px"});
  //   }
  // });
  $(function () {
    setTimeout(function () {




      $("#nav1").click(function () {

        $(".tag").removeClass('active')
        $("#nav1").addClass('active')
        $(window).scrollTop(600);
      })

      $("#nav2").click(function () {

        $(".tag").removeClass('active')
        $("#nav1").addClass('active')
        $(window).scrollTop(1140);
      })

      $("#nav3").click(function () {

        $(".tag").removeClass('active')
        $("#nav1").addClass('active')
        $(window).scrollTop(1700);
      })

      $("#nav4").click(function () {

        $(".tag").removeClass('active')
        $("#nav1").addClass('active')
        $(window).scrollTop(2280);
      })



      $(window).scroll(function () {
        if ($(window).scrollTop() < 600 ) {
          $(".tag").removeClass('active')

        }
        if ($(window).scrollTop() >= 600 && $(window).scrollTop() < 1140 ) {
          $(".tag").removeClass('active')
          $("#nav1").addClass('active')
        }
        if ($(window).scrollTop() >= 1140 && $(window).scrollTop() < 1700) {
          $(".tag").removeClass('active')
          $("#nav2").addClass('active')
        }
        if ($(window).scrollTop() >= 1700 && $(window).scrollTop() < 2280) {
          $(".tag").removeClass('active')
          $("#nav3").addClass('active')
        }
        if ($(window).scrollTop() >= 2280) {
          $(".tag").removeClass('active')
          $("#nav4").addClass('active')
        }

      });
    },0)
  });



  export default {

    name: "gallery",
    components: {
      PopPanel,
      Carousel
    },
    data() {
      return {
        item:{
          name:'123',
          age:123
        },
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
      classGallery(gclass){
        this.$router.push(`/classgallery/${gclass}`)
      },
      // picClick(){
      //   $('#light').css({"display":"block"});
      //   $('#fade').css({"display":"block"});
      //
      // },
      // close() {
      //   console.log('123');
      //   $('#light').css({"display":"none"});
      //   $('#fade').css({"display":"none"});
      // }

    }
  }
</script>

<style lang="scss">
  /*.header {*/
  /*  background: rgba(255, 255, 255, 0.75);*/
  /*  position: absolute;*/
  /*  z-index: 999;*/
  /*}*/
  /*html {*/
  /*  overflow: hidden;*/
  /*  height: 100%;*/
  /*}*/
  .garllery {

    z-index: -999;


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

    }


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

      position: relative;
      /*border: 1px red solid;*/

      .indicator {
        position: absolute;
        width: 120px;
        height: 700px;
        top: 100px;
        /*border: 1px red solid;*/
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: -100px;

        .tag {

          width: 90px;
          height: 30px;
          margin-top: 20px;
          background-color: #f4f4f4;
          text-align: center;
          font-size: 16px;
          color: #6d6d6d;
          cursor: pointer;
          line-height: 30px;
          border-radius: 15px;

          &:hover {
            background-color: rgba(251, 196, 77, 0.57);
            color: #ffffff;
          }

          &.active {
            background-color: #ff632a;
            color: #ffffff;
            transition: all 0.8s ease-in-out;
          }
        }
      }

      .collection {

        width: 1063px;
        /*border: #42b983 1px solid;*/
        margin-left: 130px;
        margin-bottom: 30px;



        .collection-title {
          height: 28px;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 0.64px;
          color: #222222;
          margin-bottom: 16px;
          width: 10%;
          display: inline-block;


        }
        .more{
          display: inline-block;
          width: 87%;
          color: #0d6aad;
          text-align: right;
          &:hover {
            cursor: pointer;
          }
        }
        .collection__item {
          position: relative;
          width: calc(33.333333% - 20px);
          display: inline-block;
          margin-right: 20px;
          margin-bottom: 20px;
          height: 221px;
          background: cyan;
          transition: all 0.2s ease-in-out;

          /*弹窗*/
          .pop {
            display: block;
            position: fixed;
            top: 50%;
            left: 50%;
            transform:translate(-50%,-50%);
            width: 70%;
            height: 800px;
            background-color: #b3d4fc;
            z-index: 999;
          }

          &:hover {
            -webkit-transform: translateY(-3px);
            transform: translateY(-3px);
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.57);
            z-index: 99;
          }

          .collection__image {
            width: 100%;
            height: 100%;
          }
          .loading-image {
            position: relative;

            .image {
              width: 100%;
              height: 100%;
              position: relative;
              background-position: center;
              background-size: cover;
            }
          }

          .collection__info {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 136px;
            border-radius: 2px;
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.47) 56%);
            padding-top: 23px;
            padding-left: 25px;
            transition: all 0.2s ease;
            color: #fff;

            &::before {
              content: '';
              display: inline-block;
              margin-right: 3px;
              width: 11px;
              height: 11px;
              border-radius: 6px;
              background-color: #ffffff;
            }
          }
        }

      }


    }
  }
</style>