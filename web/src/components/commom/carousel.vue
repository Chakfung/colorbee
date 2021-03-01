/*
* @Author: zengna
* @Date: 2019-05-14 09:55:57
* @Last Modified by: ZY.zengna
* @Last Modified time: 2019-05-14 10:00:59
*/
<template>
  <div id="swiper" @mouseover="stopAuto" @mouseout="autoPlay">
    <div class="swiper-box" :style="{width:allCount,'-webkit-transition':transitionConfig,'-webkit-transform':slateX}"
         ref='swiper'>
      <carousel-item :img="imgList[imgList.length-1].img" :imgWidth="-imgWidth" v-if="loop"/>
      <carousel-item v-for="(item,index)  in imgList" :key="index" :img="item.img"
                     :imgWidth="imgWidth*index"></carousel-item>
      <carousel-item :img="imgList[0].img" :imgWidth="imgWidth*imgList.length" v-if="loop"></carousel-item>
    </div>
    <span class='swiper-left' @click="toLeft">《</span>
    <span class='swiper-right' @click='toRight'>》</span>
    <div class="swiper-dots" v-if="dots">
      <button v-for="(item,index) in imgList.length" :key="index" :class="{active:index==dotsIndex}"
              @click="toDots(index)" class="tc">{{item}}
      </button>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="搜索关键字">

      <a href="" style="text-decoration: none">
        <div class="search">
          <i class="iconfont icon-search" style="font-size: 30px"></i>
        </div>

      </a>
    </div>
    <div class="decoration-bar"></div>
  </div>
</template>

<script>
  import CarouselItem from './carouselItem'

  export default {
    name: 'swiper',
    props: {
      // 图片宽
      imgWidth: {
        type: Number,
        default: 1200
      },
      // 图片地址
      imgList: {
        type: Array
      },
      // 指示器
      dots: {
        type: Boolean,
        default: true
      },
      arrow: {
        type: Boolean,
        default: true
      },
      // 初始播放位置
      initIndex: {
        type: Number,
        default: 0
      },
      // 是否循环
      loop: {
        type: Boolean,
        default: true
      },
      // 持续时间
      duration: {
        type: Number,
        default: 0.3
      },
      // 自动播放
      auto: {
        type: Boolean,
        default: false
      },
      // 自动播放时间间隔
      autoTime: {
        type: Number,
        default: 3000
      }
    },
    data() {
      return {
        imgIndex: 0,
        durationTime: 0.2,
        dotsIndex: 0,
        autoer: null,
      }
    },
    components: {
      'CarouselItem': CarouselItem
    },
    computed: {
      allCount() {
        return (this.imgList.length * this.imgWidth) + 'px';
      },
      slateX() {

        return 'translate3d(' + (-this.imgIndex * this.imgWidth) + 'px,0,0)'
      },
      transitionConfig() {
        return 'all ' + this.durationTime + 's';
      },
    },
    methods: {
      toLeft() {
        if (this.loop) {
          this.imgIndex--;
          this.dotsIndex--;
          if (this.dotsIndex <= -1) this.dotsIndex = this.imgList.length - 1;

          if (this.imgIndex <= -2) this.loopFn('left');

        } else {
          if (this.imgIndex == 0) return this.dotsIndex = this.imgIndex = this.imgList.length - 1;
          this.imgIndex--;
          this.dotsIndex--;

        }

      },
      toRight() {
        if (this.loop) {
          // alert(this.loop)

          this.imgIndex++;
          this.dotsIndex++;
          if (this.dotsIndex == this.imgList.length) this.dotsIndex = 0;
          if (this.imgIndex == this.imgList.length + 1) this.loopFn('right');
        } else {
          this.imgIndex++;
          this.dotsIndex++;
          if (this.imgIndex > this.imgList.length - 1) return this.dotsIndex = this.imgIndex = 0;
        }
      },
      loopFn(type) {
        const dur = this.durationTime;
        this.durationTime = 0;

        this.imgIndex = type == 'right' ? 0 : this.imgList.length - 1;

        setTimeout(() => {
          this.$nextTick(function () {
            this.durationTime = dur;

            if (type == 'right') this.imgIndex++;
            else this.imgIndex--;
          })
        }, 30)
      },
      toDots(index) {
        this.dotsIndex = this.imgIndex = index;
      },
      autoPlay() {
        if (this.auto) {
          clearInterval(this.autoer);
          this.autoer = setInterval(() => {
            this.toRight();
          }, this.autoTime)
        }

      },
      stopAuto() {
        if (this.auto) return clearInterval(this.autoer);
      }
    },
    created() {
      this.imgIndex = this.dotsIndex = this.initIndex;

      this.durationTime = this.duration;

      if (this.auto) this.autoPlay();
    },

  }
</script>

<style lang="scss">
  .tc {
    padding-bottom: 20px;
  }

  .search-bar {
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translate(-50%,0);
    width: 400px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 25px;
    height: 50px;
    display: flex;



    &:focus-within {
      background-color: rgba(255, 255, 255, 0.81);
    }

    input {
      width: 300px;
      margin-top: 14px;
      padding-left: 20px;
      background: none;
      border: none;
      border-right: #B6B6B6 2px solid;
      height: 25px;


      &:focus {
        border-left: none;
        border-top: none;
        border-right: #B6B6B6 2px solid;
        border-bottom: none;

      }

    }
    .search {
      width: 50px;

      color: rgb(114, 114, 114);
      height: 50px;
      margin-left: 40px;
      padding-top: 3px;

    }

  }



  #swiper {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 532px;
    background: #fff;
    box-shadow: 0  10px  20px rgba(65, 65, 65, 0.8);
  }

  .swiper-left {
    position: absolute;
    top: 50%;
    display: inline-block;
    transform: translateY(-50%);
    left: 0;
    background: rgba(127, 124, 124, 0.5);
    padding: 5px 13px 7px 5px;
    color: #fff;
    font-size: 20px;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
  }

  .swiper-right {
    position: absolute;
    top: 50%;
    display: inline-block;
    transform: translateY(-50%);
    right: 0;
    background: rgba(127, 124, 124, 0.5);
    padding: 5px 3px 7px 15px;
    color: #fff;
    font-size: 20px;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
  }

  .swiper-dots {
    position: absolute;
    bottom: 10px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);

    z-index: 2;
  }

  .swiper-dots button {
    width: 20px;
    height: 20px;
    background: rgba(127, 124, 124, 0.5);
    display: inline-block;
    margin: 0 10px;
    border-radius: 50%;
    color: #000;
    font-weight: normal;
    border: none;
    outline: none;
    transition: all .2s;
    cursor: pointer;

    &:focus {
      outline: none;
    }

  }

  .swiper-dots button:hover, .swiper-dots button.active {
    background: rgba(51, 122, 183, 0.8);
    color: #fff;
  }

  .decoration-bar {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 50px;
  }
</style>
