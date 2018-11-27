import { ADD_NEW_USER, ADD_QUESTION } from '../actions/index';

export default function(state = { users: {}, questions: [] }, action){
    switch(action.type){
        case ADD_NEW_USER:
            return {...state, users: action.payload.users }
        case ADD_QUESTION:
            return {...state, questions: action.payload.question }
        default:
            return state;
    }
}