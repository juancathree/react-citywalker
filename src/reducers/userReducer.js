import makeActionCreator from './makeActionCreator';

const userReducer = (state = {}, action) => {
   switch (action.type) {
      case 'user/fulfilled':
         return action.payload;
      default:
         return state;
   }
};

export const setPending = makeActionCreator('user/pending');
export const setFulfilled = makeActionCreator('user/fulfilled', 'payload');
export const setRejected = makeActionCreator('user/rejected', 'error');

export default userReducer;
