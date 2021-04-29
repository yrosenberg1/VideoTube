import React from "react";
import { Link } from "react-router-dom";
import user_video_container from "../channel/user_video_container";
// import LogInContainer from './log_in_container';
// import SearchBarContainer from './search_bar_container';


class StudioNavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDropDown: false,
            showUploadDropDown: false
        };
        this.userProfile = React.createRef();
        this.uploadVideoBtn = React.createRef();
        this.handleSignOut = this.handleSignOut.bind(this)
        this.showDropDown = this.showDropDown.bind(this);
        this.showUploadDropDown = this.showUploadDropDown.bind(this);
        this.closeUploadDropDown = this.closeUploadDropDown.bind(this);
        this.uploadVideoModal = this.uploadVideoModal.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
    }

    showDropDown(e){
        e.preventDefault();
        if (this.state.showDropDown === false){
         
            this.setState({showDropDown: true}, () => {
                document.addEventListener('click', this.closeDropDown)
            } )
               
        } else {
            this.setState({showDropDown: false})
                
        }
    };

    closeDropDown(e){
        
        
        if (this.userProfile.current.contains(e.target)){ return
        } else {
        this.setState({showDropDown: false})
        
            document.removeEventListener('click', this.closeDropDown) ;
    }
}

    showUploadDropDown(e){
        e.preventDefault();
        if (this.state.showUploadDropDown === false){
            this.setState({showUploadDropDown: true}, () => {
                document.addEventListener('click', this.closeUploadDropDown)
            })
            } else {
                this.setState({
                    showUploadDropDown: false})
                }
    }

    closeUploadDropDown(e){
        if (this.uploadVideoBtn.current.contains(e.target)){ return
        } else {
        this.setState({showUploadDropDown: false})
        
            document.removeEventListener('click', this.closeUploadDropDown) ;
    }
    }

    uploadVideoModal(e){
        e.preventDefault();
      
        this.props.openModal("modal")
    }

    handleSignOut(e){
        e.preventDefault();
        this.props.logout();
    };
        
    componentWillUnmount(){
        document.removeEventListener('click', this.closeUploadDropDown) ;
        document.removeEventListener('click', this.closeDropDown) 
    }
       
        


    render(){
        let {user} = this.props
        return (
            <div className='studio-navbar-container'>
           
                <div className='studio-left-side'>
                  
                  
                      <button className='studio-navbar-hamburger-button' onClick={() => ('hamburger clicked')}> 
                      <i className="fas fa-bars"></i>  </button>
                
                  
                   <div className='youtube-studio-logo'>
                       <Link to='/'><img src={window.youtube_logo} /> Studio</Link>
                   </div>
               </div>

               {/* <div className='center'>
                      < SearchBarContainer />
               </div> */}

               <div className='right-side'>
               <div className='studio-user-profile'>
                   <div ref={this.uploadVideoBtn} className='studio-upload-video-button' onClick={this.showUploadDropDown}><img src={window.video_call}/><p> CREATE </p></div>
                   {this.state.showUploadDropDown ? ( 
                       <div className="video-upload-dropdown"onClick={this.uploadVideoModal}><img src={window.studio_video_upload} /><p>Upload videos</p></div>
                   ) : null}
                   <div ref={this.userProfile} className='studio-sign-in-container'>
                   <div className='studio-signed-in-button' onClick={this.showDropDown}><i className="fas fa-user-circle"></i> </div>
                   {this.state.showDropDown ? (
                       <div className='studio-profile-dropdown'>
                           <div className='studio-name-icon-container'>
                               <div className='studio-container-icon'><i className="fas fa-user-circle"></i> </div>
                               <div className='studio-dropdown-name'><h1>{user.first_name} {user.last_name}</h1> </div>
                            </div>   
                           <div className='dropdown-button-container'>
                               <div className='studio-account-container'><Link to={`/channel/${user.id}`}><i className="fas fa-user"></i> <p>Your Channel</p></Link></div>
                               <div className='studio-Youtube-link'><Link to={'/'}><img src={window.gray_youtube_logo} className='youtube-pic' /><p>VideoTube</p></Link></div>
                               <div className='studio-sign-out-div' onClick={this.handleSignOut}> <i className="fas fa-sign-out-alt"></i> <p> Sign Out</p> </div>
                            </div>
                        </div> 
                   ) : null}
                   </div>
               </div>
          </div>
    </div>
           
        )
    }
};
export default StudioNavBar;