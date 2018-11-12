var express = require('express');  
var app = express();  


app.get('/', function (req, res) {  
  res.send('Hello World!')
})

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})

io.on('connect', function(socket) {
    console.log(socket.connected); // true
    console.log(socket.id); //userID of socket
    var socketId = socket.id;
    var clients = io.sockets.adapter;
    var ioAccess = io.sockets;
    io.to(`${socketId}`).emit('hey', 'I just met you');
    console.log(data);
    console.log(clients);
    console.log(ioAccess);
});
