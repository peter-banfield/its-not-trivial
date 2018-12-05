import { ROOM_ERROR } from '../actions/index';
import { ADD_NEW_ROOM, ADD_NEW_USER, SCREEN_SWITCH, INCREMENT_ROUND,
    ANSWER_SUBMITTED, BET_SUBMITTED, SCORING_COMPLETE, INCREMENT_QUESTION, ADD_QUESTION } from '../actions/socket_actions.js';

const initialState = { 
    screen: 0, 
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
    questions: []}

    /** each question object should look like below by the time it gets to the end of betting
        {
            question: "test", 
            correctAnswr: 1994, 
            closestAnswr: 1994, 
            points: 2, 
            answers: {
               socketID: {
                    
                    answer: "1994"
                }
            }, 
            bets: {
               socketID: { 
                    big: "1999", 
                    small: "2000"
                }
            }
        } 
    */
export default function(state = initialState, action){
    switch(action.type){
        case ADD_NEW_ROOM:
            return {
                ...state, 
                room: action.payload.room,
            }
        case ADD_NEW_USER:
            return {
                ...state, 
                users: action.payload.users,
                room: { ...state.room, usersCount: state.room.usersCount + 1, roomCode: action.payload.room},
                questions: action.payload.questions
            }
        case ROOM_ERROR:
            return { ...state, roomError: !state.roomError }
        case SCREEN_SWITCH:
            return { ...state, screen: action.payload.screen }	
	   case ADD_QUESTION:
            return { ...state, questions: action.payload.questions }
        case INCREMENT_QUESTION:
            return { ...state, room: { ...state.room, questionNum: state.room.questionNum + 1}}
        case INCREMENT_ROUND:
        return { ...state, room: { ...state.room, round: state.room.round + 1, questionNum: state.room.questionNum + 1}}
        case ANSWER_SUBMITTED:
            return { ...state, questions: action.payload.answer, users: action.payload.users }
        case BET_SUBMITTED:
            return { ...state, questions: action.payload.bets }
        case SCORING_COMPLETE:
            return { ...state, users: action.payload.users, questions: action.payload.questions }
	    default:
            return state;
    }
}
