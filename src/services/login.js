const login =
   ({ email, password }) =>
   async (dispatch) => {
      dispatch({ type: 'auth/pending' });
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
         dispatch({ type: 'auth/fulfilled', payload: data });
      } catch (e) {
         dispatch({ type: 'auth/error', error: e.message });
      }
   };

export default login;