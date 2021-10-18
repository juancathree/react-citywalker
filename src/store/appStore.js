import { applyMiddleware, createStore } from 'redux';
import appReducer from 'reducers/appReducer';

const asyncMiddleware = (store) => (next) => (action) => {
   if (typeof action === 'function') {
      return action(store.dispatch, store.getState);
   }
   return next(action);
};

const appStore = createStore(appReducer, applyMiddleware(asyncMiddleware));

export default appStore;
