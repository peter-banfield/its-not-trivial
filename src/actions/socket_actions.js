const io = require('socket.io-client')  
const socket = io('http://localhost:8080')

export const ADD_NEW_ROOM = "ADD_NEW_ROOM";
export const ADD_NEW_USER = "ADD_NEW_USER";


export function socketActions(store){

    socket.on("gameCreated", function(data){
        store.dispatch({type: ADD_NEW_ROOM, payload: data})
    });
    
    socket.on('userConnected', function(data){
        store.dispatch({type: ADD_NEW_USER, payload: data})
    });
    
    socket.on('roomFull', function(data){
    
    });

}


export function joinRoom(username, roomCode){
    socket.emit("joinRoom", username, roomCode)
}

export function createRoom(roomCode){
    socket.emit("createRoom", roomCode)
}

