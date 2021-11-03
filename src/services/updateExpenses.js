import { setFulfilled, setPending, setRejected } from 'reducers/travelsReducer';

const updateExpenses =
   ({ expense, lng }) =>
   async (dispatch) => {
      dispatch(setPending());
      try {
         var response = await fetch(
            `${process.env.REACT_APP_API}/${lng}/travel/expenses`,
            {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               credentials: 'include',
               body: JSON.stringify({ ...expense }),
            }
         );
         if (!response.ok) {
            throw new Error(response.status);
         }
         response = await fetch(`${process.env.REACT_APP_API}/${lng}/travel`, {
            method: 'GET',
            credentials: 'include',
         });
         if (!response.ok) {
            throw new Error(response.status);
         }
         const data = await response.json();
         dispatch(setFulfilled(data['travels']));
      } catch (e) {
         dispatch(setRejected(e.message));
      }
   };

export default updateExpenses;
