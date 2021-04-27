import React from 'react';
import {Link} from 'react-router-dom';
import VideoIndexItem from './video_index_item';
import NavBar from './../nav_bar/nav_bar';
import SideLinksContainer from './../side_links/side_links_container';

class PlayList extends React.Component{
    constructor(props){
        super(props)
      
        this.state = {
            videos: {}
        };
        
    }

    componentDidMount(){
     this.props.fetchUserLikedVideos(this.props.userId)
       
    }

    

    render(){
        
        let {user} = this.props
        
        const videos = Object.values(this.props.videos)
        let numVideos;

        if(videos.length){ numVideos = videos.length === 1 ? "video" :  "videos" }
        debugger
        const likedVideos = videos.map((video, idx) => {

            return (
                <ul className='video-row-likes' key={`${video.id, idx}`}>
                    {/* <VideoIndexItem video={video}/> */}
                 <div className='like-num'><p>{idx + 1}</p></div>  
                 <div className='like-vid-link'>
                    <img src={window.youtube_one}></img>
                </div> 
                <div className='liked-vids-info'>
                    <div className='playlist-vid-title'>{video.title}</div>
                    <div className='playlist-vid-uploader'>{video.uploader.first_name} {video.uploader.last_name}</div>
                </div>
                </ul>
            )
        })
            
        return (
            <div className='home-page-container'>
            < NavBar />
            <div className='side-bar-video-container'>
            < SideLinksContainer />
            <div className='playlists-container'>
            <div className='playlist-desc'>
                <div className='playlist-header'><h1>Liked Videos</h1></div>
                <div className='playlist-count'>{videos.length} {numVideos} </div>
                <div className='playlist-user-name'>{user.first_name} {user.last_name}</div>
            </div>
           
                <div className='liked-vids-container'>

                {likedVideos}
                </div>
        
            </div>
            </div>
            </div>
        )
    }
}
    
export default PlayList;