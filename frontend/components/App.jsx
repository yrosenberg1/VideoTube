import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute} from '../util/route_util';
import login_form_container from './session_handling/login_form_container';
import signup_form_container from './session_handling/signup_form_container';

const App = () => (
    <div>
        <h1> App.jsx rendering </h1>
        <Link to='/login'> LogIn Form for now </Link>
        <Link to='/signup'>SignUp Form for now</Link>
        <Switch>
         <Route exact path="/login" component={login_form_container} />
        <Route exact path="/signup" component={signup_form_container} />  
        </Switch>
        </div>
);

export default App;
