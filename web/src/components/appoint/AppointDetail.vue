<template>
  <div class="frame" v-if="model">
    <div :class="['shade',showFlag?'show':'']"></div>
    <chat-box :class="[showFlag?'show':'']" @hide=hide()></chat-box>
    <div class="main">

      <div id="banner" v-if="model.img">
        <div class="pic">
          <a href="#" style="display:block">
                      <img :src="model.img[0].url"/></a>
          <a href="#"><img :src="model.img[1].url"/></a>
          <a href="#"><img :src="model.img[2].url"/></a>
          <a href="#"><img :src="model.img[3].url"/></a>
        </div>
        <div class="app-btn">
          <ul>
            <li class="one"><img :src="model.img[0].url"/></li>
            <li><img :src="model.img[1].url"/></li>
            <li><img :src="model.img[2].url"/></li>
            <li><img :src="model.img[3].url"/></li>
          </ul>
        </div>
      </div>

      <div class="app-info">
        <div class="title">
          {{model.title}}
        </div>
        <div class="intro">
          {{model.intro}}
        </div>
        <div class="price">
          <span>价格</span>
          <div class="number">
            ￥{{model.price}}
          </div>
        </div>
        <div class="photographer" v-if="model.photographer">
          <span>摄影师</span>
          <img class="course-authorIcon" :src="model.photographer.avatar">
          <div class="name">{{model.photographer.name}}</div>
        </div>
        <div class="photographer">
          <span>微信</span>
          <div class="name">wzfaa123456</div>
        </div>
        <div class="photographer">
          <span>电话</span>
          <div class="name">13168393103</div>
        </div>
        <div class="button-div">
          <div class="button" @click="collectTheme()"><i class="el-icon-star-off"></i>收藏</div>
          <div class="button" @click="show()"><i class="el-icon-chat-line-round"></i>咨询</div>
        </div>
      </div>


      <div class="fenge">

      </div>

      <div class="xiangqing">
<!--        保留vueeditor样式-->
        <vue-editor style="display: none;"></vue-editor>
        <div class="title">
          主题详情
        </div>
        <div v-html="model.body" class="body ql-editor"></div>
      </div>

      <div class="book">
        <div class="title">
          预约信息
        </div>
        <div class="book-info">
          <el-form lable-width="120px" @submit.native.prevent="save">

            <el-form-item label="姓名" label-width="80px">
              <el-input v-model="order.name"></el-input>
            </el-form-item>

            <el-form-item label="联系电话" label-width="80px">
              <el-input v-model="order.tel"></el-input>
            </el-form-item>

            <el-form-item label="地点" label-width="80px">
              <el-input v-model="order.address"></el-input>
            </el-form-item>

            <el-form-item label="拍摄日期" label-width="80px">
              <el-date-picker
                  v-model="order.date"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
            </el-form-item>

            <el-form-item label="备注" label-width="80px">
              <el-input v-model="order.info"></el-input>
            </el-form-item>
            <!--      npm install &#45;&#45;save vue2-editor-->
            <el-form-item>
              <el-button type="primary" native-type="submit">预约拍摄</el-button>
            </el-form-item>
          </el-form>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  // import Carousel from '../commom/carousel'
  import $ from 'jquery'
  import { VueEditor } from "vue2-editor";

  $(function(){
    $("#all li").mouseover(function(){//鼠标进入离开事件
      $(this).css("background-color","#ff00ff").siblings().css("background-color","white");
      $(this).css({"background-color":"red","font-size":"9px"}).siblings().hide();
    });
    $(window).scroll(function(){//鼠标滚动事件
      var _top=$(window).scrollTop();//获得鼠标滚动的距离
    });
    //手动播放图片
    $(".app-btn ul li").hover(function(){

      $(this).addClass("one").siblings().removeClass("one");
      let index=$(this).index();
      i=index;
      $(".pic a").eq(index).stop().fadeIn(500).show().siblings().stop().fadeIn(500).hide();
    });
    //自动播放图片
    var i=0;
    var t=setInterval(autoplay,2000);
    function autoplay(){
      i++;
      if(i>5)i=0;
      $(".app-btn ul li").eq(i).addClass("one").siblings().removeClass("one");
      $(".pic a").eq(i).stop().fadeIn(500).show().siblings().stop().fadeIn(500).hide();
    }

    $("#banner").hover(function(){
      clearInterval(t);
    },function(){
      t=setInterval(autoplay,1000);
    });
  });
