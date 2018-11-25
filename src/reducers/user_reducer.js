import { CREATE_USER } from '../actions/index';


export default function(state = [], action) {
  switch(action.type){
    case CREATE_USER:
      return state.concat([
      {
        username: action.payload.username,
      }
      ]);
    default:
      return state;
  }
}