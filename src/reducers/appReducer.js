import { combineReducers } from 'redux';
import authReducer from './authReducer';
import fetchingReducer from './fetchingReducer';

const appReducer = combineReducers({
   auth: combineReducers({
      jwt: authReducer,
      status: fetchingReducer,
   }),
});

export default appReducer;
