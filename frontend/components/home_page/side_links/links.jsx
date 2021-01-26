import React from 'react';
import {Link} from 'react-router-dom';

class SideLinks extends React.Component {
    constructor(props){
        super(props)
    }
    render(){

        return (
            
    <div className='side-links-container'>

    <Link className='home' to='/'>
        <img src={window.home_icon} className='home-icon' />
    </Link>

    <div className='trending'>
    <img src={window.trending} className='trending-icon' />
    </div>

    <div className='subscriptions'>

    <img src={window.subscriptions} className='subscription-icon' />
    </div>

    <Link className='library'>
    <img src={window.library} className='library-icon' />
    </Link>

    </div>

        )
    }
} ;



  


export default SideLinks;