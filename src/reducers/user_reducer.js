import { CREATE_USER } from '../actions/index';


export default function(state = {username: ''}, action) {
  switch(action.type){
    case CREATE_USER:
      return{
          ...state,
          username: action.payload.username,
      }
    default:
      return state;
  }
}