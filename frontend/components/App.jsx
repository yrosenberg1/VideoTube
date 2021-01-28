import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { AuthRoute} from '../util/route_util';
import login_form_container from './session_handling/login_form_container';
import signup_form_container from './session_handling/signup_form_container';
import NavBarContainer from './home_page/nav_bar/nav_bar_container';
import SideLinks from './home_page/side_links/links'
import VideoIndex from './home_page/video_page/video_index';
import HomePage from './home_page/home_page';

const App = () => (
    <div>
        {/* <Switch>
        < Route path='/' component = {NavBarContainer} />
        </Switch> */}
        <Switch>
         <AuthRoute exact path="/login" component={login_form_container} />
        <AuthRoute exact path="/signup" component={signup_form_container} />  
        < Route path='/' component ={HomePage} />
        </Switch>
        
       
        </div>
);

export default App;