import ChatBox from '../commom/ChatBox.vue'
  export default {

    name: "AppointDetail",
    components:{

        VueEditor,
        ChatBox
    },
    props:{
      id:{}
    },
    data(){
      return {
        showFlag: false,
        model:{

        },
        order:{
          theme:null,
          customer:null
        },
        collect:{
          theme:null,
          user:null
        }
      }
    },

    methods:{
      hide () {
        this.showFlag = false
      },
      show () {
        this.showFlag = true
      },
      async collectTheme() {
        if(!localStorage.user){
          this.$router.push('/login')
        }
        let res
        res = await this.$http.post('rest/collect_themes',this.collect)
        if(res){
          this.$message({
            type:'success',
            message:'收藏主题成功'
          })
        }
      },
      async save(){
        if(!localStorage.user){
          this.$router.push('/login')
        }
        let res
        res = await this.$http.post('rest/appoint_orders',this.order)
        this.$router.push('/appoint')
        this.$message({
          type:'success',
          message:'预约成功'
        })
      },
      async fetch(){
        const res = await this.$http.get(`rest/theme/${this.id}`)
        this.model = res.data
        this.order.theme = res.data._id
        this.collect.theme = res.data._id
        this.order.customer = localStorage.user
        this.collect.user = localStorage.user
      },
    },
    created(){
      this.fetch()
    }
  }
</script>

<style lang="scss" scoped>

  .frame {
    font-family: "microsoft yahei";
    position: absolute;
    top: 70px;
    width: 100%;
    background-color: #eaeaea;
    display: flex;
    justify-content: center;
    .shade {
      position: absolute;
      z-index: 10;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.33);
      display: none;
      &.show {
        display: block;
      }
    }
    .main {
      width: 1000px;
      background-color: #f8f8f8;
      min-height: 1000px;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;

      #banner{
        margin-top: 10px;
        margin-left: 10px;
        width:380px;
        height:454px;
        position:relative;/*相对定位,相对于.btn按钮*/
        text-align:left;
        display: flex;
        flex-direction: column;

        .pic {
          width: 100%;
          height: 400px;
          position:relative;/*相对定位.对应.pic img*/

          a{
            display:none;
          }

          img {
            display:block;/*默认有图片不显示*/
            position:absolute;/*绝对定位.对应的是.pic这个div*/
            top:20px;
            left:20px;
            height: 320px;
          }
        }

        .app-btn{
          bottom:5px;
          width: 100%;
          height: 100px;

          ul{
            li{
              list-style-type:none;
              width:70px;
              height:70px;
              float:left;
              text-align:center;
              cursor:pointer;/*鼠标移动变手指状态*/
              margin-left:15px;

              &.one {
                border: 1px #7dfdff solid;
              }

              img{
                width: 70px;
                height: 70px;
              }
            }
          }
        }
      }
    }

    .app-info {
      background: #fff;
      border-radius: 10px;
      margin: 10px;
      padding-bottom: 10px;
      flex: 1;
      display: flex;
      flex-direction: column;
      .button-div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .button {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          height: 35px;
          background: #46b0d5;
          border: none;
          color: #fff;
          font-size: 20px;
          border-radius: 5px;
          &:hover {
            background: rgba(103, 197, 255, 0.71);
          }
        }
      }
      .title {
        text-align: center;
        margin-top: 20px;
        font-size: 35px;
        color: #2774c4;
      }
      .intro {
        margin-top: 15px;
        text-align: center;
      }
      .price{
        /*background-color: rgba(255, 188, 190, 0.55);*/
        width: 80%;
        height: 50px;
        margin: 20px auto;

        span {
          padding-left: 10px;
          display: inline-block;
          height: 100%;
          line-height: 50px;
          font-size: 20px;
          font-weight: 600;
          color: #5b5a59;
        }
        .number {
          display: inline-block;
          margin-left: 30px;
          font-size: 20px;
          color: red;
        }
      }
      .photographer {
        width: 80%;
        margin:10px auto;

        span {
          padding-left: 10px;
          display: inline-block;
          height: 100%;
          line-height: 50px;
          font-size: 20px;
          font-weight: 600;
          color: #5b5a59;
        }

        img {
          margin-left: 20px;
          width: 60px;
          height: 60px;
          border-radius: 40px;
        }
        .name {
          display: inline-block;
          margin-left: 20px;
          font-size: 20px;
          color: #5b5a59;
        }

      }

    }
    .fenge {
      margin-top: 20px;
      width: 100%;
      height: 20px;
      background-color: #eaeaea;
    }
    .xiangqing{
      width: 100%;
      min-height: 600px;

      .title {
        margin-top: 20px;
        width: 100%;
        border-bottom: 1px #bebebe solid;
        font-size: 20px;
        padding-left: 10px;
        font-weight: 800;
      }

      .body {
        width: 100%;
      }
    }

    .book {
      width: 100%;
      border-top: 12px solid #eaeaea;

      .title {
        margin-top: 20px;
        width: 100%;
        border-bottom: 1px #bebebe solid;
        font-size: 20px;
        padding-left: 10px;
        font-weight: 800;
      }

      .book-info {
        padding: 50px;
      }

    }
  }

</style>

<!--<style lang="scss">-->
<!--  .ql-align-center {-->
<!--    text-align: center;-->
<!--  }-->
<!--</style>-->