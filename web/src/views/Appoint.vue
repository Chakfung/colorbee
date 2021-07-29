<template>
  <div class="appoint">
    <div class="appoint-main">



      <div class="widget-courselist">
        <ul class="pagelist-wrapper">

          <li class="impression-item impression-viewed" data-post-id="69457967" v-for="item in items" :key="item._id">
            <div class="item-info">
              <a @click="blogDetail(item._id)" class="item-title" target="_blank">
                {{item.title}}
              </a>
              <div class="item-album">
                <a @click="blogDetail(item._id)" href="https://tuchong.com/16822941/69457967/" class="album-item" target="_blank" v-for="imgitem in item.img"><img :src="imgitem.url"></a>
                <span class="hint">共4图</span>
              </div>
              <p class="item-desc">
                {{item.intro}}
              </p>
            </div>
            <div class="item-related">
              <div class="item-tags has-tags">
                <a @click="blogDetail(item._id)" v-for="tagitem in item.tag" data-popover-type="event" data-popover-id="865259" class="event-tag popover-action" target="_blank">{{tagitem.name}}</a>

              </div>
              <div class="item-handler">
                <span>{{item.photographer.name}}</span>
                <span> |
				88阅读
				· 33喜欢
				· 1评论
			</span>
              </div>
            </div>
          </li>

        </ul>
        <i class="icon-loading--yellow" style="display: none;"></i>
        <div class="pagelist-load-more" style="display: block;">加载更多</div>
        <i class="icon-end" style="display: none;"></i>
      </div>
      <aside class="vision-aside">
        <div>
          <h3 class="aside-title">预约反馈</h3>
          <ul class="vision-intro">
            对预约有疑问？
            <a target="_balnk" href="https://wj.qq.com/s/885142/b5b4">
              点击提交
            </a>
          </ul>
        </div>

        <div>
          <h3 class="aside-title">摄影师</h3>
          <ul class="course-authorList vision-intro">
            <li class="course-author">
              <a target="_blank"  class="course-authorLink">
                <img class="course-authorIcon" src="https://sf1-tccdn-tos.pstatp.com/obj/tuchong-avatar/ll_1535376_5">
                <i class="vip-right vip-blue"></i>
                <span class="course-authorInfo">
                        AIRPHOTO
                    </span>
              </a>
            </li>
            <li class="course-author">
              <a target="_blank"  class="course-authorLink">
                <img class="course-authorIcon" src="https://lf3-tccdn-tos.pstatp.com/obj/tuchong-avatar/ll_1853008_13">
                <i class="vip-right vip-yellow"></i>
                <span class="course-authorInfo">
                        小饭团儿Midy
                    </span>
              </a>
            </li>
            <li class="course-author">
              <a target="_blank"  class="course-authorLink">
                <img class="course-authorIcon" src="https://lf1-tccdn-tos.pstatp.com/obj/tuchong-avatar/ll_395013_3">
                <i class="vip-right vip-yellow"></i>
                <span class="course-authorInfo">
                        Thomas看看世界
                    </span>
              </a>
            </li>
            <li class="course-author">
              <a target="_blank"  class="course-authorLink">
                <img class="course-authorIcon" src="https://lf6-tccdn-tos.pstatp.com/obj/tuchong-avatar/ll_1046081_13">
                <i class="vip-right vip-yellow"></i>
                <span class="course-authorInfo">
                        芥茉在拍照
                    </span>
              </a>
            </li>
            <li class="course-author">
              <a target="_blank"  class="course-authorLink">
                <img class="course-authorIcon" src="https://sf3-tccdn-tos.pstatp.com/obj/tuchong-avatar/ll_1428541_4">
                <i class="vip-right vip-yellow"></i>
                <span class="course-authorInfo">
                        韩凯
                    </span>
              </a>
            </li>
            <li class="course-author">
              <a target="_blank"  class="course-authorLink">
                <img class="course-authorIcon" src="https://lf1-tccdn-tos.pstatp.com/obj/tuchong-avatar/ll_1163103_3">
                <i class="vip-right vip-yellow"></i>
                <span class="course-authorInfo">
                        好摄大叔
                    </span>
              </a>
            </li>
            <li class="course-author">
              <a target="_blank"  class="course-authorLink">
                <img class="course-authorIcon" src="https://sf1-tccdn-tos.pstatp.com/obj/tuchong-avatar/ll_418362_2">
                <i class="vip-right vip-yellow"></i>
                <span class="course-authorInfo">
                        哲铭
                    </span>
              </a>
            </li>
            <li class="course-author">
              <a target="_blank"  class="course-authorLink">
                <img class="course-authorIcon" src="https://lf6-tccdn-tos.pstatp.com/obj/tuchong-avatar/ll_364961_1">
                <i class="vip-right vip-yellow"></i>
                <span class="course-authorInfo">
                        摄影师-阿木
                    </span>
              </a>
            </li>
            <li class="course-author">
              <a target="_blank"  class="course-authorLink">
                <img class="course-authorIcon" src="https://lf6-tccdn-tos.pstatp.com/obj/tuchong-avatar/ll_1059071_2">
                <i class="vip-right vip-yellow"></i>
                <span class="course-authorInfo">
                        影叶的光色世界
                    </span>
              </a>
            </li>
          </ul>
        </div>


        <div>
          <h3 class="aside-title about-vision">关于彩蜂约拍</h3>
          <div class="vision-intro">
            成为摄影师的第一步，收录优秀摄影师。<br>
            成为摄影师吧 <a>@加入</a> ，

          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Blog",
    data(){
      return {
        items:[]
      }
    },
    methods:{
      blogDetail(id){

        this.$router.push(`/appointdetail/${id}`)
      },

      async fetch(){
        const res = await this.$http.get('https://www.chakfung-ng.com/web/api/rest/theme')
        this.items = res.data
      },
    },
    created(){
      this.fetch()
    }
  }
