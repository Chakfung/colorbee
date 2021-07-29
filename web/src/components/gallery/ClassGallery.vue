<template>
  <div class="classgarllery">
    <Carousel :imgWidth="2200" :imgList="imgList" :initIndex="0" :loop="true" :auto="true" :autoTime="2000" @recVol="recVol"></Carousel>
    <div class="common-title">
      <div class="text">
        Selected
        <span class="cn">
            {{gclass}}
        </span></div>
      <div class="split"></div>
    </div>
    <div class="waterFall-box" ref="box">
      <div
          class="img-box"
          v-for="(item, index) in images"
          :key="index"
          ref="img"
          @click="photodetail(item)"
      >
        <div class="shade">
          <i class="iconfont icon-eye"></i>
        </div>
        <img :src="item.img" alt="" />
      </div>
      <footer
          v-if="isLoad == false"
          :style="{
          position: 'absolute',
          top: Math.max(...heightArray) + 'px',
          color: 'red',
          left: '50%',
          transform: 'translateX(-50%)',
        }"
      >
        没有图片加载了...
      </footer>
  </div>
    <!--    弹窗-->
    <pop-panel :pop=pop :user=user></pop-panel>
    <!--    黑幕-->
    <div id="fade" class="black_overlay" ></div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import Carousel from '../../components/commom/carousel'
  import PopPanel from '../../components/gallery/PopPanel'

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
        searchVol:'',
        imgWidth: 270, //图片的宽度
        heightArray: [], //存储高度数组，用于判断最小高度的图片位置
        isLoad: true, //是否继续加载图片
        surplusW: 0, //是否存在剩余宽度
        offsetP: 0,
        count: 0,
        images:[],
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
      recVol(data) {
        console.log(data);
      },
      loadImgHeight() {
        let count = 0; //计数变量 判断是否预加载图片是否完成
        this.images.forEach((item) => {
          //使用image类预加载图片
          let image = new Image();
          image.src = item.img;
          image.onload = image.onerror = (event) => {
            count++;
            if (count == this.images.length) {
              this.$nextTick(() => {
                this.init();
                this.positionImg(0);
              });
            }
          };
        });
      },
      /**
       * @remarks 初始化
       * 初始化容器的宽度，计算出容器可容纳多少固定宽度图片的列，
       * 如果可排列固定宽度的图片宽度无法沾满容器的宽度，需要计算出空余的宽度，固定首图片的left
       * */
      init() {
        //得到页面的宽度
        const pageWidth_padding = this.$refs.box.clientWidth;
        //页面的padding像素
        this.offsetP = this.$refs.box.style.paddingLeft.replace(/[^0-9]/gi, "");
        //获得页面的真实宽度（除去padding、margin、border...）
        const pageWidth = pageWidth_padding - this.offsetP * 2;
        //计算出当前页面可展示多少列图片
        const column = Math.floor(pageWidth / this.imgWidth);
        //偏移像素值
        this.surplusW = pageWidth - column * this.imgWidth;
        //初始化存储高度数组
        for (let i = 0; i < column; i++) {
          this.heightArray.push(0);
        }
      },
      /**
       * @remark 定位图片
       * @param:
       *  start: 循环开始位置，开始为0，如果滚动条滑到底部，则start为容器存在图片资源的数量即this.images.length
       *  ----------宽高都计算img的父容器的宽高
       * */
      positionImg(start) {
        //获得img标签的父容器的DOM
        let parentDom = this.$refs.img;
        for (let i = start; i < this.images.length; i++) {
          //获得最小高度
          const minHeight = Math.min(...this.heightArray);
          //获得最小高度索引
          const index = this.heightArray.indexOf(minHeight);
          //获得当前图片的高度
          const currHeight = parentDom[i].clientHeight;
          //定位
          parentDom[i].style.transform = "50px";
          parentDom[i].style.position = "absolute";
          // let realaa;
          // if (index < 2) {
          //   console.log("第一行");
          //   realaa = minHeight;
          // } else {
          //   console.log("第n行");
          //   realaa = minHeight;
          // }
          // console.log("real" + realaa);
          // parentDom[i].style.top = realaa + "px";
          parentDom[i].style.top = minHeight + "px";
          parentDom[i].style.margin;
          parentDom[i].style.left =
              this.imgWidth * index + +(Math.floor(this.surplusW / 2) + 30) + "px";
          this.heightArray[index] += currHeight;
        }
        //对父容器赋值当前heightArray数组的最大高度
        this.$refs.box.style.height = Math.max(...this.heightArray) + 50 + "px";
      },
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
        this.images = res.data.filter(obj=>{
          return obj.class.name === this.gclass
        })
        let that = this;
        setTimeout(function () {
          that.loadImgHeight();
        }, 100);
      },
    },
    mounted(){
    },
    created(){
      this.buyphoto.user = localStorage.user
      this.user = localStorage.user
      this.fetch()
      // this.fetchPage()
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
    .common-title {
      margin-left: 50%;
      transform: translate(-50%);
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
    .waterFall-box {
      width: 1200px;
      left: 50%;
      transform: translate(-50%);
      position: relative;
      text-align: center;
    }
    .waterFall-box .img-box {
      background: #fff;
      width: 260px;
      vertical-align: top;
      display: block;
      float: left;
      border: 1px #5c5c5c solid;
      border-radius: 5px;
      animation: imgBox 0.5s ease-in-out;
      &:hover {
        .shade {
          width: 100%;
          height: 100%;
          transition: all 0.2s ease-in-out;
          background-image: linear-gradient(
                  135deg,
                  rgba(255, 0, 121, 0.77),
                  rgba(255, 131, 87, 0.61)
          );
          color: #eee;
          border-radius: 5px;
          .icon-eye {
            display: block;
          }
        }
      }
    }
    .shade {
      z-index: 999;
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      font-size: 20px;
      text-decoration: none;
      width: 100%;
      height: 0;
      opacity: 0.77;
      background-image: linear-gradient(rgba(0, 0, 0, 0.77), transparent);
      align-items: center;
      display: flex;
      justify-content: center;
      .icon-eye {
        display: none;
        font-size: 25px;
      }
    }
    .waterFall-box .img-box img {
      margin-top: 5px;
      width: 95%;
      margin-bottom: 5px;
    }
    .waterFall-box .img-box:hover {
      z-index: 99;
      transform: translateY(-3px);
      transition: transform 0.1s ease-in-out;
      box-shadow: 0 5px 10px 0px #a3a3a3;
    }
    @keyframes imgBox {
      0% {
        opacity: 0;
        transform: translateY(-100px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }


  }
</style>