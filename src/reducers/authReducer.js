import makeActionCreator from './makeActionCreator';

const checkCookie = () => {
   const re = new RegExp(`(?<=citywalkerJWT=)[^;]*`);
   try {
      return document.cookie.match(re)[0];
   } catch {
      return '';
   }
};

const authReducer = (state = checkCookie(), action) => {
   switch (action.type) {
      case 'auth/fulfilled':
         return action.payload;
      case 'auth/logout':
         return '';
      default:
         return state;
   }
};

export const setPending = makeActionCreator('auth/pending');
export const setFulfilled = makeActionCreator('auth/fulfilled', 'payload');
export const setRejected = makeActionCreator('auth/rejected', 'error');
export const setLogout = makeActionCreator('auth/logout');

export default authReducer;
