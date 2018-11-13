var path = require("path");

const express = require('express')
const http = require('http')
const port = process.env.PORT || 8080;  
const app = express()

app.use(express.static(__dirname + 'public'));  

app.get('/', function(req, res) {  
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

const server = app.listen(port, () => console.log(`its-not-trivial server listening on port ${port}`))

const io = require('socket.io')(server);

io.on('connect', socket => {
    console.log(socket.connected); //returns true
    console.log(socket.id); //userID of socket
    //var socketId = socket.id;
    //var clients = io.sockets.adapter;
    //var ioAccess = io.sockets;
    io.to(`${socketId}`).emit('hey', 'I just met you');
    //console.log(clients);
});

/*io.on('room', socket =>{

})*/
