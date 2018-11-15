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
    //console.log(socket.connected + " " + socket.id); //returns true and socketID
});

io.on('connection', (socket) =>{
    socket.on('joinRoom', (username, roomCode) => {
        console.log("Socket received user: " + username + "\nand room code: " + roomCode);
        socket.join(roomCode, () =>{
            io.to(roomCode).emit("a user has joined")
            console.log("inside of room: " + roomCode)
         });
    });
    
   

});
