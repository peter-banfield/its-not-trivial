/*eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import { combineReducers } from 'redux';
import session from './session_reducer';
import gameplay from './gameplay_reducer';
import { RESET_STATE } from '../actions/socket_actions.js';


const initialState = {
    screen: 1,
    room: { 
        usersCount: 0,
        round: 0,
        qPerRound: 1,
        rPerGame: 1,
        questionNum: 0,
        roomCode: ""
    },
    users: {},
    roomError: false,
    questions: []
    
}

const appReducer = combineReducers({
    session,
    gameplay

});

const rootReducer = (state, action) => {
    if(action.type === "RESET_STATE"){
        var tempState = state
        var users = tempState.gameplay.users
        var room = tempState.gameplay.room
        tempState = initialState
        tempState.room = room
        tempState.users = users
        console.log(tempState)
        state.gameplay = tempState
        //state.room = { roomCode: state.room.roomCode, userCount: state.room.userCount }
    }
  

  return appReducer(state, action)
};


export default rootReducer;