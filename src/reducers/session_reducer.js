import { CREATE_GAME } from '../actions/index';


export default function(state = [], action) {
  switch(action.type){
    case CREATE_GAME:
      /*alert("inside reducer" + "\n content is: " + action.payload.username +
             "\n roomcode: " + action.payload.roomCode)*/
      return state.concat([
      {
        roomCode: action.payload.roomCode,
      }
      ]);
    default:
      return state;
  }
}