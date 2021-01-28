import React from 'react';
import { Link} from 'react-router-dom';

class LogIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showDropDown: false,
          }
        
        this.handleSignOut = this.handleSignOut.bind(this)
        this.showDropDown = this.showDropDown.bind(this);
        // this.closeDropDown = this.closeDropDown.bind(this);
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
                <button className='upload-video-button'><i className="fas fa-video"></i> </button>
                    <div className='user-profile-'> </div>
                <div className='signed-in-button' onClick={this.showDropDown}> <i className="fas fa-user-circle"></i> </div>
                {this.state.showDropDown ? (
                <div className="user-profile-dropdown" >
                {/* ref={(element) => {
                     this.menu = element;
                 }}>        */}
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
                           <div className='dropdown-account'>Your Account</div>

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
        const loggedIn = this.props.currentUser
       const boolean = loggedIn ? this.userProfile() : this.loggedOut()
       
        return (
            <div>
            {boolean}
            
            </div>
        )
    }
}

export default LogIn;