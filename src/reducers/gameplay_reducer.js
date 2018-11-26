import { ADD_NEW_USER, ADD_QUESTION, GAME_READY, GAME_NOT_READY  } from '../actions/index';

export default function(state = { users: {}, ready: false, questions: [] }, action){
    switch(action.type){
        case ADD_NEW_USER:
            return {...state, users: action.payload.users }
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