</script>

<style lang="scss" scoped>
  .appoint {
    position: absolute;
    top: 70px;

    width: 100%;
    background-image: url(../assets/image/backgroundImg.jpg);
    background-repeat: repeat;
    /*background-color: #eaeaea;*/
    display: flex;
    justify-content: center;

    .appoint-main {

      width: 1000px;
      background-color: #f8f8f8;
      min-height: 1000px;
      display: flex;

      .widget-courselist {

        padding: 34px 50px 0 30px;

        .pagelist-wrapper {
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            cursor: pointer;
            padding: 32px 0 20px;
            border-top: 1px solid #eaeaea;
            font-size: 0;

            .item-cover {
              position: relative;
              display: inline-block;
              width: 150px;
              height: 150px;
              margin-right: 30px;

              img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }

            .item-info {
              display: inline-block;
              width: 100%;
              vertical-align: top;
              font-size: 14px;
              overflow: hidden;

              .item-album {
                position: relative;
                margin-top: 20px;
                font-size: 0;

                .album-item {
                  display: inline-block;
                  width: 150px;
                  height: 150px;
                  margin-left: 10px;

                  img {
                    width: 100%;
                    height: 100%;
                  }
                  &:first-child {
                    margin-left: 0;
                  }
                }
              }
              .item-title {
                display: block;
                width: 100%;
                font-size: 22px;
                line-height: 1;
                color: #259;
                font-weight: 700;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }

              .item-desc {
                max-height: 84px;
                padding: 0;
                margin: 20px 0 0;
                color: #9a9a9a;


              }
            }

            .item-related {
              position: relative;
              display: block;
              margin: 10px 0 0;
              font-size: 12px;
              width: 630px;


              .item-tags {
                height: 22px;
                padding-right: 300px;
                font-size: 0;
                overflow: hidden;


                &::before {

                    content: " ";
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background-image: url(data:image/png;base64,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);
                    background-position: -103px 81px;
                    vertical-align: middle;

                }

                a {
                  display: inline-block;
                  height: 22px;
                  padding: 0 12px;
                  border: 1px solid #e3e4e6;
                  -webkit-border-radius: 11px;
                  -moz-border-radius: 11px;
                  border-radius: 11px;
                  margin-left: 10px;
                  color: #444444;
                  font-size: 12px;
                  text-align: center;
                  line-height: 22px;
                  vertical-align: middle;
                }
              }

              .item-handler {
                position: absolute;
                top: 3px;
                right: 0;

                span {
                  color: #808388;
                }
              }
            }
          }
        }
      }

      .vision-aside {
        display: inline-block;
        width: 290px;
        font-size: 14px;
        vertical-align: top;

        .aside-title {
          position: relative;
          height: 18px;
          padding-left: 30px;
          margin: 34px 0 0;
          font-size: 18px;
          line-height: 1;
          color: #000;
          font-weight: 400;

          &::before {

              position: absolute;
              left: 0;
              content: " ";
              width: 2px;
              height: 18px;
              background-color: #259;

          }
        }
        .vision-intro {
          margin: 20px 30px;
          color: #B6B6B6;
        }

        .course-authorList {
          .course-author {
            display: inline-block;
            width: 30%;
            margin-left: 1%;
            margin-right: 1%;

            .course-authorLink {
              display: inline-block;
              color: #000;
              width: 100%;
              position: relative;
            }
            .course-authorIcon {
              width: 100%;
              -webkit-border-radius: 100%;
              -moz-border-radius: 100%;
              border-radius: 100%;
            }
            .vip-right {
              width: 20px;
              height: 20px;
              position: absolute;
              bottom: 27px;
              right: 0;
              z-index: 1;
            }
            .course-authorInfo {
              display: block;
              width: 100%;
              text-align: center;
              margin: 5px 0;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }


        }

        a {
          text-decoration: none;
          color: #259;
        }
      }
    }



  }

</style>