import { ROOM_ERROR, GAME_NOT_READY, GAME_READY, ADD_QUESTION } from '../actions/index';
import { ADD_NEW_ROOM, ADD_NEW_USER } from '../actions/socket_actions.js';

export default function(state = { users: {}, ready: false, roomError: false, question: [] }, action){
    switch(action.type){
        case ADD_NEW_ROOM:
            return {...state, room: action.payload.room }
        case ADD_NEW_USER:
            return {...state, users: action.payload.users }
        case ROOM_ERROR:
            return { ...state, roomError: !state.roomError }
        case GAME_READY:
            return {
                ...state,
                ready: true
            }
        case GAME_NOT_READY:
            return {
                ...state,
                ready: false
            }	
	case ADD_QUESTION:
            return {...state, questions: action.payload.question }
	default:
            return state;
    }
}
