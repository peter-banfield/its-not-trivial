const io = require('socket.io-client')  
const socket = io(window.location.hostname+':8080')

export const ADD_NEW_ROOM = "ADD_NEW_ROOM";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const SCREEN_SWITCH = "SCREEN_SWITCH";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const BET_SUBMITTED = "BET_SUBMITTED";


export function socketActions(store){

    socket.on("gameCreated", function(data){
        store.dispatch({type: ADD_NEW_ROOM, payload: data})
    });
    
    socket.on('userConnected', function(data){
        store.dispatch({type: ADD_NEW_USER, payload: data})
    });

    socket.on('switchScreens', function(data){
        console.log(data)
        store.dispatch({type: SCREEN_SWITCH, payload: data})
    });

    socket.on('answerSubmitted', function(data){
        console.log(data)
        store.dispatch({type: ANSWER_SUBMITTED, payload: data})
    });

    socket.on('betSubmitted', function(data){
        console.log(data)
        store.dispatch({type: BET_SUBMITTED, payload: data})
    });
}

export function getId(){
    return socket.id
}

export function createRoom(roomCode){
    socket.emit("createRoom", roomCode)
}

export function questionsToServer(roomCode, question, index){
    socket.emit("storeQuestions", roomCode, question, index)
}

export function joinRoom(username, roomCode){
    socket.emit("joinRoom", username, roomCode, socket.id)
}

export function nextScreen(roomCode, screenNum){
    //console.log(roomCode+ ''+screenNum)
    if(screenNum === 5){
            socket.emit("calulatePoints", roomCode)
        }
    socket.emit("nextScreen", roomCode, screenNum)
}

export function answerSubmit(roomCode, answer){
    socket.emit("answerSubmit", roomCode, answer, socket.id)
}

export function betSubmit(roomCode, questionNum, doubleDown, bigBet, smallBet){
    socket.emit("betSubmit", roomCode, socket.id, questionNum, doubleDown, bigBet, smallBet)
}