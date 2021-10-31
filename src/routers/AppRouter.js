import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('pages/Login'));
const Signup = lazy(() => import('pages/Signup'));
const Cities = lazy(() => import('pages/Cities'));
const City = lazy(() => import('pages/City'));
const Travels = lazy(() => import('pages/Travels'));
const User = lazy(() => import('pages/User'));
const NewTravel = lazy(() => import('pages/NewTravel'));

function AppRouter() {
   return (
      <Suspense fallback={<h1>Loading...</h1>}>
         <BrowserRouter>
            <Switch>
               <Redirect from="/" to="/cities" exact />
               <Route path="/login" component={Login} exact />
               <Route path="/signup" component={Signup} exact />
               <PrivateRoute path="/cities" component={Cities} exact />
               <PrivateRoute path="/cities/:id" component={City} exact />
               <PrivateRoute path="/travels" component={Travels} exact />
               <PrivateRoute path="/newTravel" component={NewTravel} exact />
               <PrivateRoute path="/user" component={User} exact />
            </Switch>
         </BrowserRouter>
      </Suspense>
   );
}

export default AppRouter;
