import { setFulfilled, setPending, setRejected } from 'reducers/userReducer';

const getUser = (email) => async (dispatch) => {
   dispatch(setPending());
   try {
      if (window.sessionStorage.hasOwnProperty(email)) {
         dispatch(
            setFulfilled(JSON.parse(window.sessionStorage.getItem(email)))
         );
      } else {
         const response = await fetch(
            `${process.env.REACT_APP_API}/user/${email}`,
            {
               method: 'GET',
            }
         );
         if (!response.ok) {
            throw new Error(response.status);
         }
         const data = await response.json();
         window.sessionStorage.setItem(email, JSON.stringify(data['user']));
         dispatch(setFulfilled(data['user']));
      }
   } catch (e) {
      dispatch(setRejected(e.message));
   }
};

export default getUser;
