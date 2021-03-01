<template>
  <div id="light" class="white_content">
    <div class="pane-content">

      <div class="close">
        <a  @click="closepop()">
          <i class=" iconfont icon-baseline-close-px"></i>
        </a>
      </div>

      <div class="content">
        <div class="pic">

          <img :src="this.pop.img" alt="">
          <!--            //weiliicimg6.pstatp.com/weili/sm/1068392837436801163.webp
          https://weiliicimg1.pstatp.com/weili/l/820554584299274259.webp
          -->


        </div>
        <div class="detail__right">
          <div class="detail__info-section">
            <p title="卡通2021年牛年新年春节喜庆元旦年货节送礼红包" class="detail__title">
              {{this.pop.name}}
            </p>
            <p title="" class="detail__intro">
              {{this.pop.intro}}
            </p>
            <p title=" " class="detail__remark">

            </p>
            <div class="detail__info"><p class="detail__info-row id"><label>编号</label>
              1068392837432344882
            </p>
              <p class="detail__info-row size"><label>文件大小</label>
                21.1MB
              </p><!----><p class="detail__info-row usage"><label>用途</label><span>商业用途，可用于营利性的商业、广告目的</span></p>
              <p class="detail__info-row auth"><label>价格</label><span>
                ￥{{this.pop.price}}
              </span><!----></p>
              <p class="detail__info-row photographer-row"><label>署名</label><span class="photographer-row__content"><a
                  href="/s/RDn1mX" target="_blank" class="photographer-row__photographer">
                  keeein
                </a><!----><span>图虫创意</span></span></p></div>
          </div>
          <div class="detail__auth-section">
            <div class="detail__auth-choice"><span style="margin-right: 15px;">授权</span><span
                class="detail__auth active">
              标准
              <!----></span><!----></div>
            <div data-activeindex="0" class="detail__image-choice"><span class="auth-arrow"
                                                                         style="left: 63px;"></span><img
                src="https://s1.tuchong.com/content-image/202003/79760a0b2ca824685288ecb043e02c69.png" alt=""
                class="dpi-image" style="display: none;">
              <div class="detail__table">
                <div class="detail__thead">
                  <div class="detail__th detail__tchoice">
                    选择
                  </div>
                  <div class="detail__th detail__tformat">
                    格式
                  </div>
                  <div class="detail__th detail__tpixel">
                    像素
                  </div>
                  <div class="detail__th detail__trange">
                    尺寸（分辨率/图片大小）
                    <img src="https://s1.tuchong.com/content-image/202003/a77bcafe1a645f48c924ffa8a7152789.png" alt=""
                         class="icon"></div>
                </div>
                <div class="detail__tr"><!---->
                  <div class="detail__td detail__tchoice"><label class="ui-radio detail__radio circle colorful"><input
                      type="radio" class="ui-radio-input" value="0"><span class="ui-radio-label"></span></label></div>
                  <div class="detail__td detail__tformat"><span class="detail__format">EPS</span></div>
                  <div class="detail__td detail__tpixel">
                    使用
                    <img
                        src="data:image/jpeg;base64,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"
                        style="position: relative; top: 3px; width: 16px;">
                    Adobe Illustrator 打开，可无限拉伸
                  </div>
                </div>
                <div class="detail__tr"><!---->
                  <div class="detail__td detail__tchoice"><label class="ui-radio detail__radio circle colorful"><input
                      type="radio" class="ui-radio-input" value="1"><span class="ui-radio-label"></span></label></div>
                  <div class="detail__td detail__tformat"><span class="detail__format">JPG</span></div>
                  <div class="detail__td detail__tpixel">
                    中 1000*666
                  </div>
                  <div class="detail__td detail__trange">
                    35.28*23.50cm （72 dpi）
                  </div>
                </div>
                <div class="detail__tr active"><!---->
                  <div class="detail__td detail__tchoice"><label
                      class="ui-radio detail__radio circle colorful is-checked"><input type="radio"
                                                                                       class="ui-radio-input"
                                                                                       value="2"><span
                      class="ui-radio-label"></span></label></div>
                  <div class="detail__td detail__tformat"><span class="detail__format">JPG</span></div>
                  <div class="detail__td detail__tpixel">
                    小 640*426
                  </div>
                  <div class="detail__td detail__trange">
                    22.58*15.03cm （72 dpi）
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="detail__btn-section">
            <div class="detail__loading-tips" style="display: none;">
              预计需要 - 秒
            </div>
            <div class="detail__colorbtn detail__loadingbtn" style="display: none;">
              <div class="detail__loadingbar" style="width: 0%;"></div>
              <svg width="17" height="17" viewBox="0 0 17 17" class="loading-icon">
                <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="2.5">
                  <circle cx="8.5" cy="8.5" r="6.5" opacity=".5"></circle>
                  <path stroke-linecap="round" d="M8.5 2a6.5 6.5 0 0 0 0 13A6.5 6.5 0 0 0 15 8.5"></path>
                </g>
              </svg>
              <span style="margin-left: 0.2em;">下载中...0%</span></div><!---->
            <div class="detail__colorbtn" data-vc-bind-click="throttle"><span>
              无水印下载
            </span>
              <svg width="16" height="17" viewBox="0 0 16 17">
                <g fill="#FFF" fill-rule="evenodd">
                  <rect width="2.462" height="15.786" x="6.154" rx="1.231"></rect>
                  <rect width="2.462" height="9.714" x="3.121" y="6.722" rx="1.231"
                        transform="rotate(-45 4.351 11.579)"></rect>
                  <rect width="2.462" height="9.714" x="9.275" y="6.722" rx="1.231"
                        transform="rotate(45 10.505 11.579)"></rect>
                </g>
              </svg><!----></div>
            <div class="detail__colorbtn" style="width: 82px; padding: 0px; margin-left: 7px;" @click="buyPhoto()">
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20"
                   style="filter: invert(100%);">
                <g fill="#000" fill-rule="evenodd">
                  <rect width="8" height="1.5" x="-2.618" y="3.75" rx=".75" transform="rotate(90 10.382 20.5)"></rect>
                  <rect width="8" height="1.5" x="-2.618" y="3.75" rx=".75"
                        transform="rotate(-180 13.94 7.94)"></rect>
                  <g fill-rule="nonzero" stroke="#000" stroke-width=".4">
                    <path
                        d="M10.014 16.337c.71 0 1.288.58 1.288 1.297 0 .716-.577 1.296-1.288 1.296-.712 0-1.289-.58-1.289-1.296 0-.716.577-1.297 1.289-1.297zm5.779 0c.711 0 1.288.58 1.288 1.297 0 .716-.577 1.296-1.288 1.296-.712 0-1.289-.58-1.289-1.296 0-.716.577-1.297 1.289-1.297zm1.605-5.29C19.402 10.962 21 9.301 21 7.264s-1.598-3.698-3.602-3.784v-.004H5.263L4.647 1.69C4.51.742 3.658 0 2.706 0H.773A.775.775 0 0 0 0 .778c0 .43.346.777.773.777h1.933c.185 0 .385.175.41.359l.002.008L6.12 13.61c.137.947.989 1.69 1.941 1.69h10.152a.775.775 0 0 0 .773-.778.775.775 0 0 0-.773-.778H8.062a.453.453 0 0 1-.412-.366l-.56-2.327h10.308v-.005zM5.646 5.064h11.752v.008a2.194 2.194 0 0 1 2.024 2.192c0 1.16-.893 2.108-2.024 2.192v.008H6.706l-1.06-4.4z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="detail__btn detail__no-icon-btn" data-vc-bind-click="throttle" style="font-weight: bold;">
              <span class="detail__no-icon-btntext">下载样图</span></div>
            <div class="detail__btn">
              <svg width="30" height="19" viewBox="0 0 30 19">
                <g fill="#000" fill-rule="evenodd">
                  <rect width="8" height="1.5" x="-2.618" y="3.75" rx=".75" transform="rotate(90 10.382 19.5)"></rect>
                  <rect width="8" height="1.5" x="-2.618" y="3.75" rx=".75"
                        transform="rotate(-180 13.44 7.44)"></rect>
                  <g fill-rule="nonzero" stroke="#000" stroke-width=".3">
                    <path
                        d="M10.5 18.1c-.392 0-.783-.15-1.082-.452l-6.677-6.735A5.99 5.99 0 0 1 1 6.67a5.99 5.99 0 0 1 1.741-4.243A4.778 4.778 0 0 1 6.154 1c1.29 0 2.5.506 3.414 1.427l.932.941.932-.94a4.776 4.776 0 0 1 3.414-1.426c1.289 0 2.5.507 3.413 1.425A5.99 5.99 0 0 1 20 6.67a5.99 5.99 0 0 1-1.741 4.243l-6.677 6.735c-.299.301-.69.452-1.082.452zM6.154 2.966c-.77 0-1.492.302-2.035.852a4.032 4.032 0 0 0-1.172 2.854c0 1.079.415 2.091 1.172 2.855l6.381 6.439 6.38-6.439a4.066 4.066 0 0 0 0-5.707 2.866 2.866 0 0 0-4.072 0l-1.62 1.635a.965.965 0 0 1-1.376 0L8.192 3.82a2.84 2.84 0 0 0-2.038-.854z"></path>
                  </g>
                </g>
              </svg>
              <span class="detail__btntext">收藏</span></div>
            <div class="download-feedback" style="display: none;">
              下载图片有问题？
              <span class="download-feedback-word">
    点击这里报错
    <div class="download-feedback-items" style="display: none;"><div
        class="download-feedback-item"><span>图片模糊</span></div><div
        class="download-feedback-item"><span>格式错误</span></div><div
        class="download-feedback-item"><span>丢失元素</span></div><div
        class="download-feedback-item"><span>尺寸异常</span></div><div
        class="download-feedback-item"><span>其他原因</span></div><textarea maxlength="40" class="download-feedback-input"
                                                                        style="display: none;"></textarea><span
        class="download-feedback-btn download-feedback-btn--disabled">提交</span></div></span></div>
            <p class="detail__telephone  ">
              如需无水印样图请致电4000-666-417图片顾问
            </p><!----></div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "PopPanel",
    methods:{
      async buyPhoto(){
        this.model.photo = this.pop._id
        this.model.user = this.user._id
        const res = await this.$http.post('rest/buy_gallerys',this.model)
        this.$message({
          type:'success',
          message:'购买成功'
        })
        $('#light').css({"display":"none"});
        $('#fade').css({"display":"none"});
      },
      closepop(){
        $('#light').css({"display":"none"});
        $('#fade').css({"display":"none"});
      }
    },
    props:{
      pop:{},
      user:{}
    },
    data(){
      return {
        model:{}
      }
    },
    created(){

    }

  }
