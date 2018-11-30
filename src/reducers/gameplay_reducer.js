import { ROOM_ERROR, ADD_QUESTION } from '../actions/index';
import { ADD_NEW_ROOM, ADD_NEW_USER, SCREEN_SWITCH } from '../actions/socket_actions.js';

const initialState = { 
    /********************************************************************************************************  
    *   This could be used for the moments where we have to move many screens at the same time
    *   The idea is that each moment has a unique ID eg. the current ready state here could be 1
    *   in the components then instead of looking for ready to be true we look for screen=1 and then move
    *   screens. 
    *   This is especially useful for the blank screen as we move to multiple different screens from blank, 
    *   it is also useful for moments when users might be on different components and need to move to the 
    *   same screen such as when answering questions and the timer runs out
    * 
    *                                 move to Rules/SkipRules:  1
    *                               move to RoundNumber/Blank:  2
    *                                  move to QuestionNumber:  3
    *                              move to QuestionAsk/Answer:  4
    *                       move to AnswerPlaceBets/PlaceBets:  5
    *                             move to AnswerSeeBets/Blank:  6
    *                              move to Congrats/PlayAgain:  7
    * 
    *   Above are the moments when all users have to move to the same screen at the same time and a proposed
    *   value for screen to trigger that change. They are listed using the format Gameboard/User with the 
    *   component names that we are moving to.
    *********************************************************************************************************/
    screen: 0, 
    room: { 
        usersCount: 0,
        round: 0,
        question: {
            number: 0,
            question: "",
            answer: ""
        },
        roomCode: ""
    },
    users: {},
    roomError: false,
    questions: []}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_NEW_ROOM:
            return {...state, room: action.payload.room }
        case ADD_NEW_USER:
            console.log(action.payload.users)
            return {
                ...state, 
                users: action.payload.users,
                room: { ...state.room, usersCount: state.room.usersCount + 1, roomCode: action.payload.room}
            }
        case ROOM_ERROR:
            return { ...state, roomError: !state.roomError }
        case SCREEN_SWITCH:
            return { ...state, screen: action.payload.screen }	
	   case ADD_QUESTION:
            return {...state, questions: action.payload.question }
	default:
            return state;
    }
}
