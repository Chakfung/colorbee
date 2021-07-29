<template>
  <div class="widget-courselist">
    <div class="panel-title">收藏主题</div>
    <div class="nodata" v-if="items.length===0"><img src="../../assets/image/me/nodata.png" alt="">暂无数据</div>
    <ul class="pagelist-wrapper" v-if="items">

      <li class="impression-item impression-viewed" data-post-id="69457967" v-for="item in items" :key="item._id">

        <div class="item-info">
          <a @click="blogDetail(item.theme._id)"  class="item-title" >
            {{item.theme.title}}
          </a>
          <div class="item-album">


            <a href="https://tuchong.com/16822941/69457967/" class="album-item" target="_blank" v-for="imgitem in item.theme.img"><img :src="imgitem.url"></a>

            <span class="hint">共4图</span>

          </div>

          <p class="item-desc">
            {{item.theme.intro}}
          </p>

        </div>

        <div class="item-related">

          <div class="item-tags has-tags">
            <a @click="blogDetail(item.theme._id)" v-for="tagitem in item.theme.tag"   class="event-tag popover-action" >{{tagitem.name}}</a>
          </div>

          <div class="item-handler">

            <span>
              <button class="cancel " @click="cancelCT(item._id)"><i class="iconfont icon-star" ></i>取消收藏</button>

			      </span>
          </div>
        </div>

      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    name: "CollectTheme",
    data(){
      return {
        items:[],
        id:{}
      }
    },
    methods:{
      async cancelCT(id){
        const res = await this.$http.delete(`rest/collect_themes/${id}`)
        this.$router.push('collecttheme')
        this.$message({
          type:'success',
          message:'取消成功'
        })
        this.fetch()
      },

      async fetch(){
        const res = await this.$http.get(`rest/collect_themes/${this.id}`)
        this.items = res.data
      },
    },
    created(){
      this.id =  localStorage.user
      this.fetch()
    }
  }
</script>

<style lang="scss" scoped>

  .widget-courselist {
    font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
    padding: 20px;
    border-radius: 10px;

    .nodata {
      width: 100%;
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .panel-title {
      width: 100%;
      border-bottom: 1px #d9d9d9 solid;
      margin-bottom: 10px;
      color: #2063aa;
      font-size: 18px;
      font-weight: bold;
    }
    .pagelist-wrapper {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-top: 20px;
        padding: 20px;
        box-shadow: 0 0 0 1px #d4d4d5, 0 2px 4px 0 rgba(34, 36, 38, 0.12),
        0 2px 10px 0 rgba(34, 36, 38, 0.15);
        border-radius: 5px;
        font-size: 0;

        &:hover {
          transform: translateY(-3px);
          transition: all 0.1s ease;
          box-shadow: 0 0 0 1px #d4d4d5, 0 2px 4px 0 rgba(34, 36, 38, 0.15),
          0 2px 10px 0 rgba(34, 36, 38, 0.25);
        }
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
              border: 1px rgb(1, 196, 98) solid;
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
            top: -20px;
            right: 0;

            span {
              color: #808388;
              .cancel{
                height: 35px;
                border: none;
                display: flex;
                align-items: center;
                background-color: #428bca;
                color: #fff;
                font-size: 20px;
                border-radius: 5px;
                .icon-star {
                  color: rgb(255, 255, 255);
                }
                &:hover {
                  background-color: #2d5e8a;
                }
              }

            }
          }
        }
      }
    }
  }
</style>