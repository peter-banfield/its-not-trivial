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


var roomState = {};

io.on('connection', (socket) =>{
    
    socket.on('createRoom', (roomCode) =>{
        socket.join(roomCode, () =>{
            console.log("gameboard has created room " + roomCode)
         });
        if(!roomState[roomCode]){
            roomState[roomCode] = {
                usersCount: 0,
                round: 0,
            }
        }
        io.in(roomCode).emit('gameCreated', { room: roomState[roomCode] })
    })

    socket.on('joinRoom', (username, roomCode, userId) => {
        socket.join(roomCode, () =>{
            console.log("a user has joined " + roomCode)
         });
        if(!roomState[roomCode].users){
            roomState[roomCode].users = {};
        }

        //roomState[roomCode].users.roomCode = roomCode

        roomState[roomCode].users[userId] = {
            username: username, 
            score: 0,
            numCorrect: 0,
            HasDD: true,
            bigBet: '',
            smallBet: ''
        }

        io.in(roomCode).emit('userConnected', { users: roomState[roomCode].users, room: roomCode } );

    });

    socket.on('nextScreen', (roomCode, screenNum) => {
        io.in(roomCode).emit('switchScreens', { screen: screenNum })
    });

    
    socket.on('answerSubmit', (roomCode, answer) => {
        socket.join(roomCode, () =>{
            console.log("a user has submitted the answer: " + answer)
         });

        io.in(roomCode).emit('answerSubmitted', { answer } );
    });
    
   
});
