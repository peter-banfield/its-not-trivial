import { CREATE_GAME } from '../actions/index';


export default function(state = {code: ''} , action) {
  switch(action.type){
    case CREATE_GAME:
      return {
        ...state,
        code: action.payload.code
      }
    default:
      return state;
  }
}