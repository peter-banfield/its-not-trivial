import { combineReducers } from 'redux';
import user from './user_reducer';
import session from './session_reducer';

const rootReducer = combineReducers({
    user,
    session    
});


export default rootReducer;