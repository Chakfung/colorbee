<template>
  <div el:waterfall="" class="waterfall" image-width="296">
    <div class="black_overlay" v-if="show"></div>
    <div class="show" v-if="show">
      <div class="head">
        <i class="iconfont icon-close" @click="close()"></i>
        <i class="iconfont icon-download" @click="download()"></i>
        <i class="iconfont icon-delete" @click="deleteP(pop._id)"></i>
      </div>
      <div class="img">
        <img :src="pop.photo.img" alt="">
      </div>
    </div>
    <div class="panel-title">已购图片</div>
    <div class="nodata" v-if="images.length===0"><img src="../../assets/image/me/nodata.png" alt="">暂无数据</div>
    <div class="waterFall-box" ref="box">
      <div
          class="img-box"
          v-for="(item, index) in images"
          :key="index"
          ref="img"
          @click="photodetail(item)"
          v-if="item.photo"
      >
        <div class="shade">
          <i class="iconfont icon-eye"></i>
        </div>
        <img  :src="item.photo.img" alt="" />
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
  </div>
</template>

<script>
  export default {
    name: "BuyGallery",
    data() {
      return {
        imgWidth: 190, //图片的宽度
        heightArray: [], //存储高度数组，用于判断最小高度的图片位置
        isLoad: true, //是否继续加载图片
        surplusW: 0, //是否存在剩余宽度
        offsetP: 0,
        count: 0,
        images: [],
        user: {},
        show:false,
        pop: {}
      }
    },
    methods: {
      photodetail(item) {
        this.show=true
        this.pop = item
      },
      close () {
        this.show=false
        this.pop= {}
      },
      async deleteP(id) {
        this.show = false
        this.pop= {}
        this.heightArray=[],
        this.surplusW= 0,
        this.offsetP=0,
        this.count= 0,
        this.images = []
        const res = await this.$http.delete(`rest/buy_gallerys/${id}`)
        this.$router.push('buygallery')
        this.$message({
          type:'success',
          message:'删除成功'
        })
        this.fetch()
      },
    download() {
      let that = this
      var image = new Image();
      // 解决跨域 Canvas 污染问题
      image.setAttribute("crossOrigin", "anonymous");
      image.onload = function() {
        var canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据

        var a = document.createElement("a"); // 生成一个a元素
        var event = new MouseEvent("click"); // 创建一个单击事件
        a.download = that.pop.photo.name || "photo"; // 设置图片名称
        a.href = url; // 将生成的URL设置为a.href属性
        a.dispatchEvent(event); // 触发a的单击事件
      };
      image.src = this.pop.photo.img;
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
      async fetch() {
        let res = await this.$http.get('/rest/buy_gallerys')
        console.log(res);
        this.images = res.data.filter(obj => {
          return obj.hasOwnProperty('user') && obj.user._id === this.user
        })
        let that = this
        setTimeout(function () {
          that.loadImgHeight();
        }, 100);
      },

    },
    created() {
      this.user = localStorage.user
      this.fetch()

    }
  }
</script>

<style scoped lang="scss">
  .waterfall {
    width: 100%;
    font-size: 0;
    text-align: center;
    padding-top: 10px;
    position: relative;
    .nodata {
      font-weight: 600;
      color: #484848;
      width: 100%;
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .black_overlay {
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
    .show {
      position: fixed;
      top: 50%;
      left: 50%;
      z-index: 10000;
      transform: translate(-50%,-50%);
      width: 1200px;
      height: 800px;
      border-radius: 15px;
      background: #edf2f6;
      overflow: hidden;
      .head {
        background: #fff;
        width: 100%;
        height: 50px;
        position: relative;
        .icon-close {
          position: absolute;
          top: 5px;
          right: 10px;
          font-size: 25px;
          cursor: pointer;
          &:hover {
            color:rgba(255, 0, 121, 0.77) ;
          }
        }
        .icon-download {
          position: absolute;
          bottom: -730px;
          right: 10px;
          font-size: 35px;
          cursor: pointer;
          &:hover {
            color:rgba(255, 0, 121, 0.77) ;
          }
        }
        .icon-delete{
          position: absolute;
          bottom: -730px;
          right: 75px;
          font-size: 35px;
          cursor: pointer;
          &:hover {
            color:rgba(255, 0, 121, 0.77) ;
          }
        }
      }
      .img {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          margin-top: 15px;
          height: 700px;
          max-width: 780px;
        }
      }

    }
    .panel-title {
      width: 100%;
      border-bottom: 1px #d9d9d9 solid;
      margin-bottom: 10px;
      color:#259;
      font-size: 18px;
      font-family: 'PingFangSC','helvetica neue','hiragino sans gb','arial','microsoft yahei ui','microsoft yahei','simsun','sans-serif'!important;
      font-weight: bold;
    }
    .waterFall-box {

      width: 780px;
      left: 46%;
      transform: translate(-50%);
      position: relative;
      text-align: center;
    }
    .waterFall-box .img-box {
      background: #fff;
      width: 190px;
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