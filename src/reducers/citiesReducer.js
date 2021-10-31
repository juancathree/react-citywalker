import makeActionCreator from './makeActionCreator';

const checkCookie = () => {
   const re = new RegExp(`(?<=citywalkerCities=)[^;]*`);
   try {
      return JSON.parse(document.cookie.match(re)[0]);
   } catch {
      return [];
   }
};

const citiesReducer = (state = checkCookie(), action) => {
   switch (action.type) {
      case 'cities/fulfilled':
         return action.payload;
      default:
         return state;
   }
};

export const setPending = makeActionCreator('cities/pending');
export const setFulfilled = makeActionCreator('cities/fulfilled', 'payload');
export const setRejected = makeActionCreator('cities/rejected', 'error');

export default citiesReducer;
