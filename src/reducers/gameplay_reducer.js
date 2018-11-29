import { ROOM_ERROR, ADD_QUESTION } from '../actions/index';
import { ADD_NEW_ROOM, ADD_NEW_USER, GAME_READY } from '../actions/socket_actions.js';

const initialState = { 
    room: { 
        usersCount: 0,
        round: 0,
        roomCode: ""
    },
    users: {},
    ready: false,
    roomError: false,
    question: []}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_NEW_ROOM:
            return {...state, room: action.payload.room }
        case ADD_NEW_USER:
            console.log(action.payload.users)
            return {
                ...state, 
                users: action.payload.users,
                room: { ...state.room, usersCount: state.room.usersCount + 1, roomCode: action.payload.room}
            }
        case ROOM_ERROR:
            return { ...state, roomError: !state.roomError }
        case GAME_READY:
            return { ...state, ready: true }	
	   case ADD_QUESTION:
            return {...state, questions: action.payload.question }
	default:
            return state;
    }
}
