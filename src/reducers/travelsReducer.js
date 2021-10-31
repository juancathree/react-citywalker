import makeActionCreator from './makeActionCreator';

const checkCookie = () => {
   const re = new RegExp(`(?<=citywalkerTravels=)[^;]*`);
   try {
      return JSON.parse(document.cookie.match(re)[0]);
   } catch {
      return [];
   }
};

const citiesReducer = (state = checkCookie(), action) => {
   switch (action.type) {
      case 'travels/fulfilled':
         return action.payload;
      default:
         return state;
   }
};

export const setPending = makeActionCreator('travels/pending');
export const setFulfilled = makeActionCreator('travels/fulfilled', 'payload');
export const setRejected = makeActionCreator('travels/rejected', 'error');

export default citiesReducer;
