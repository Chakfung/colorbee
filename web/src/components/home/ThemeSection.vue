<template>
  <div>
    <section class="background-white">
      <div class="theme">

        <div class="section-title">
          <i class="iconfont icon-leidian" style="font-size: 25px;color: #c0c000;padding-right: 10px"></i>
          <h2>主题摄影</h2>
          <p>本系统提供图库的销售.</p>
        </div>

        <div class="articalpart">

          <div class="themebox" v-for="n in 4" v-if="themeitems[n-1]" @click="appointDetail(themeitems[n-1]._id)">
            <img class="tag" src="../../assets/image/home/tag.png" alt="">
            <img class="mainpic" :src="themeitems[n-1].img[0].url" alt="" />
            <div class="content">
              <div class="title">{{themeitems[n-1].title}}</div>
              <div class="des">{{themeitems[n-1].intro}}</div>
              <div class="control">
                <ul>
                  <li><i class="iconfont icon-touxiang"></i>摄影师:{{themeitems[n-1].photographer.name}}</li>
                  <li><i class="iconfont icon-time"></i>发布时间:{{themeitems[n-1].date}}</li>
                  <li>
                    <i class="iconfont icon-tag"></i>标签:<span v-for="tag in themeitems[n-1].tag">{{tag.name}}</span>
                  </li>
                  <li><i class="iconfont icon-eye"></i>123</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
<!--        <div class="container">-->


<!--          <div class="theme-container" v-for="n in 4" v-if="themeitems[n-1]">-->
<!--            <div class="theme-item" >-->
<!--              <div class="img" :style="{backgroundImage: 'url(' +themeitems[n-1].img[0].url + ')'}"></div>-->
<!--              <div class="des">-->
<!--                <div class="title">{{themeitems[n-1].title}}</div>-->
<!--                <div class="intro">{{themeitems[n-1].intro}}</div>-->
<!--                <div class="photographer">-->
<!--                  <div class="avatar" :style="{backgroundImage: 'url(' +themeitems[n-1].photographer.avatar + ')'}"></div>-->
<!--                  <div class="name">{{themeitems[n-1].photographer.name}}</div>-->
<!--                </div>-->

<!--                <div class="price">￥{{themeitems[n-1].price}}</div>-->

<!--              </div>-->
<!--              <div class="choice">-->
<!--                <a @click="appointDetail(themeitems[n-1]._id)" class="btn-get-started animated fadeInUp scrollto">查看详情</a>-->

<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "ThemeSection",
    data(){
      return {
        themeitems:[]
      }
    },
    methods:{
      appointDetail(id){
        this.$router.push(`/appointdetail/${id}`)
      },
      async fetch(){
        const res = await this.$http.get('rest/theme')
        this.themeitems = res.data
      },
    },
    created(){
      this.fetch()
    }
  }
</script>

<style lang="scss">
  .theme {
    margin: 0 auto;
    max-width: 1200px;
    .articalpart {
      position: relative;
      left: 50%;
      transform: translate(-50%, 0);
      min-height: 800px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .themebox {
        .tag {
          position: absolute;
          top: 10px;
          right: -37px;
          width: 80px;
        }
        position: relative;
        margin-top: 20px;
        width: 960px;
        height: 220px;
        box-shadow: 0 0 0 1px #d4d4d5, 0 2px 4px 0 rgba(34, 36, 38, 0.12),
        0 2px 10px 0 rgba(34, 36, 38, 0.15);
        background: #fff;
        font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
        display: flex;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          transform: translateY(-3px);
          transition: all 0.1s ease;
          box-shadow: 0 0 0 1px #d4d4d5, 0 2px 4px 0 rgba(34, 36, 38, 0.15),
          0 2px 10px 0 rgba(34, 36, 38, 0.25);
        }
        .mainpic {
          width: 270px;
          height: 190px;
          margin-left: 15px;
          border-radius: 5px;
        }
        .content {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-left: 30px;
          height: 100%;
          .title {
            margin-top: 20px;
            height: 20px;
            width: 100%;
            font-size: 20px;
            font-weight: 500;
            &:hover {
              color: #00b5ad;
            }
          }
          .des {
            margin-top: 20px;
            width: 100%;
            padding-right: 30px;
            color: #4c4f52;
            height: 120px;
          }
          .control {
            margin-top: 5px;
            height: 30px;
            ul {
              list-style: none;
              display: flex;
              align-items: center;
              li {
                margin-right: 20px;
                color: #999999;
                font-size: 14px;
                span {
                  margin-left: 5px;
                  border: 1px rgb(1, 196, 98) solid;
                  padding: 2px;
                  border-radius: 3px;
                }
              }
            }
          }
        }
      }
    }

  }

</style>