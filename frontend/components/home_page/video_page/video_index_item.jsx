import React from 'react';
import {Link} from 'react-router-dom';



class VideoIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        debugger
        return (
           
            <div className='video-item-container'>

                <div className='video-thumbail-container'>
                    <li className='video-item'>
                        <img src={window.youtube_one} className="video-thumbnail" /> 
                    </li> 
                </div>

                <div className='video-information-container'>
                    <div className='video-uploader-icon'>
                       <li ><i className="far fa-user"></i></li>
                    </div>
                    <div className='video-details'>
                        <li  className='video-title'><p> Some title is supposed to go here...
                        </p></li>
                        <li  className='video-uploader'><p>Daily Dose of Internet</p></li>
      
      
                        <li  className='video-upload-date'><p>10 hours ago</p></li>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default VideoIndexItem;