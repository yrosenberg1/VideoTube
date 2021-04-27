import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import LoginFormContainer from './session_handling/login_form_container';
import SignupFormContainer from './session_handling/signup_form_container';

import HomePage from './home_page/home_page';
import VideoShowContainer from './home_page/video_page/video_show_container';
import ChannelContainer from './channel/channel_container';
import StudioManagerContainer from './studio/studio_manager_container';
import StudioEditVideoContainer from './studio/edit_video_container';
import PlayListContainer from './home_page/video_page/playlist_container';
const App = () => (
    <div>
        {/* <Switch>
        < Route path='/' component = {NavBarContainer} />
        </Switch> */}
        <Switch>
         <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />  
        <Route exact path="/videos/:id" component={VideoShowContainer} />
        <ProtectedRoute exact path="/channel/:id" component={ChannelContainer} />
        <ProtectedRoute exact path="/channel/:id/videos/upload" component={StudioManagerContainer} />
        <ProtectedRoute exact path="/studio/video/:id/:component" component={StudioEditVideoContainer} />
        <ProtectedRoute exact path="/video/playlist/:id/" component={PlayListContainer} />
        < Route path='/' component ={HomePage} />
        </Switch>
        
       
        </div>
);

export default App;
