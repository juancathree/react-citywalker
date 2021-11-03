import { setFulfilled, setPending, setRejected } from 'reducers/placesReducer';

const getPlaces = (lng, id) => async (dispatch) => {
   dispatch(setPending());
   try {
      if (window.sessionStorage.hasOwnProperty(id)) {
         dispatch(setFulfilled(JSON.parse(window.sessionStorage.getItem(id))));
      } else {
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
         window.sessionStorage.setItem(id, JSON.stringify(data['places']));
         dispatch(setFulfilled(data['places']));
      }
   } catch (e) {
      dispatch(setRejected(e.message));
   }
};

export default getPlaces;
