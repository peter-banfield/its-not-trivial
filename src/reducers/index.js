import { combineReducers } from 'redux';
import session from './session_reducer';
import gameplay from './gameplay_reducer';

const rootReducer = combineReducers({
    session,
    gameplay
});


export default rootReducer;