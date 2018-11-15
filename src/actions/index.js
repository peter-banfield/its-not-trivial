import axios from 'axios';
const io = require('socket.io-client')  
const socket = io('http://localhost:8080')

//import { browserHistory } from 'react-router-dom';

export const CREATE_USER= "CREATE_USER";

export const JoinAction = (username, roomCode) => ({
  type: CREATE_USER,
  payload: {
    username: username,
    roomCode: roomCode
  }
});