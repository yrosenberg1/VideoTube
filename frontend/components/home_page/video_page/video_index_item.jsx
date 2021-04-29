import React from 'react';
import {Link} from 'react-router-dom';



class VideoIndexItem extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        if (!this.props.video){
            return null;
        } 
       let video = this.props.video
       let uploader = video.uploader
        // 
        return (
            <div className='video-item-container'>

                <div className='video-thumbail-container'>
                    <li className='video-item'>
                   
                        {/* <Link to={`/videos/${video.id}`} > <img src={window.youtube_one} className="video-thumbnail" /> </Link> */}
                        <Link to={`/videos/${video.id}`} >  <video key={video.videoUrl} className='video-thumbnail'>
                         <source src={video.videoUrl} type='video/mp4'/></video> </Link>
                        </li>
                     
                </div>

                <div className='video-information-container'>
                    <div className='video-uploader-icon'>
                       <li ><i className="far fa-user"></i></li>
                    </div>
                    <div className='video-details'>
                        <li  className='video-title'><p> {video.title}
                        </p></li>
                        <li  className='video-uploader'><p>{uploader.first_name + " " + uploader.last_name}</p></li>
      
      
                        <li  className='video-upload-date'><p>{video.timestamp + " ago"}</p></li>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default VideoIndexItem;