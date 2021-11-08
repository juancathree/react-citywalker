import { combineReducers } from 'redux';
import authReducer from './authReducer';
import citiesReducer from './citiesReducer';
import placesReducer from './placesReducer';
import travelsReducer from './travelsReducer';
import userReducer from './userReducer';
import makeAsycTypes from './makeAsyncTypes';
import makeFetchingReducer from './makeFetchingReducer';

const appReducer = combineReducers({
   auth: combineReducers({
      jwt: authReducer,
      status: makeFetchingReducer(makeAsycTypes('auth')),
   }),
   cities: combineReducers({
      data: citiesReducer,
      status: makeFetchingReducer(makeAsycTypes('cities')),
   }),
   places: combineReducers({
      data: placesReducer,
      status: makeFetchingReducer(makeAsycTypes('places')),
   }),
   travels: combineReducers({
      data: travelsReducer,
      status: makeFetchingReducer(makeAsycTypes('travel')),
   }),
   user: combineReducers({
      data: userReducer,
      status: makeFetchingReducer(makeAsycTypes('user')),
   }),
});

export default appReducer;
