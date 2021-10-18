const checkCookie = () => {
   const re = new RegExp(`(?<=citywalkerJWT=)[^;]*`);
   try {
      return document.cookie.match(re)[0];
   } catch {
      return null;
   }
};

const authReducer = (state = checkCookie(), action) => {
   switch (action.type) {
      case 'auth/fulfilled':
         return action.payload;
      case 'auth/signup':
         return state;
      case 'auth/logout':
         return '';
      default:
         return state;
   }
};

export default authReducer;
