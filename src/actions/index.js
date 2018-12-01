import { joinRoom, createRoom, nextScreen, answerSubmit } from "./socket_actions.js";
import { screens } from "../components/screens"
var randomstring = require("randomstring");
// the next 6 lines connect to the database
var AWS = require("aws-sdk");
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:80d57a52-edb2-44de-acb8-e6759c55991d',
});
var dynamodb = new AWS.DynamoDB();

export const CREATE_GAME = "CREATE_GAME";
export const CREATE_USER = "CREATE_USER";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const ROOM_ERROR = "ROOM_ERROR";
export const ADD_QUESTION = 'ADD_QUESTION';
export const INCREMENT_QUESTION = 'INCREMENT_QUESTION';
export const ANSWER_SUBMIT = 'ANSWER_SUBMIT';


export function JoinAction(username, roomCode){
    return function(dispatch, getState){
        dynamodb.getItem({Key: {"id": {S: roomCode}}, TableName: "Rooms"},function(err, data) {
        if(err) {
            console.log(err);
        }
        else {
            if(Object.keys(data).length === 0) {
                // reject for invalid roomcode
                dispatch({ type: "ROOM_ERROR" })
                } 
            else {
                // call joinroom action
                joinRoom(username, roomCode); 
                }
            }
        });
    }
}

export function createGame(roomCode){
   return function generateuniquecode(dispatch, getState){
        var roomCode = randomstring.generate({length: 4, charset: 'alphabetic'}).toUpperCase();   
        dynamodb.putItem({Item: {"id": {S: roomCode}, "CanJoin": {BOOL: true}},TableName: "Rooms",ConditionExpression:"attribute_not_exists(id)"}, function(err, res){
            if(err){
                generateuniquecode();
            } 
            else{
                createRoom(roomCode) 
                dispatch({ type: CREATE_GAME, payload: { code: roomCode } });
            }; 
        });
    }
}

export function getQuestions(numQuestions){
    return function(dispatch, getState) {
        // Generate a list numQuestions long of unique random integers
        ///////////////////////////////////
        function getRandomInt(min, max) { // borrowed the next 13 lines from Pullo at https://www.sitepoint.com/community/t/fill-an-array-with-unique-values/100808
            return Math.floor(Math.random() * (max - min)) + min;
        }
        function getRandomInts(num, min, max) {
            var ints = [];
            while (ints.length < num) {
                var randNum = getRandomInt(min, max);
                if(!ints.indexOf(randNum) > -1){
                    ints.push(randNum);
                }
            }
            return ints;
        }
        var questionIds = getRandomInts(numQuestions, 1, 226)
        /////////////////////////////
        // get the questions
        var questions = []
        questionIds.forEach(function(id){
            dynamodb.getItem({Key: {"QuestionId":{N: String(id)}}, TableName: "Questions"}, function(err, res){
                if(err){
                    console.log(err);
                } else {
                    var question = {question: res.Item.Question.S, correctAnswr: parseInt(res.Item.Answer.N)}
                    questions.push(question)
                }
            })
        })
        dispatch({ type: ADD_QUESTION, payload: { question: questions } });
        console.log(questions)
    }
}

export function checkJoinedPlayers(roomCode){
    return function (dispatch, getState){
        const currentState = getState();
        //console.log(roomCode)
        const roomUsers = currentState.gameplay.room.usersCount;
        if(roomUsers >= 2){
            nextScreen(roomCode, screens.StartGame)
        }
    }
}

export function skipRules(roomCode){
    return function(dispatch, getState) {
        nextScreen(roomCode, screens.SkipRules)
    }
}

export function nextQuestion(roomCode){
    return function(dispatch, getState){
        dispatch({ type: INCREMENT_QUESTION });
        nextScreen(roomCode, screens.QuestionNumber)
    }
}

 
 export function AnswerSubmitAction(roomCode, answer){
    return function(dispatch, getState){
        dynamodb.getItem({Key: {"id": {S: roomCode}}, TableName: "Rooms"},function(err, data) {
        if(err) {
            console.log(err);
        }
        else {
            if(Object.keys(data).length === 0) {
                // reject for invalid roomcode
                dispatch({ type: "ROOM_ERROR" })
                } 
            else {                
                //console.log(answer);
                answerSubmit(roomCode, answer);                 
                }
            }
        });
    }
}