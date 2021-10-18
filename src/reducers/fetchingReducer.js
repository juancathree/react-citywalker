const fetchingReducer = (state = { loading: 'idle', error: null }, action) => {
   switch (action.type) {
      case 'auth/pending':
         return { ...state, loading: 'pending' };
      case 'auth/fulfilled':
         return { ...state, loading: 'succeded' };
      case 'auth/error':
         return { error: action.error, loading: 'rejected' };
      default:
         return state;
   }
};

export default fetchingReducer;
