import React from "react";
import { Link } from "react-router-dom";
import LogInContainer from './log_in_container';
import SearchBarContainer from './search_bar_container';


class NavBar extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className='nav-bar-container'>
           
                <div className='left-side'>
                  
                   {/* <div className='hamburger'> */}
                      <button className='nav-bar-hamburger-button'> 
                      <i className="fas fa-bars"></i>  </button>
                   {/* </div> */}
                  
                   <div className='youtube-logo'>
                       <Link className='youtube-icon' to='/'><img src={window.youtubelogoURL} className='youtube-pic' /></Link>
                   </div>
                   {/* <div className='youtube-logo'>
                       <Link className='youtube-icon' to='/'><img src={window.youtube_logo} className='youtube-pic' /> VideoTube</Link>
                   </div> */}
               </div>

               <div className='center'>
                      < SearchBarContainer />
               </div>

               <div className='right-side'>

                < LogInContainer />
               
             
                </div>



            </div>
           
        )
    }
};
export default NavBar;