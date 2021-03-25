import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from './nav_bar/nav_bar';
import SideLinksContainer from './side_links/side_links_container';
import VideoIndex from './video_page/video_index';
import VideoIndexContainer from './video_page/video_index_container';



class HomePage extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
 <div className='home-page-container'>
< NavBar />
<div className='side-bar-video-container'>
< SideLinksContainer />
< VideoIndexContainer />
</div>
 </div>


        )
        }
    };

    export default HomePage;