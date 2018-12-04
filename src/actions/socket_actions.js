const io = require('socket.io-client')  
const socket = io(window.location.hostname+':8080')

export const ADD_NEW_ROOM = "ADD_NEW_ROOM";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const SCREEN_SWITCH = "SCREEN_SWITCH";
export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const BET_SUBMITTED = "BET_SUBMITTED";
export const SCORING_COMPLETE = "SCORING_COMPLETE";
export const INCREMENT_QUESTION = 'INCREMENT_QUESTION';
export const INCREMENT_ROUND = 'INCREMENT_ROUND';
export const RESET_STATE = 'RESET_STATE';
export const ADD_QUESTION = 'ADD_QUESTION';


export function socketActions(store){

    socket.on("gameCreated", function(data){
        store.dispatch({type: ADD_NEW_ROOM, payload: data})
    });
    
    socket.on('userConnected', function(data){
        store.dispatch({type: ADD_NEW_USER, payload: data})
    });

    socket.on('switchScreens', function(data){
        store.dispatch({type: SCREEN_SWITCH, payload: data})
    });

    socket.on('answerSubmitted', function(data){
        store.dispatch({type: ANSWER_SUBMITTED, payload: data})
    });

    socket.on('betSubmitted', function(data){
        store.dispatch({type: BET_SUBMITTED, payload: data})
    });

    socket.on('scoringComplete', function(data){
        store.dispatch({type: SCORING_COMPLETE, payload: data})
    })

    socket.on('nextQuestion', function(data){
        store.dispatch({ type: INCREMENT_QUESTION });
    })

    socket.on('nextRound', function(data){
        store.dispatch({ type: INCREMENT_ROUND });
    })

    socket.on('stateResetComplete', function(data){
        store.dispatch({ type: RESET_STATE })
    })

    socket.on('dispatchQuestions', function(data){
        store.dispatch({ type: ADD_QUESTION, payload: data })
    })
}

export function getId(){
    return socket.id
}

export function createRoom(roomCode, roundsQuestions, roundsGame){
    socket.emit("createRoom", roomCode, roundsQuestions, roundsGame)
}

export function questionsToServer(roomCode, question, index, numQuestion){
    socket.emit("storeQuestions", roomCode, question, index, numQuestion)
}

export function joinRoom(username, roomCode){
    socket.emit("joinRoom", username, roomCode, socket.id)
}

export function nextScreen(roomCode, screenNum){
    socket.emit("nextScreen", roomCode, screenNum)
}

export function answerSubmit(roomCode, answer){
    socket.emit("answerSubmit", roomCode, answer, socket.id)
}

export function betSubmit(roomCode, questionNum, doubleDown, bigBet, smallBet){
    socket.emit("betSubmit", roomCode, socket.id, questionNum, doubleDown, bigBet, smallBet)
}

export function calculatePoints(roomCode){
    socket.emit("calulatePoints", roomCode)
}

export function incrementQuestion(roomCode){
    socket.emit("incrementQuestion", roomCode)
}

export function incrementRound(roomCode){
    socket.emit("incrementRound", roomCode)
}

export function resetServerState(roomCode){
    socket.emit("resetState", roomCode)
}