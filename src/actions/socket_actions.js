const io = require('socket.io-client')  
const socket = io(window.location.hostname+':8080')

export const ADD_NEW_ROOM = "ADD_NEW_ROOM";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const GAME_READY = "GAME_READY";


export function socketActions(store){

    socket.on("gameCreated", function(data){
        store.dispatch({type: ADD_NEW_ROOM, payload: data})
    });
    
    socket.on('userConnected', function(data){
        store.dispatch({type: ADD_NEW_USER, payload: data})
    });
    
    socket.on('roomFull', function(data){
    
    });

    socket.on('roomVerified', function(data){
        store.dispatch({type: GAME_READY, payload: ''})
    });

}


export function createRoom(roomCode){
    socket.emit("createRoom", roomCode)
}

export function joinRoom(username, roomCode){
    socket.emit("joinRoom", username, roomCode)
}

export function roomReady(roomCode){
    socket.emit("roomReady", roomCode)
}

