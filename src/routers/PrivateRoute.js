import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const selecJWT = (state) => state.auth.jwt;

function PrivateRoute({ component: Component, ...rest }) {
   const jwt = useSelector(selecJWT);
   return (
      <Route {...rest}>{jwt ? <Component /> : <Redirect to="/login" />}</Route>
   );
}

export default PrivateRoute;
