import { setFulfilled, setPending, setRejected } from 'reducers/citiesReducer';

const getCities = (lng) => async (dispatch) => {
   dispatch(setPending());
   try {
      const response = await fetch(
         `${process.env.REACT_APP_API}/${lng.split('-')[0]}/place/cities`,
         {
            method: 'GET',
            credentials: 'include',
         }
      );
      if (!response.ok) {
         throw new Error(response.status);
      }
      const data = await response.json();
      let d = new Date();
      d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000);
      document.cookie =
         'citywalkerCities=' +
         JSON.stringify(data['cities']) +
         ';expires=' +
         d +
         ';path=/';
      dispatch(setFulfilled(data['cities']));
   } catch (e) {
      dispatch(setRejected(e.message));
   }
};

export default getCities;
