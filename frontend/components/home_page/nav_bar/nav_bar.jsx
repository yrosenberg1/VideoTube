import React from "react";
import { Link } from "react-router-dom";
import LogInContainer from './log_in_container';
import SearchBar from './search_bar';


class NavBar extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className='nav-bar'>
                <div className='left-side'>
                  
                   <div className='hamburger'>
                      <button className='nav-bar-hamburger-button'> <img src={window.hamburgerURL} className='hamburger-logo' /> </button>
                   </div>
                   <div className='youtube-logo'>
                       <Link className='youtube-icon' to='/'><img src={window.youtubelogoURL} className='youtube-pic' /></Link>
                   </div>
               </div>

               <div className='center'>
                      < SearchBar />
               </div>

              <div className='right-side'>

                < LogInContainer />

              </div>
                



            </div>
        )
    }
};
export default NavBar;