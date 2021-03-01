<template>
  <div>
    <section class="background-white">
      <div class="theme">

        <div class="section-title">
          <h2>主题摄影</h2>
          <p>本系统提供图库的销售.</p>
        </div>

        <div class="container">


          <div class="theme-container" v-for="n in 4" v-if="themeitems[n-1]">
            <div class="theme-item" >
              <div class="img" :style="{backgroundImage: 'url(' +themeitems[n-1].img[0].url + ')'}"></div>
              <div class="des">
                <div class="title">{{themeitems[n-1].title}}</div>
                <div class="intro">{{themeitems[n-1].intro}}</div>
                <div class="photographer">
                  <div class="avatar" :style="{backgroundImage: 'url(' +themeitems[n-1].photographer.avatar + ')'}"></div>
                  <div class="name">{{themeitems[n-1].photographer.name}}</div>
                </div>

                <div class="price">￥{{themeitems[n-1].price}}</div>

              </div>
              <div class="choice">
                <a @click="appointDetail(themeitems[n-1]._id)" class="btn-get-started animated fadeInUp scrollto">查看详情</a>

              </div>
            </div>
          </div>

<!--          <div class="theme-container">-->
<!--            <div class="theme-item">-->
<!--              <div class="img" style="background-image: url(//icweiliimg6.pstatp.com/weili/sm/903376869610487821.webp);"></div>-->
<!--              <div class="des">-->
<!--                <div class="title">城市婚纱</div>-->
<!--                <div class="intro">大师傅似的给商法的范德萨撒大大飒飒的撒大苏打发士大夫</div>-->
<!--                <div class="photographer">-->
<!--                  <div class="avatar" style="background-image: url(//weiliicimg1.pstatp.com/weili/sm/909269599094964240.webp);"></div>-->
<!--                  <div class="name">吴泽锋</div>-->
<!--                </div>-->

<!--                <div class="price">￥800</div>-->

<!--              </div>-->
<!--              <div class="choice">-->
<!--                <a href="#about" class="btn-get-started animated fadeInUp scrollto">查看详情</a>-->

<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="theme-container">-->
<!--            <div class="theme-item">-->
<!--              <div class="img" style="background-image: url(//icweiliimg1.pstatp.com/weili/sm/861969356199690286.webp);"></div>-->
<!--              <div class="des">-->
<!--                <div class="title">城市婚纱</div>-->
<!--                <div class="intro">大师傅似的给商法的范德萨撒大大飒飒的撒大苏打发士大夫</div>-->
<!--                <div class="photographer">-->
<!--                  <div class="avatar" style="background-image: url(//weiliicimg1.pstatp.com/weili/sm/909269599094964240.webp);"></div>-->
<!--                  <div class="name">吴泽锋</div>-->
<!--                </div>-->

<!--                <div class="price">￥800</div>-->

<!--              </div>-->
<!--              <div class="choice">-->
<!--                <a href="#about" class="btn-get-started animated fadeInUp scrollto">查看详情</a>-->

<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="theme-container">-->
<!--            <div class="theme-item">-->
<!--              <div class="img" style="background-image: url(//weiliicimg1.pstatp.com/weili/sm/935549129559244800.webp);"></div>-->
<!--              <div class="des">-->
<!--                <div class="title">城市婚纱</div>-->
<!--                <div class="intro">大师傅似的给商法的范德萨撒大大飒飒的撒大苏打发士大夫</div>-->
<!--                <div class="photographer">-->
<!--                  <div class="avatar" style="background-image: url(//weiliicimg1.pstatp.com/weili/sm/909269599094964240.webp);"></div>-->
<!--                  <div class="name">吴泽锋</div>-->
<!--                </div>-->

<!--                <div class="price">￥800</div>-->

<!--              </div>-->
<!--              <div class="choice">-->
<!--                <a href="#about" class="btn-get-started animated fadeInUp scrollto">查看详情</a>-->

<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="theme-container">-->
<!--            <div class="theme-item">-->
<!--              <div class="img" style="background-image: url(//icweiliimg6.pstatp.com/weili/sm/540018916928389129.webp);"></div>-->
<!--              <div class="des">-->
<!--                <div class="title">城市婚纱</div>-->
<!--                <div class="intro">大师傅似的给商法的范德萨撒大大飒飒的撒大苏打发士大夫</div>-->
<!--                <div class="photographer">-->
<!--                  <div class="avatar" style="background-image: url(//weiliicimg1.pstatp.com/weili/sm/909269599094964240.webp);"></div>-->
<!--                  <div class="name">吴泽锋</div>-->
<!--                </div>-->

<!--                <div class="price">￥800</div>-->

<!--              </div>-->
<!--              <div class="choice">-->
<!--                <a href="#about" class="btn-get-started animated fadeInUp scrollto">查看详情</a>-->

<!--              </div>-->
<!--            </div>-->
<!--          </div>-->


        </div>

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
    /*border: 1px red solid;*/

    .container {

      width: 100%;
      /*border: 1px #00aaff solid;*/

      .theme-container {

        width: 100%;
        height:200px;
        border: 1px rgba(255, 0, 98, 0) solid;
        margin-top: 20px;

        .theme-item {

          height: 95%;
          margin: 10px 0;
          display: flex;
          border-radius: 10px;
          background-color: #f5f9fc;
          .img {
            width: 30%;
            /*border: 1px cyan solid;*/
            background-size: 100%;
            border-radius: 10px 0 0 10px;
            /*margin: 3px 3px;*/
          }

          .des {
            display: flex;
            flex-direction: column;
            width: 50%;
            /*border: 1px #ff0013 solid;*/
            align-items: center;
            justify-content: space-between;

            .title {
              font-size: 20px;
              font-weight:bold;
            }
            .intro {
              width: 350px;
            }

            .photographer {
             
              height: 50px;
              display: flex;
              align-items: center;

              .avatar {
                width: 50px;
                height: 50px;
                border-radius: 25px;
                -webkit-background-size: 50px;
                background-size: 50px;
                background-repeat: no-repeat;


              }
              .name {
                margin-left: 20px ;
                font-weight:bold;
              }

            }
            .price {
              color: rgba(255, 0, 19, 0.67);
              font-weight:500;
              font-size: 20px;
            }
          }

          .choice {
            width: 20%;
            display: flex;
            justify-content: center;
            align-items: center;

            a {
              background: #428bca;
              color: white;
              width: 160px;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 10px;


              &:hover {
                background: #346d9e;
                transition: 0.2s all ease;
                text-decoration: none;
              }
            }
          }

          &:hover {
            margin: 0px 0;
            transition: all 0.2s ease;
            background-color: #e7ebee;
            box-shadow: 0px 5px 10px #b8b8b8;
          }
        }
      }
    }

  }

</style>