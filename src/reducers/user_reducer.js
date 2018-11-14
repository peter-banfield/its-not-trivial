import { CREATE_USER } from '../actions/index';

const initialState = {
    username: [],
    room: []
};


export default function(state = initialState, action) {
  switch(action.type){
    case CREATE_USER:
      return {...state, username: action.payload.username, roomCode: action.payload.roomCode};
    default:
      return state;
  }
}