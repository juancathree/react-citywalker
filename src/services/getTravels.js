import { setFulfilled, setPending, setRejected } from 'reducers/travelsReducer';

const getTravels =
   ({ lng, length }) =>
   async (dispatch) => {
      dispatch(setPending());
      try {
         var response = await fetch(
            `${process.env.REACT_APP_API}/${lng}/travel`,
            {
               method: 'GET',
               credentials: 'include',
            }
         );
         if (!response.ok) {
            throw new Error(response.status);
         }
         const data = await response.json();
         if (data['travels'].length === 0 && length === 0) return;
         else dispatch(setFulfilled(data['travels']));
      } catch (e) {
         dispatch(setRejected(e.message));
      }
   };

export default getTravels;
