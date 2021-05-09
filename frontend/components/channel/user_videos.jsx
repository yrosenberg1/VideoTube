import React from 'react';
import UserVideosItem from './user_videos_items';

class UserVideos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            videos: {}
        }
        
    }
  
    
    render(){
        const videos = Object.values(this.props.videos)
        
        if (!videos.length){

            return (
            <div className='channel-no-videos'>
                
            This channel has no videos.
            </div>
            )
        }
        return (
            <div className='user-video-container'>
                  <div className='user-vid-title'><p>Uploads</p></div>
            <div className='user-video-index-container'>
                {videos.map((video, i) => {
                    return (
                        <ul  className='user-video-item' key={`${video.id,i}`}>
                        <UserVideosItem video={video} />
                        </ul>
                    )
                })}
      
        </div>
        </div>
        )
    }
}

export default UserVideos;