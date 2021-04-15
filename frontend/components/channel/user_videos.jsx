import React from 'react';
import UserVideosItem from './user_videos_items';

class UserVideos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            videos: {}
        }
        
    }
    componentDidMount(){
       this.props.fetchUserVideos(this.props.userId)
        
        
    }

    render(){
        const videos = Object.values(this.props.videos)
        
        if (!videos.length){

            return (
            <div>
                
            This channel has no videos.
            </div>
            )
        }
        return (
            <div className='user-video-index-container'>
                {videos.map((video, i) => {
                    return (
                        <ul key={`${video.id,i}`}>
                        <UserVideosItem video={video} />
                        </ul>
                    )
                })}
      
        </div>
        )
    }
}

export default UserVideos;