
/*
 * @Author: zengna 
 * @Date: 2019-05-14 09:56:18 
 * @Last Modified by: ZY.zengna
 * @Last Modified time: 2019-05-14 10:00:37
 */
<template>
  <div class="swiper-item" :style="{'-webkit-transform':imgLateX}">
        <img :src="img" />
  </div>
</template>

<script>
export default {
  name: 'swiper-item',
  props:{
      img:{
           type:String,
      },
      imgWidth:{
           type:Number,
           default:1200
      }
  },
  data () {
    return {

    }
  },
  computed:{
      imgLateX(){
          return 'translate3d('+(this.imgWidth)+'px,0,0)'
      }
  }
}
</script>

<style lang="css">
   .swiper-item{
       width:100%;
       position: absolute;
       top:0;
       left:0;
       height: 532px;

   }
   .swiper-item img{
       width:2300px;
       height: 532px;

   }
</style>
