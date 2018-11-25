//import axios from 'axios';
import store from '../store.js'
const io = require('socket.io-client')  
const socket = io('http://localhost:8080')
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

socket.on('userConnected', function(data){
        store.dispatch({type: ADD_NEW_USER, payload: data})
    });