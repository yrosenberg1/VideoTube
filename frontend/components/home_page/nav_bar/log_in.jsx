import React from 'react';
import { Link} from 'react-router-dom';
import { uploadVideo } from '../../../util/video_api_util';

class LogIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showDropDown: false,
            showUploadDropDown: false
          }
        
        this.handleSignOut = this.handleSignOut.bind(this)
        this.showDropDown = this.showDropDown.bind(this);
        this.showUploadDropDown = this.showUploadDropDown.bind(this);
        this.uploadVideoModal = this.uploadVideoModal.bind(this);
        
    }

    showDropDown(e) {
        // debugger
        e.preventDefault();
        // console.log('clicked')
        if (this.state.showDropDown === false){
        this.setState({
            showDropDown: true})
        } else {
            this.setState({
                showDropDown: false})
            }
        
        };

        showUploadDropDown(e){
            e.preventDefault();
            console.log("showUploadDropDown")
            if (this.state.showUploadDropDown === false){
                this.setState({
                    showUploadDropDown: true})
                } else {
                    this.setState({
                        showUploadDropDown: false})
                    }
        }
    

        uploadVideoModal(e){
            e.preventDefault();
            console.log("videoModal")
            this.props.openModal("modal")
            this.props.history.push(`/channel/${this.props.currentUser.id}/videos/upload`)
          
           
            
        }
//     closeDropDown(e){
//         if (!this.menu.contains(e.target)) {
//         console.log("remove menu")
//         this.setState({showDropDown: false}, () => {
//             document.removeEventListener('click', this.closeDropDown);
//     });

//     }
//    }
    handleSignOut(e){
        e.preventDefault();
        this.props.logout();
    };

    userProfile(){
        
            return (
                <div className ='user-profile'>
                <button className='upload-video-button' onClick={this.showUploadDropDown}> <img src={window.video_call_png}/> </button>
               {this.state.showUploadDropDown ? (
                   <div className="video-upload-dropdown" ><p onClick={this.uploadVideoModal}>Upload video</p> </div>
               ) : (null)}
                    <div className='user-profile-'> </div>
                <div className='signed-in-button' onClick={this.showDropDown}> <i className="fas fa-user-circle"></i> </div>
                {this.state.showDropDown ? (
                <div className="user-profile-dropdown" >
                
                  <div className='name-email-container'>
                      <div className='container-icon'> <i className="fas fa-user-circle"></i> </div>
                            <div className='dropdown-name'>
                               <h1>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>
                            </div>
                           <div className='dropdown-email'> {this.props.currentUser.email} </div>
                  </div>    
                            <div className='bottom-dropdown-container'>
                            <div className='account-container'>
                           <div className='account-icon'> <i className="fas fa-user"></i></div>
                           <div className='dropdown-account'><Link to={`/channel/${this.props.currentUser.id}`}>Your channel</Link></div>

                           </div>
                           <div className='sign-out-container' onClick={this.handleSignOut}>
                               <div className='sign-out-logo'> <i className="fas fa-sign-out-alt"></i> </div>  
                          <div className='dropdown-sign-out'> <p> Sign Out</p> </div>
                             </div>
                          </div>
                </div>
                  ) : ( null)
                 }
                    </div>
            )
       
    }

    loggedOut(){

        return (
            < Link to='/login' className='log-in-link'>
             <button className='log-in-button'>   <img src={window.sign_in_buttonURL} className='log-in-image' />
             </button>

            </Link>
        
        )    
    }

    render(){
        // debugger
        const loggedIn = this.props.currentUser ? this.userProfile() : this.loggedOut()
       
        return (
            <div>
            {loggedIn}
            
            </div>
        )
    }
}

export default LogIn;