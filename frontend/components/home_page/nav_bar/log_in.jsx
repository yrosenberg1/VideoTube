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
        this.profile = React.createRef();
        this.uploadVideoBtn = React.createRef();
        this.handleSignOut = this.handleSignOut.bind(this)
        this.showDropDown = this.showDropDown.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
        this.showUploadDropDown = this.showUploadDropDown.bind(this);
        this.closeUploadDropDown = this.closeUploadDropDown.bind(this);
        this.uploadVideoModal = this.uploadVideoModal.bind(this);
        
    }

    showDropDown(e) {
        // 
        e.preventDefault();
        // ('clicked')
        if (this.state.showDropDown === false){
        this.setState({
            showDropDown: true}, () => {
                document.addEventListener('click', this.closeDropDown)
            } )
        } else {
            this.setState({
                showDropDown: false})
            }
        
        };

        closeDropDown(e){
        
        
            if (this.profile.current.contains(e.target)){ return
            } else {
            this.setState({showDropDown: false})
            
                document.removeEventListener('click', this.closeDropDown) ;
        }
    }
    

        showUploadDropDown(e){
            e.preventDefault();
           
            if (this.state.showUploadDropDown === false){
                this.setState({
                    showUploadDropDown: true}, () => {
                        document.addEventListener('click', this.closeUploadDropDown)
                    })
                } else {
                    this.setState({
                        showUploadDropDown: false})
                    }
        }

        closeUploadDropDown(e){
            e.preventDefault()
            if (this.uploadVideoBtn.current.contains(e.target)){return}
             else {
                
            this.setState({showUploadDropDown: false})
            
                document.removeEventListener('click', this.closeUploadDropDown) ;
        }
        }
    

        componentWillUnmount(){
            document.removeEventListener('click', this.closeUploadDropDown) ;
            document.removeEventListener('click', this.closeDropDown) 
        }

        uploadVideoModal(e){
            e.preventDefault();
            this.props.openModal("modal")
            this.props.history.push(`/channel/${this.props.currentUser.id}/videos/upload`)

        }
    


    handleSignOut(e){
        e.preventDefault();
        document.removeEventListener('click', this.closeDropDown) ;
        this.props.logout();
    };

    userProfile(){
        
            return (
                <div className ='user-profile'>
                <div className='ref-upload' ref={this.uploadVideoBtn}><button className='upload-video-button' onClick={this.showUploadDropDown}> <img src={window.video_call_png}/> </button>
               {this.state.showUploadDropDown ? (
                   <div className="video-upload-dropdown" ><img src={window.navbarUpload} /><p onClick={this.uploadVideoModal}>Upload video</p> </div>
               ) : (null)} </div>
                    {/* <div className='user-profile-'> </div> */}
                <div ref={this.profile}><div className='signed-in-button' onClick={this.showDropDown}> <i className="fas fa-user-circle"></i> </div>
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
                           <div className='studio-link-container'>
                               <div className='studio-link-icon'><i className="fas fa-cog"></i></div>
                               <div className='dropdown-studio'><Link to={`/channel/${this.props.currentUser.id}/videos/upload`}>VideoTube Studio</Link></div>
                           </div>
                           <div className='sign-out-container' onClick={this.handleSignOut}>
                               <div className='sign-out-logo'> <i className="fas fa-sign-out-alt"></i> </div>  
                          <div className='dropdown-sign-out'> <p> Sign Out</p> </div>
                             </div>
                          </div>
                </div>
                  ) : ( null)
                 }</div>
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
        // 
        const loggedIn = this.props.currentUser ? this.userProfile() : this.loggedOut()
       
        return (
            <div>
            {loggedIn}
            
            </div>
        )
    }
}

export default LogIn;