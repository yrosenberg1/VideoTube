import React from 'react';
import {Link} from 'react-router-dom';

class SideLinks extends React.Component {
    constructor(props){
        super(props)
    }

    userProfile(){
        return (
        <div className='sign-in-content'>
            <p> Go to this project's Github</p>
            <p> repo to see more.</p>
            <a href='https://github.com/yrosenberg1/VideoTube' className='github-link'>
                <i className="fab fa-github"></i>
            </a>
        </div>
        )
    }

    loggedOut(){
        return (
        <div className='sign-in-content'>
                 <p> Sign in to like videos,</p>
                 <p>comment, and subscribe.</p>
             < Link to='/login' className='log-in-link'>
             <button className='log-in-button'>   <img src={window.sign_in_buttonURL} className='log-in-image' />
             </button>

            </Link>
            </div>
        )
    }
    render(){
        const loggedIn = this.props.currentUser
        const boolean = loggedIn ? this.userProfile() : this.loggedOut()
        return (
            
    <div className='side-links-container'>
        <div className='home-library-container'>
            <button className='home-button'><Link className='home' to='/'>
                <ul className='links-ul'>
           <li> <i className="fas fa-home">  </i> </li>
           <li> <p className='home-text'> Home </p></li>
            </ul>
            </Link></button>

            <button className='library'><Link to='/' >
            <ul className='links-ul'>
           <li> <i className="fas fa-video"></i></li>
           <li> <p className='library-text'>Library</p></li>
            </ul>
            </Link>
            </button>
            
        </div>

        <div className='history-likes-container'>
        
            <Link className='history-link' to='/'>
            <ul className='links-ul'>
            <li>  <i className="fas fa-history"></i> </li>
            <li>  <p>History</p></li>
            </ul>
               </Link>

        { loggedIn ?  <Link className='likes-link' to={`/video/playlist/${this.props.currentUser.id}/`}>
        <ul className='links-ul'>
       <li> <i className="fas fa-thumbs-up"></i></li>
       <li><p>Liked videos</p></li>
        </ul>
               </Link> :  <ul className='links-ul'>
       <li> <i className="fas fa-thumbs-up"></i></li>
       <li><p>Liked videos</p></li>
        </ul>}
       
        </div>

         <div className='sign-in-tab-container'>
         {boolean}
        </div>   

    </div>


   
    
        )
    }
} ;



  


export default SideLinks;


  {/* <button className='trending'>
    <i className="fas fa-fire"></i>
    <div className='trending-text'> Trending </div>
    </button> 

    <button className='subscriptions'>

    <i class="fas fa-photo-video"></i>
    <div className='subscriptions-text'>Subscriptions</div>
    </button> */}