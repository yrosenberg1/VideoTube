import React from 'react';
import {Link} from 'react-router-dom';



class VideoIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        return (
            <div className='video-index-item-container'>
               <li className='videos'>
               <img src={window.youtube_one} className="image" />  
               <img src={window.youtube_two} className="image" />  
               <img src={window.youtube_three} className="image" />  
               <img src={window.youtube_four} className="image" />  

               </li>
            </div>

        )
    }
}

export default VideoIndexItem;