import { ROOM_ERROR, ADD_QUESTION, INCREMENT_QUESTION } from '../actions/index';
import { ADD_NEW_ROOM, ADD_NEW_USER, SCREEN_SWITCH } from '../actions/socket_actions.js';

const initialState = { 
    screen: 0, 
    room: { 
        usersCount: 0,
        round: 0,
        questionNum: 0,
        roomCode: ""
    },
    users: {},
    roomError: false,
    questions: []}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_NEW_ROOM:
            return {...state, room: {...state.room, room: action.payload.room } }
        case ADD_NEW_USER:
            return {
                ...state, 
                users: action.payload.users,
                room: { ...state.room, usersCount: state.room.usersCount + 1, roomCode: action.payload.room}
            }
        case ROOM_ERROR:
            return { ...state, roomError: !state.roomError }
        case SCREEN_SWITCH:
            return { ...state, screen: action.payload.screen }	
	   case ADD_QUESTION:
            console.log(action.payload.question)
            return {...state, questions: action.payload.question }
        case INCREMENT_QUESTION:
            return {...state, questionNum: state.room.questionNum + 1}
	default:
            return state;
    }
}
