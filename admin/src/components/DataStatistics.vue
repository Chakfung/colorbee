<template>
  <div class="statistice">
    <div class="head">
      管理员您好！
      {{nowTime}}
    </div>
    <div class="all">
      <div class="item">
        <i class="el-icon-picture-outline"></i>
        <div class="right">
          <span  class="text">图片</span>
          <span  class="num">113张</span>
        </div>
      </div>
      <div class="item">
        <i class="el-icon-camera"></i>
        <div class="right">
          <span class="text">主题</span>
          <span class="num">22个</span>
        </div>
      </div>
      <div class="item">
        <i class="el-icon-tickets"></i>
        <div class="right">
          <span class="text">博客</span>
          <span class="num">34篇</span>
        </div>
      </div>
      <div class="item">
        <i class="el-icon-magic-stick"></i>
        <div class="right">
          <span class="text">动态</span>
          <span class="num">33个</span>
        </div>
      </div>
    </div>
    <div class="sale-area">
      <div class="title">收入</div>
      <div class="item1">
        <income-chart></income-chart>
      </div>
      <div class="item2">
        <pie-chart></pie-chart>
      </div>
      <div class="item3">
        <p style="color:#4a4a4a;text-transform: uppercase;font-size: .875rem;font-weight: bold;">总营业额</p>
        <h1>￥ 65042</h1>
        <h4>Gross sales over the years</h4>
        <img src="../assets/image/chart.png" alt="">
      </div>
    </div>
    <div class="content-area">
      <div class="title">内容构成</div>
      <div class="item1 item">
        <theme-chart></theme-chart>
      </div>
      <div class="item2 item">
        <blog-chart></blog-chart>
      </div>
      <div class="item3 item">
        <photo-chart></photo-chart>
      </div>
    </div>


  </div>
</template>

<script>
  import IncomeChart from './chart/IncomeChart'
  import PieChart from './chart/PieChart'
  import ThemeChart from './chart/ThemeChart'
  import PhotoChart from './chart/PhotoChart'
  import BlogChart from './chart/BlogChart'
  export default {
    name: "DataStatistics",
    components: {
      IncomeChart,PieChart,ThemeChart,PhotoChart,BlogChart
    },
    data() {
      return {
        nowTime:''
      };
    },
    methods: {
      timeFormate(timeStamp) {
        let year = new Date(timeStamp).getFullYear();
        let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
        let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
        let week = new Date(timeStamp).getDay();
        let weeks = ["日","一","二","三","四","五","六"];
        let getWeek = "星期" + weeks[week];
        this.nowTime = year + "年" + month + "月" + date +"日"+" "+getWeek  ;
      },


    },
    mounted() {
      this.timeFormate(new Date());
    },
    beforeDestroy() {

    }
  }
</script>

<style scoped lang="scss">
  
  .statistice {
    .head {
      border-left: 5px solid #09b4c5;
      height: 50px;
      line-height: 50px;
      padding-left: 20px;
      background: #f2f2f2;
      font-family: "microsoft yahei";
      font-weight: 600;
      color: #919191;
    }
    .all {
      width: 100%;
      border-top: 2px solid #f2f2f2;
      border-bottom: 2px solid #f2f2f2;
      margin-top: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-top: 20px;
      padding-bottom: 20px;

      .item {
        cursor: pointer;
        width: 20%;
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f8f8f8;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        &:hover {
          background: rgba(222, 248, 246, 0.76);
          transform: translateY(-3px);
          transition: all 0.1s ease;
          box-shadow: 0 0 0 1px rgba(212, 212, 213, 0.86), 0 2px 4px 0 rgba(34, 36, 38, 0.08),
          0 2px 10px 0 rgba(34, 36, 38, 0.14);
        }
        i {
          width: 100px;
          height: 100px;
          font-size: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #09b4c5;
        }
        .right {
          width: 200px;
          display: flex;
          flex-direction: column;
          height: 100px;
          justify-content: center;
          align-items: center;
          .text {
            color: #aaaaaa;
            font-size: 20px;
          }
          .num {
            color: #09b4c5;
            font-size: 25px;
          }
        }
      }
    }
    .sale-area {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      /*border-bottom: 1px solid #f2f2f2;*/
      .title {
        border-left: 5px solid #09b4c5;
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
        background: #f2f2f2;
        font-family: "microsoft yahei";
        font-weight: 600;
        color: #919191;
        width: 100%;
        margin-bottom: 20px;
      }
      .item1 {
        box-shadow: 0 0 0 1px #d4d4d5, 0 2px 4px 0 rgba(34, 36, 38, 0.15),
        0 2px 10px 0 rgba(34, 36, 38, 0.25);
        border-radius: 10px;
        padding: 10px;
        width: 800px;
        height: 500px;
      }
      .item2 {
        box-shadow: 0 0 0 1px #d4d4d5, 0 2px 4px 0 rgba(34, 36, 38, 0.15),
        0 2px 10px 0 rgba(34, 36, 38, 0.25);
        border-radius: 10px;
        padding: -20px;
        display: flex;
        justify-content: center;
        align-items: center;

      }
      .item3 {
        box-shadow: 0 0 0 1px #d4d4d5, 0 2px 4px 0 rgba(34, 36, 38, 0.15),
        0 2px 10px 0 rgba(34, 36, 38, 0.25);
        border-radius: 10px;
        width: 340px;
        overflow: hidden;
        p {
          height: 5px;
          padding-left: 15px;
        }
        h1 {
          height: 30px;
          padding-left: 15px;
          font-size: 40px;
        }
        h4 {
          padding-left: 15px;
        }
        img {
          margin-top: 178px;
          width: 100%;
        }
      }
    }
    .content-area {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      /*border-bottom: 1px solid #f2f2f2;*/
      .title {
        border-left: 5px solid #09b4c5;
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
        background: #f2f2f2;
        font-family: "microsoft yahei";
        font-weight: 600;
        color: #919191;
        width: 100%;
        margin-bottom: 20px;
      }
      .item {
        width: 32%;
        box-shadow: 0 0 0 1px #d4d4d5, 0 2px 4px 0 rgba(34, 36, 38, 0.15),
        0 2px 10px 0 rgba(34, 36, 38, 0.25);
        border-radius: 10px;
      }
    }
  }

</style>