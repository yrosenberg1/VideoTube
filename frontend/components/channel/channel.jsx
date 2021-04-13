import React from 'react';
import NavBar from './../home_page/nav_bar/nav_bar';
import SideLinksContainer from './../home_page/side_links/side_links_container';

class Channel extends React.Component {
    constructor(props){
        super(props);
    }

    renderUserProfile(){
        // debugger
        let {user} = this.props
        return (
            <div className='user-information-container'>
                <div className='user-thumbnail-name-container'>
                <div className='user-thumbnail-container'>
                 <li><button className='user-thumbnail'>{user.first_name[0]}</button></li>
                 </div>
                 <div className='user-name-container'>
                 <li>{user.first_name} {user.last_name}</li>
                 <div>
                     <div className='manage-video-button'> MANAGE VIDEOS</div>
                 </div>
                 </div>
                 </div>
                 <div className='user-dashboard-container'>
                     <div>HOME</div>
                     <div>VIDEOS</div>
                     <div>CHANNELS</div>
                     <div>DISCUSSION</div>
                     <div>ABOUT</div>
                     
                 </div>
            </div>
        )
    }

    render(){
        // debugger
        return (
            <div className='home-page-container'>
        
            < NavBar />
            <div className='side-bar-video-container'>
                < SideLinksContainer />
                {this.renderUserProfile()}
            </div>
        </div>
        

        )
    }
}

export default Channel;