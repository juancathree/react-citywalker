import { setFulfilled, setPending, setRejected } from 'reducers/placesReducer';

const getPlaces = (lng, id) => async (dispatch) => {
   dispatch(setPending());
   try {
      const response = await fetch(
         `${process.env.REACT_APP_API}/${lng.split('-')[0]}/place/${id}`,
         {
            method: 'GET',
            credentials: 'include',
         }
      );
      if (!response.ok) {
         throw new Error(response.status);
      }
      const data = await response.json();
      dispatch(setFulfilled(data['places']));
   } catch (e) {
      dispatch(setRejected(e.message));
   }
};

export default getPlaces;
