import { combineReducers } from 'redux-immutable';
import userReducers from "./userReducers";

export const rootReducer = combineReducers({
    userReducers
});