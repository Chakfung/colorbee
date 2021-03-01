<template>
  <div el:waterfall="" class="waterfall" image-width="296">
    <div class="panel-title">我的图片</div>
    <div class="waterfall__column" style=" margin-left: 0px;">
      <div class="loading-image waterfall__img-wrapper" track-by="imageId" style=" margin-bottom: 4px;" v-for="n in col" @click="photodetail(items[n-1])" v-if="items[n-1]">
        <img :src="items[n-1].img" alt="">
        <div class="control-panel" >
          <i class="iconfont icon-eye"></i>
        </div>
      </div>
    </div>

    <div class="waterfall__column" style=" margin-left: 4px;">
      <div class="loading-image waterfall__img-wrapper" track-by="imageId" style=" margin-bottom: 4px;" v-for="n in col" @click="photodetail(items[n+col])" v-if="items[n+col-1]">
        <img :src="items[n+col-1].img" alt="">
        <div class="control-panel" >
          <i class="iconfont icon-eye"></i>
        </div>
      </div>

    </div>

    <div class="waterfall__column" style=" margin-left: 4px;">
      <div class="loading-image waterfall__img-wrapper" track-by="imageId" style=" margin-bottom: 4px;" v-for="n in col" @click="photodetail(items[n+2*col-1])" v-if="items[n+2*col-1]">
        <img :src="items[n+2*col-1].img" alt="">
        <div class="control-panel" >
          <i class="iconfont icon-eye"></i>
        </div>
      </div>
    </div>

    <div class="waterfall__column" style=" margin-left: 4px;">
      <div class="loading-image waterfall__img-wrapper" track-by="imageId" style=" margin-bottom: 4px;" v-for="n in col" @click="photodetail(items[n+3*col-1])" v-if="items[n+3*col-1]">
        <img :src="items[n+3*col-1].img" alt="">
        <div class="control-panel" >
          <i class="iconfont icon-eye"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyGallery",
    data(){
      return {
        items:[],
        user:{},
        col:{}
      }
    },
    methods:{


      async fetch(){

        let res = await this.$http.get('/rest/photo')

        this.items = res.data.filter(obj=>{
          return obj.hasOwnProperty('user') && obj.user._id === this.user
        })

        this.col = Math.ceil(this.items.length/4)



      },

    },
    created(){
      this.user = localStorage.user
      this.fetch()

    }
  }
</script>

<style scoped lang="scss">
  /*.container {*/
  /*  padding: 15px;*/
  /*  display: flex;*/
  /*  flex-wrap: wrap;*/
  /*  width: 100%;*/

  /*  .pic {*/
  /*    height: 200px;*/
  /*    border: 1px red solid;*/

  /*    img {*/
  /*      height: 200px;*/
  /*    }*/

  /*  }*/
  /*}*/
  .waterfall {
    width: 100%;
    font-size: 0;
    text-align: center;
    padding-top: 10px;
    border: 1px #d9d9d9 solid;
    .panel-title {
      width: 100%;
      border-bottom: 1px #d9d9d9 solid;
      margin-bottom: 10px;
      color:#ff5f5f;
      font-size: 18px;
      font-family: 'PingFangSC','helvetica neue','hiragino sans gb','arial','microsoft yahei ui','microsoft yahei','simsun','sans-serif'!important;
      font-weight: bold;
    }
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
        width: 190px;

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
              font-size: 25px;

            }
          }
        }

        img {
          width: 190px;



        }



      }
    }
  }
</style>