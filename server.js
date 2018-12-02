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

global.roomState = {};

io.on('connection', (socket) =>{
    
    //create room by initializing roomState to default values
    socket.on('createRoom', (roomCode) =>{
        socket.join(roomCode, () =>{
            console.log("gameboard has created room " + roomCode)
         });
        if(!roomState[roomCode]){
            roomState[roomCode] = {
                usersCount: 0,
                round: 1,
                questionNum: 0,
                roomCode: "",
                questions: {}
            }
        }

        io.in(roomCode).emit('gameCreated', { room: roomState[roomCode] })
        
    });

    //store questions in roomState to sync store upon joinRoom
    socket.on('storeQuestions', (roomCode, question, index) => {
        roomState[roomCode].questions[index] = question
    });

    //user joins room and gets questions for each round
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
        }

        //console.log(roomState[roomCode].questions);

        io.in(roomCode).emit('userConnected', 
            { users: roomState[roomCode].users,
              room: roomCode, 
              questions: roomState[roomCode].questions } );

    });


    socket.on('nextScreen', (roomCode, screenNum) => {
        if(screenNum === 5){
            //do point calculation celebration emoji
            //dispatch points using emit
        }
        io.in(roomCode).emit('switchScreens', { screen: screenNum })
    });

    
    socket.on('answerSubmit', (roomCode, answer, userId) => {
        var questionId = roomState[roomCode].questionNum
        if(!roomState[roomCode].questions[questionId].answers){
            roomState[roomCode].questions[questionId].answers = {}
        }
        //if answer is exactly correct assign 2 points automatically

        roomState[roomCode].questions[questionId].answers[userId] = answer
        io.in(roomCode).emit('answerSubmitted', { answer: roomState[roomCode].questions });
    });

    socket.on("betSubmit", (roomCode, userId, questionNum, doubleDown, bigBet, smallBet) =>{
        if(doubleDown){
            roomState[roomCode].users[userId].HasDD = false;
        }

        console.log("Big bet received: " + bigBet)
        console.log("Small bet received: " + smallBet)
        console.log(roomState[roomCode].questions[questionNum])

        if(!roomState[roomCode].questions[questionNum].bets){
            roomState[roomCode].questions[questionNum].bets = {}
        }

        roomState[roomCode].questions[questionNum].bets[userId] = { bigBet: bigBet, smallBet: smallBet }
        io.in(roomCode).emit('betSubmitted', { bets: roomState[roomCode].questions });

    })
    
   
});
