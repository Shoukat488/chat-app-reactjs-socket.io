const app = require('express')();
const port = process.env.PORT || 3231;
const server = app.listen(port);
const io = module.exports.io =  require('socket.io')(server);
const SocketMananger = require('./socketManager');

io.on('connection',SocketMananger)
