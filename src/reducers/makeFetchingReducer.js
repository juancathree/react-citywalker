const makeFetchingReducer =
   (actions) =>
   (state = { loading: 'idle', error: null }, action) => {
      switch (action.type) {
         case actions[0]:
            return { ...state, loading: 'pending' };
         case actions[1]:
            return { ...state, loading: 'succeeded' };
         case actions[2]:
            return { error: action.error, loading: 'rejected' };
         default:
            return state;
      }
   };

export default makeFetchingReducer;
