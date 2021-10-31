import makeActionCreator from './makeActionCreator';

const placesReducer = (state = [], action) => {
   switch (action.type) {
      case 'places/fulfilled':
         return action.payload;
      default:
         return state;
   }
};

export const setPending = makeActionCreator('places/pending');
export const setFulfilled = makeActionCreator('places/fulfilled', 'payload');
export const setRejected = makeActionCreator('places/rejected', 'error');

export default placesReducer;
