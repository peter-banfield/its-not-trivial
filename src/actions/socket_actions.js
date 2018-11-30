const io = require('socket.io-client')  
const socket = io(window.location.hostname+':8080')

export const ADD_NEW_ROOM = "ADD_NEW_ROOM";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const SCREEN_SWITCH = "SCREEN_SWITCH";


export function socketActions(store){

    socket.on("gameCreated", function(data){
        store.dispatch({type: ADD_NEW_ROOM, payload: data})
    });
    
    socket.on('userConnected', function(data){
        store.dispatch({type: ADD_NEW_USER, payload: data})
    });
    
    socket.on('roomFull', function(data){
    
    });

    socket.on('switchScreens', function(data){
        console.log(data+":data")
        store.dispatch({type: SCREEN_SWITCH, payload: data})
    });

}


export function createRoom(roomCode){
    socket.emit("createRoom", roomCode)
}

export function joinRoom(username, roomCode){
    socket.emit("joinRoom", username, roomCode)
}

export function nextScreen(roomCode, screenNum){
    console.log(roomCode+ ''+screenNum)
    socket.emit("nextScreen", roomCode, screenNum)
}