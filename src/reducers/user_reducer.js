import { CREATE_USER } from '../actions/index';

const initialState = {
    username: [],
    roomCode: []
};


export default function(state = initialState, action) {
  switch(action.type){
    case CREATE_USER:
      /*alert("inside reducer" + "\n content is: " + action.payload.username +
             "\n roomcode: " + action.payload.roomCode)*/
      const { username, roomCode } = action.payload;
      return {
        ...state,
        username: username,
        roomCode: roomCode
        
      };
    default:
      return state;
  }
}