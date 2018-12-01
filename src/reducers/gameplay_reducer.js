import { ROOM_ERROR, ADD_QUESTION, INCREMENT_QUESTION } from '../actions/index';
import { ADD_NEW_ROOM, ADD_NEW_USER, SCREEN_SWITCH,
    ANSWER_SUBMITTED } from '../actions/socket_actions.js';

const initialState = { 
    screen: 0, 
    room: { 
        usersCount: 0,
        round: 0,
        qPerRound: 7,
        rPerGame: 1,
        questionNum: 0,
        roomCode: ""
    },
    users: {},
    roomError: false,
    questions: {},
    answers: [[]]}

    /** each question object should look like below by the time it gets to the end of betting
        {
            question: "test", 
            correctAnswr: 1994, 
            closestAnswr: 1994, 
            points: 2, 
            answers: [
                {
                    player: "test",
                    answer: "1994"
                }
            ], 
            bets: [
                {
                    player: "test", 
                    big: "1999", 
                    small: "2000"
                }
            ]
        } 
    */
export default function(state = initialState, action){
    switch(action.type){
        case ADD_NEW_ROOM:
            return {
                ...state, 
                room: action.payload.room
            }
        case ADD_NEW_USER:
            console.log("inside reducer")
            console.log(action.payload.questions)
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

            return {...state, questions: action.payload.question }
        case INCREMENT_QUESTION:
            return {...state, questionNum: state.room.questionNum + 1}
        case ANSWER_SUBMITTED:
            //console.log(action.payload);
            var answer = action.payload.answer;
            var num = state.room.questionNum;
            //console.log(state.answers);
            state.answers[num].push(answer);
            //console.log(state.answers[num].length);
            return {...state, answers: { ...state.answers}  }
	default:
            return state;
    }
}
