import { setFulfilled, setPending, setRejected } from 'reducers/authReducer';

const login =
   ({ email, password }) =>
   async (dispatch) => {
      dispatch(setPending());
      try {
         const response = await fetch(`${process.env.REACT_APP_API}/login`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
         });
         if (!response.ok) {
            throw new Error(response.status);
         }
         const data = await response.json();
         let d = new Date();
         d.setTime(d.getTime() + 120 * 24 * 60 * 60 * 1000);
         document.cookie =
            'citywalkerJWT=' +
            data['citywalkerJWT'] +
            ';expires=' +
            d +
            ';path=/';
         window.localStorage.setItem('email', email);
         dispatch(setFulfilled(data));
      } catch (e) {
         dispatch(setRejected(e.message));
      }
   };

export default login;
