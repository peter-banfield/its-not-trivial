import { CREATE_USER } from '../actions/index';


export default function(state = [], action) {
  switch(action.type){
    case CREATE_USER:
      /*alert("inside reducer" + "\n content is: " + action.payload.username +
             "\n roomcode: " + action.payload.roomCode)*/
      return state.concat([
      {
        username: action.payload.username,
      }
      ]);
    default:
      return state;
  }
}