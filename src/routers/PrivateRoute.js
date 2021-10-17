import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
   const isLogged = true;
   return (
      <Route {...rest}>
         {isLogged ? <Component /> : <Redirect to="/login" />}
      </Route>
   );
}

export default PrivateRoute;
