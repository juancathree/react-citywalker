import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('pages/Login'));
const Signup = lazy(() => import('pages/Signup'));
const Cities = lazy(() => import('pages/Cities'));

function AppRouter() {
   return (
      <Suspense fallback={<h1>Loading...</h1>}>
         <BrowserRouter>
            <Switch>
               <Redirect from="/" to="/cities" exact />
               <Route path="/login" component={Login} exact />
               <Route path="/signup" component={Signup} exact />
               <PrivateRoute path="/cities" component={Cities} exact />
            </Switch>
         </BrowserRouter>
      </Suspense>
   );
}

export default AppRouter;
