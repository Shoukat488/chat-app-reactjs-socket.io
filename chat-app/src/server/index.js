const http = require('http');
const server = http.createServer();
const port = process.env.PORT || 3232;
const io = require('socket.io')(http);
const SocketMananger = require('./socketManager');

io.on('connection',SocketMananger)

server.listen(port,err=>{
    if(err)
    console.log(err)
    else
    console.log("Connected! at port: ", port)
})