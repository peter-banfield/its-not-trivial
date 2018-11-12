import axios from 'axios';
//import { browserHistory } from 'react-router-dom';

export const CREATE_USERNAME = 'CREATE_USERNAME';


export function createSession() {
  return function(dispatch){
    axios.post('/create')
      .then( response => {
        dispatch({type: CREATE_SESSION, payload: response.data.session.code});
        //browserHistory.push('/linklanding');
      })
  }
}