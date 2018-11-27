//import axios from 'axios';
import store from '../store.js'
const io = require('socket.io-client')  
const socket = io(window.location.hostname+':8080')
var randomstring = require("randomstring");
// the next 6 lines connect to the database
var AWS = require("aws-sdk");
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:80d57a52-edb2-44de-acb8-e6759c55991d',
});
var dynamodb = new AWS.DynamoDB();

//import { browserHistory } from 'react-router-dom';

export const CREATE_GAME = "CREATE_GAME";
export const CREATE_USER = "CREATE_USER";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const ADD_QUESTION = 'ADD_QUESTION';


export const JoinAction = (username) => ({
  type: CREATE_USER,
  payload: { username: username, }
});

export function createGame(){
   return function generateuniquecode(dispatch, getState){
        var roomCode = randomstring.generate({length: 4, charset: 'alphabetic'}).toUpperCase();   
        dynamodb.putItem({Item: {"id": {S: roomCode}, "CanJoin": {BOOL: true}},TableName: "Rooms",ConditionExpression:"attribute_not_exists(id)"}, function(err, res){
            if(err){
                generateuniquecode();
            } 
            else{
                socket.emit("joinRoom", "gameboard", roomCode);   
                store.dispatch({ type: CREATE_GAME, payload: { code: roomCode } });
            }; 
        });
    }
}

export function getQuestions(){
    return function() {
        var numQuestions = 7;
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
                    var question = {Question: res.Item.Question.S, Answer: parseInt(res.Item.Answer.N)}
                    questions.push(question)
                }
            })
        })
        store.dispatch({ type: ADD_QUESTION, payload: { question: questions } });
    }
}

socket.on('userConnected', function(data){
        store.dispatch({type: ADD_NEW_USER, payload: data})
    });