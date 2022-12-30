// const express = require('express')
// const app = express()
// const http = require('http')
// const server = http.createServer(app)
// // const {Server} = require('socket.io')
// const io = require('socket.io')(server)

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:8000"
  }
});
// app.get('/', (req, res) => {
//   console.log('res', res)
//   // res.send('<h1>hello world</h1>')
//   // res.sendFile(__dirname + '/index.html')
//   res.sendFile('./test.html')

// })

let arr = []
let count = []
let messageData = []
io.on('connection', (socket) => {
  console.log('user connected')
  let user = {}
  let exit = false
  socket.on('login', (data) => {
    // if (user) {
    //   arr = arr.filter((i) => i.username !== user.username)
    //   io.emit('quit', user.username)
    // }
    console.log(data)
    exit = false
    if (arr.length !== 0) {
      console.log('数组存在')
      for(let i = 0; i < arr.length; i++) {
        if (arr[i].username === data.username) {
          socket.emit('fail', arr[i].username)
          exit = true
        } 
      }
    } 
    if (exit) {
      console.log('已经注册过了')
    } else {
      arr.push(data)
      console.log('数组',arr)
      // io.emit('loginSuccess')
    }
  })
  socket.on('logon', (data) => {
    if (arr.some((i) => i.username === data.username)) {
      if (count.some((i) => i.username === data.username)) {
        socket.emit('fail3')
      } else {
        user = data
        socket.broadcast.emit('success', data.username)
        count.push(data)
        io.emit('count', count.length)
      }
    } else {
      socket.emit('fail2')
    }
  })
  socket.on('writing', (data) => {
    // io.emit('content', data)
    socket.broadcast.emit('content', data)
  })
  socket.on('sendMessage', (data) => {
    // io.sockets.emit('receiveMessage', data)
    console.log('data', data)
    io.emit('receiveMessage', data)
  })
  socket.on('disconnect', () => {
    count = count.filter((i) => i.username !== user.username)
    io.emit('count', count.length)
    // arr = arr.filter((i) => i.username !== user.username)
    console.log('user disconnect', user)
    io.emit('quit', user.username)
  })
})

server.listen(9093, () => {
  console.log('9093端口已开启')
})
