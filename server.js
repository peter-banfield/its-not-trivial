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
    socket.on('createRoom', (roomCode, roundQuestions, roundsGame) =>{
        socket.join(roomCode, () =>{
            console.log("gameboard has created room " + roomCode)
         });
        if(!roomState[roomCode]){
            roomState[roomCode] = {
                usersCount: 0,
                round: 1,
                qPerRound: roundQuestions,
                rPerGame: roundsGame,
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
        io.in(roomCode).emit('switchScreens', { screen: screenNum })
    });

    
    socket.on('answerSubmit', (roomCode, answer, userId) => {
        var questionId = roomState[roomCode].questionNum
        if(!roomState[roomCode].questions[questionId].answers){
            roomState[roomCode].questions[questionId].answers = {}
        }
        //if answer is exactly correct assign 2 points automatically
        if(answer == parseInt(roomState[roomCode].questions[questionId].correctAnswr)){
            roomState[roomCode].users[userId].score += 2
            //console.log('score after correct '+ roomState[roomCode].users[userId].score)
        }
        roomState[roomCode].questions[questionId].answers[userId] = answer
        io.in(roomCode).emit('answerSubmitted', { answer: roomState[roomCode].questions, users: roomState[roomCode].users });
    });

    socket.on("betSubmit", (roomCode, userId, questionNum, doubleDown, bigBet, smallBet) =>{
        if(doubleDown){
            roomState[roomCode].users[userId].HasDD = false;
        }

        if(!roomState[roomCode].questions[questionNum].bets){
            roomState[roomCode].questions[questionNum].bets = {}
        }

        roomState[roomCode].questions[questionNum].bets[userId] = { bigBet: bigBet, smallBet: smallBet, doubleDown: doubleDown }
        io.in(roomCode).emit('betSubmitted', { bets: roomState[roomCode].questions });

    })

    socket.on("calulatePoints", (roomCode) => {
        var users = roomState[roomCode].users
        var correctAnswr = roomState[roomCode].questions[roomState[roomCode].questionNum].correctAnswr
        var answers = roomState[roomCode].questions[roomState[roomCode].questionNum].answers
        var bets = roomState[roomCode].questions[roomState[roomCode].questionNum].bets

        var answerKeys = Object.keys(answers)
        var closest = -Infinity
        for(let id of answerKeys){
            var answer = parseInt(answers[id])
            if(answer > correctAnswr){
                // bigger than correct
                continue
            }
            else if(answer === correctAnswr ){
                // correct answer 
                closest = answer
                break
            }
            else if(answer < correctAnswr){
                // smaller than correct
                if(answer > closest){
                    // new closest
                    closest = answer
                }
            }
        }

        if(closest == -Infinity){
            closest = 'Smaller than the Smallest'
        }

        var checkBet = function(bet, closest){
            if(bet == closest){
                return true
            }
            return false
        }

        var totalPointsToAward = 0
        Object.keys(bets).forEach((id)=>{
            var user = users[id]
            var bigBet = bets[id].bigBet
            var smallBet = bets[id].smallBet
            var doubleDown = bets[id].doubleDown
            var pointsToAward = 0
            if(checkBet(bigBet, closest)){
                console.log("2 Points Awarded to" + user)
                pointsToAward += 2
            }

            if(checkBet(smallBet, closest)){
                console.log("1 Points Awarded to" + user)
                pointsToAward += 1
            }

            if(doubleDown){
                console.log("double down to " + user)
                pointsToAward *= 2
            }

            totalPointsToAward += pointsToAward

            if(pointsToAward > 0){ 
                if( bigBet === 'Smaller than the Smallest'|| smallBet === 'Smaller than the Smallest' ){
                pointsToAward += 1
                }
                user.numCorrect += 1
            }

            console.log("total points to award to " + user + " is " + pointsToAward)
            user.score += pointsToAward
        })
        roomState[roomCode].questions[roomState[roomCode].questionNum].points = totalPointsToAward
        roomState[roomCode].questions[roomState[roomCode].questionNum].closestAnswr = closest
        io.in(roomCode).emit('scoringComplete', { users: roomState[roomCode].users, questions: roomState[roomCode].questions });


    })
    
    socket.on('incrementQuestion', (roomCode) => {
        roomState[roomCode].questionNum += 1
        io.in(roomCode).emit('nextQuestion')
    });

    socket.on('incrementRound', (roomCode) => {
        roomState[roomCode].round += 1
        roomState[roomCode].questionNum += 1
        io.in(roomCode).emit('nextRound')
    });

    socket.on('resetState', (roomCode) => {
        var usersTemp = roomState[roomCode].users;
        var userCountTemp = roomState[roomCode].usersCount;
        var qPerRoundTemp = roomState[roomCode].qPerRound;
        var rPerGameTemp = roomState[roomCode].rPerGame;


        roomState[roomCode] = {
                usersCount: userCountTemp,
                round: 1,
                qPerRound: qPerRoundTemp,
                rPerGame: rPerGameTemp,
                questionNum: 0,
                roomCode: roomCode,
                questions: {}
        }
        roomState[roomCode].users = usersTemp;

        console.log(roomState[roomCode])

        io.in(roomCode).emit('stateResetComplete')

    });

    socket.on('resetGameBoardForNewUsers', (roomCode, screenNum) => {        
        io.in(roomCode).emit('newCodeForGameBoard', {screen: screenNum} )
    });


});
