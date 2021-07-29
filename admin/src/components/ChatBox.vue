<template>
  <div class="test3">
    <span class="namea">用户咨询</span>
    <i class="el-icon-close" @click="" @click=hide()></i>
    <div class="msg" ref="box">
      <div v-for="item in list" :class="[item.type,'msg-item']">
        <img :src="item.avatar" alt="">
        <div class="p">
          {{item.content}}
        </div>
      </div>
    </div>
    <div class="input-group">
      <input type="text" v-model="model.contentText" @keyup.enter="sendText">
      <button @click="sendText">发送</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index3",
    data() {
      return {
        list: [],//聊天记录的数组
        contentText: "",//input输入的值
        model: {
          user: '1',
          contentText: "",
          avatar: 'https://lf1-tccdn-tos.pstatp.com/obj/tuchong-avatar/l_16822941_11'
        },
        message: '',
        first: true
      }
    },
    methods: {
      hide () {
        this.$emit('hide','')
      },
      //发送聊天信息
      sendText() {
        let that = this;
        if(!this.first) {
          this.list = [...this.list, {type: "mine", content: this.model.contentText, avatar: 'https://lf1-tccdn-tos.pstatp.com/obj/tuchong-avatar/l_16822941_11'}];//通过type字段进行区分是自己（mine）发的还是系统（robot）返回的
        }
        this.first = false
        this.backText(function () {
          that.model.contentText = "";//加回调在得到返回数据的时候清除输入框的内容
        });
      },
      backText(callback) {
        let that = this;
        if (window.WebSocket) {
          let ws = new WebSocket("ws://localhost:8001");
          ws.onopen = function (e) {
            console.log("链接服务器成功");
            ws.send(JSON.stringify(that.model));
            callback();
          };
          ws.onclose = function (e) {
            console.log("服务器关闭")
          };
          ws.onerror = function () {
            console.log("服务器出错")
          };
          ws.onmessage = function (e) {
            const obj = JSON.parse(e.data)
            const h = that.$createElement;
            console.log('进来了');
            if(obj.user != '1'  && obj.contentText != that.message) {
              console.log('不是管理员');
              that.$notify({
                title: '用户咨询',
                message: h('i', { style: 'color: teal'}, obj.contentText)
              });
              that.message = obj.contentText
              that.list = [...that.list, {type: "robot", content: obj.contentText, avatar: obj.avatar}]
            }
          }
        }
      }
    },
    watch: {
      //监听list,当有修改的时候进行div的屏幕滚动，确保能看到最新的聊天
      list: function () {
        let that = this;
        setTimeout(() => {
          that.$refs.box.scrollTop = that.$refs.box.scrollHeight;
        }, 0);
        //加setTimeout的原因：由于vue采用虚拟dom，我每次生成新的消息时获取到的div的scrollHeight的值是生成新消息之前的值，所以造成每次都是最新的那条消息被隐藏掉了
      }
    },
    mounted() {
      this.sendText()
    }
  };


</script>

<style scoped lang="scss">

  .test3 {
    z-index: 11;
    background: #fff;
    text-align: center;
    position: absolute;
    border: 1px #b4b4b4 solid;
    width: 500px;
    height: 600px;
    border-radius: 10px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: none;
    &.show {
      display: block;
    }
    .namea {
      position: absolute;
      font-size: 20px;
      font-weight: 600;
      padding-left: 10px;
      color: #6a6a6a;
    }
    .el-icon-close {
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 2px;
      font-size: 25px;
      &:hover {
        transform: rotate(45deg);
        transition: 0.1s ease;
      }
    }
  }
  .input-group {
    padding-top: 7px;
    input {
      width: 300px;
      outline: none;
      border: none;
      background: #f2f2f2;
      height: 30px;
      font-size: 18px;
      border-radius: 5px;
    }
    button {
      cursor:pointer;
      margin-left: 20px;
      border-radius: 5px;
      width: 80px;
      height: 30px;
      border: none;
      &:hover {
        background: #09b4c5;
        color: #fff;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .msg {
    width: 100%;
    height: 500px;
    overflow: auto;
    padding-top: 5px;
    background: #f4f5f7;
    margin-top: 30px;
    display: inline-block;
    margin-bottom: 6px;
    border-bottom: 1px #c0c0c0 solid;

    .msg-item {
      position: relative;
      overflow: hidden;
      margin-left: 10px;
      width: 95%;
      display: flex;
      margin-top: 18px;
      margin-bottom: 18px;
      img {
        margin: 0px;
        border-radius: 20px;
        width: 40px;
        height: 40px;
      }
      .p {
        margin-right: 5px;
        margin-left: 5px;
        max-width: 200px;
        border-radius: 15px;
        background: #23d5cb;
        color: white;
        padding: 6px 12px;
        text-align: left;
        box-sizing: border-box;
      }

      &.mine {
        flex-direction: row-reverse;
        .p {

          background: #4879ff;
          color: white;
        }
      }
    }
  }

</style>