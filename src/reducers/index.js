import { combineReducers } from 'redux';
import user from './user_reducer';
import session from './session_reducer';
import gameplay from './gameplay_reducer';

const rootReducer = combineReducers({
    user,
    session,
    gameplay
});


export default rootReducer;