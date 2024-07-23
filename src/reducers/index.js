import { mobileReducer, userReducer } from './reducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  userState: userReducer,
  mobileState: mobileReducer
});
