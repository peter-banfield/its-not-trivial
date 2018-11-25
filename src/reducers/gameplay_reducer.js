import { ADD_NEW_USER } from '../actions/index';

export default function(state = { users: {} }, action){
    switch(action.type){
        case ADD_NEW_USER:
            return {...state, users: action.payload.users }
        default:
            return state;
    }
}