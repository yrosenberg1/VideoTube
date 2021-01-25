import React from 'react';
import { Link} from 'react-router-dom';

class LogIn extends React.Component{
    constructor(props){
        super(props)
   
    }

    userProfile(){
            return (
                <div className ='user-profile'>
                <button className='upload-video-button'><img src={window.upload_vidsURL} className='upload-vid-pic' /> </button>
                <button className='signed-in-button'><img src={window.logged_inURL} className='sign-in-pic' /> </button>

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
        
        const loggedIn = this.props.currentUser
       const boolean = loggedIn ? this.userProfile() : this.loggedOut()
       debugger
        return (
            <div>
            {boolean}
            
            </div>
        )
    }
}

export default LogIn;