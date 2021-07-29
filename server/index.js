const express = require("express")

const app = express()

app.set('secret','asddsgfasf')

app.use(require('cors')())
app.use(express.json())

//托管静态文件
app.use('/',express.static(__dirname+'/web'))
app.use('/admin',express.static(__dirname+'/admin'))
app.use('/uploads',express.static(__dirname+'/uploads'))


require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

let ws = require("nodejs-websocket");
console.log("开始建立链接");
const server = ws.createServer(connection => {
  // console.log('有一名用户连接进来了...')
  connection.on("text", function (str) {
    console.log('我来接收客户端发过来的消息' + str)
    // connection.sendText(str);//返回给客户端的数据

    server.connections.forEach(function (conn) {
      console.log('fayici');
      conn.sendText(str)//返回给所有客户端的数据(相当于公告、通知)
    })
    // server.connections[1].sendText(str)
  })
  //监听关闭
  connection.on("close", function (code, reason) {
    console.log("Connection closed")
  })
  //监听异常
  connection.on("error",() => {
    console.log('服务异常关闭...')
  })
}).listen(8001)
console.log("链接建立完毕");

app.listen(3000,()=>{
  console.log('http://listen port 3000');
})