</script>

<style scoped lang="scss">
  .white_content {

    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90%;

    transform:translate(-50%,-50%);
    background-color: white;
    z-index:1002;
    overflow: auto;
    border-radius: 5px;
    box-shadow: 0px  0px 10px black;

    .pane-content {
      display: flex;
      width: 98%;
      height: 98%;

      margin-left: 14px;
      margin-top: 5px;
      flex-direction: column;
      overflow: hidden;



      .close {
        width: 100%;
        height: 30px;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        border-bottom: 1px gray solid;
        a {
          text-decoration: none;

          &:hover {
            color: black;
          }
        }
        .close-icon {
          height: 5px;
          width: 5px;
          border:1px solid red ;


        }

      }

      .content {
        width: 100%;
        flex: 1;
        display: flex;


        .pic {

          width: 67%;


          padding: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;

          img {
            max-width:100%;
            height:450px;
            object-fit:cover;
          }



        }
        .detail__right {
          flex: 1;
          display: flex;
          margin-left: 17px;
          width: 464px;
          flex-direction: column;
          .detail__info-section {
            max-width: 470px;
            .detail__title {
              margin-bottom: 5px;
              font-size: 22px;
              font-weight: 500;
              word-break: break-all;
            }
            .detail__intro {

              font-size: 14px;

            }


            .detail__remark {
              margin-bottom: 15px;
            }

            .detail__info {
              padding: 14px;
              background: #f7f7f7;
              border-radius: 5px;
              border: 1px solid #e7e7e7;
              .detail__info-row {
                position: relative;
                display: flex;
                line-height: 12px;
                margin-top: -10px;
                label {
                  width: 60px;
                  font-size: 14px;
                  text-align: justify;
                  font-weight: 300;
                  color: #7b7f81;
                  height: 22px;
                  overflow: hidden;
                  margin-right: 15px;

                  &::after {
                    content: '';
                    display: inline-block;
                    width: 100%;
                  }
                }
              }
              .detail__info-row.id {
                font-size: 16px;
                font-weight: 600;
                color: #535353;
              }
              .detail__info-row + .detail__info-row {
                margin-top: 5px;
              }

              .detail__info-row.usage {
                color: #e30951;
              }
            }
          }

          .detail__auth-section {
            margin-top: 16px;
            display: flex;
            color: #7b7f81;
            flex-direction: column;
            .detail__auth-choice {
              margin-bottom: 15px;
              .detail__auth {
                cursor: pointer;
                text-align: center;
                line-height: 24px;
                padding: 0 11px;
                display: inline-block;
                border-radius: 12px;
                background-color: #f9f9f9;
                color: #7b7f81;
                margin-right: 10px;
              }
              .detail__auth.active {
                cursor: default;
                color: #ffffff;
                background-color: #000;
              }
            }

            .detail__image-choice {
              position: relative;
              border-radius: 5px;
              border: 1px solid #e7e7e7;
              margin-bottom: 10px;
              .auth-arrow {
                position: absolute;
                width: 10px;
                height: 10px;
                transform: rotate(135deg);
                border-bottom: 1px solid #e7e7e7;
                border-left: 1px solid #e7e7e7;
                background: #fff;
                top: -6px;
                left: 101px;
                transition: 0.2s left ease-in-out;
              }
              .dpi-image {
                position: absolute;
                width: 634px;
                z-index: 10;
                transform: translate(-220px, -199px);
              }
              .detail__table {
                border-collapse: collapse;
                width: 100%;
                padding: 0 20px;
                .detail__thead, .detail__tr {
                  position: relative;
                  display: flex;
                  color: #222222;
                }
                .detail__thead{
                  .detail__th {
                    position: relative;
                    line-height: 40px;
                    color: #000000;
                    font-weight: 500;
                  }
                  .detail__tchoice {
                    width: 40px;
                  }
                  .detail__tformat {
                    width: 68px;
                  }
                  .detail__tpixel {
                    width: 124px;
                  }
                }
                .detail__tr {
                  position: relative;
                  cursor: pointer;
                  .detail__td {
                    position: relative;
                    text-align: left;
                    line-height: 46px;
                    font-weight: 600;
                    white-space: nowrap;
                  }
                  .detail__tchoice {
                    width: 40px;
                    .detail__radio {
                      display: inline;
                      margin-right: 0;
                      bottom: 2px;
                      .ui-radio-input {
                        position: absolute;
                        width: 0;
                        height: 0;
                        margin: 0;
                        padding: 0;
                        opacity: 0;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        border: none;
                        &::before {
                          border: 2px solid #000000;
                          width: 18px !important;
                          height: 18px !important;
                          top: 2px !important;
                          border-radius: 50%;
                        }
                      }

                      .ui-radio-label{
                        &::after {
                          background: linear-gradient(to left, #f58365, #ff188a);
                          width: 10px !important;
                          height: 10px !important;
                          top: 6px !important;
                          left: 4px !important;
                          content: '';
                          position: absolute;

                          box-sizing: border-box;

                          transition-duration: 0.28s;
                          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                          transition-property: transform;
                          transform: scale3d(0, 0, 0);
                          border-radius: 50%;
                          background-color: #22d18e;
                          cursor: pointer;
                        }
                      }
                    }
                  }
                  .detail__tformat {
                    width: 68px;
                  }
                  .detail__tpixel {
                    width: 124px;
                  }
                }
                .detail__tr.active {
                  color: #dd0e54;
                }


              }

            }
          }


          .detail__btn-section {
            margin-top: auto;
            position: relative;
            .detail__colorbtn{
              cursor: pointer;
              line-height: 42px;
              border-radius: 28px;
              text-align: center;
              color: #fff;
              font-size: 16px;
              background-image: linear-gradient(to left, #f58365, #ff188a);
              display: inline-block;
              overflow: hidden;
              font-weight: bold;
            }
            .detail__btn {
              cursor: pointer;
              width: 82px;
              height: 42px;
              border-radius: 21px;
              border: 1px solid #eee;
              text-align: center;
              overflow: hidden;
              position: relative;
              display: inline-block;
              margin-left: 7px;
            }
          }

        }

      }



    }



  }

</style>