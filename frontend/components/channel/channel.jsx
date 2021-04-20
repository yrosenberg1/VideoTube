import React from 'react';
import { Link} from 'react-router-dom';

import NavBar from './../home_page/nav_bar/nav_bar';
import SideLinksContainer from './../home_page/side_links/side_links_container';
import Subscriptions from './Subscriptions';
import UserVideosContainer from './user_video_container';
import PlayLists from './playlists';
import FollowedChannels from './followed_channels';
import Discussion from './discussion';
import About from './about';

class Channel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'VIDEOS'
        }

       
        this.button = React.createRef();
        this.buttonValues = this.buttonValues.bind(this);
    }

    componentDidMount() {
        this.button.current.click()
      }

    renderUserProfile(){
        // debugger
        let {user} = this.props
        return (
            <div className='main-user-profile-container'>
            <div className='user-information-container'>
                <div className='user-thumbnail-name-container'>
                <div className='user-thumbnail-container'>
                 <li><button className='user-thumbnail'>{user.first_name[0]}</button></li>
                 </div>
                 <div className='user-name-container'>
                 <li>{user.first_name} {user.last_name}</li>
                 <div>
                     <div className='manage-video-button'><Link to={`/channel/${user.id}/videos/upload`}> MANAGE VIDEOS</Link></div>
                 </div>
                 </div>
                 </div>
                 <div className='user-dashboard-container'>
                     {/* <button value='HOME' onClick={this.buttonValues}>HOME</button> */}
                     <button ref={this.button} value='VIDEOS' onClick={this.buttonValues}>VIDEOS</button>
                     <button value='PLAYLISTS' onClick={this.buttonValues}>PLAYLISTS</button>
                     {/* <button value='CHANNELS' onClick={this.buttonValues}>CHANNELS</button> */}
                     {/* <button value='DISCUSSION' onClick={this.buttonValues}>DISCUSSION</button> */}
                     <button value='ABOUT' onClick={this.buttonValues}>ABOUT</button>
                 </div>
            </div>
           {this.renderMain()}
            </div>
        )
    }
    renderMain(){
      
        
        switch (this.state.value) {
            case 'HOME':
                 return (
            <Subscriptions 
                user = {this.props.user}
                userId ={this.props.userId}
                />
                 )
                
            case 'VIDEOS':
                
                return (
                <UserVideosContainer 
                    user = {this.props.user}
                    userId ={this.props.userId}
                   
                />
                )
            case 'PLAYLISTS':
                return (
                <PlayLists 
                    user = {this.props.user}
                    userId ={this.props.userId}
                />
                )

            case 'CHANNELS':
                return (
                <FollowedChannels 
                     user = {this.props.user}
                    userId ={this.props.userId}
                    />
                )
            case 'DISCUSSION':
                return (
                <Discussion 
                    user = {this.props.user}
                    userId ={this.props.userId}
                    />
                )
            case 'ABOUT':
                return (
                <About 
                    user = {this.props.user}
                    userId ={this.props.userId}/>
                )
                break;
        
            
        }
        
        
    }

    buttonValues(e){
        e.preventDefault();
        switch (e.currentTarget.value) {
            case 'HOME':
             return  this.setState({value:'HOME'})
               
           case 'VIDEOS':
               
               return  this.setState({value:'VIDEOS'})
               
           case 'PLAYLISTS':
               return this.setState({value: 'PLAYLISTS'})

           case 'CHANNELS':
           return this.setState({value:'CHANNELS'})

           case 'DISCUSSION':
           return this.setState({value: 'DISCUSSION'})
           
           case 'ABOUT':
           return this.setState({value: 'ABOUT'})
    }
}

    render(){
      
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