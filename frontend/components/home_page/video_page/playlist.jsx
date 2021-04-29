import React from 'react';
import {Link} from 'react-router-dom';
import VideoIndexItem from './video_index_item';
import NavBar from './../nav_bar/nav_bar';
import SideLinksContainer from './../side_links/side_links_container';

class PlayList extends React.Component{
    constructor(props){
        super(props)
      
        this.state = {
            videos: {},
            
        };
        
    }

    componentDidMount(){
        if (this.props.match.params.component === 'likes'){
     this.props.fetchUserLikedVideos(this.props.userId).then(() => this.setState({videos: this.props.videos}))
        }

        if (this.props.match.params.component === 'history'){
            this.props.fetchUserWatchedVideos(this.props.userId).then(() => this.setState({videos: this.props.videos}))
            
            
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.component !== prevProps.match.params.component){
            if (this.props.match.params.component === "likes"){
                
                this.props.fetchUserLikedVideos(this.props.userId).then(() => this.setState({videos: this.props.videos}))
            }
            if (this.props.match.params.component === 'history'){
                this.props.fetchUserWatchedVideos(this.props.userId).then(() => this.setState({videos: this.props.videos}))
                
                
            }
        }
    }

    

    render(){
            
        let {user} = this.props
        let {component} = this.props.match.params
        
        const videos = Object.values(this.state.videos)
        
        let numVideos;

        if(videos.length){ numVideos = videos.length === 1 ? "video" :  "videos" }
        
        const vids = videos.map((video, idx) => {

            return (
                <ul className='video-row-likes' key={`${video.id, idx}`}>
                    {/* <VideoIndexItem video={video}/> */}
                 <div className='like-num'><p>{idx + 1}</p></div>  
                 <div className='like-vid-link'><Link to={`/videos/${video.id}`}>
                 <video key={video.videoUrl}>
                         <source src={video.videoUrl} type='video/mp4'/></video>
                    </Link></div> 
                <div className='liked-vids-info'>
                    <div className='playlist-vid-title'>{video.title}</div>
                    {component === "likes" ? <div className='playlist-vid-uploader'>{video.uploader.first_name} {video.uploader.last_name}</div>   
                  : <div className='playlist-vid-uploader'>{video.uploader.first_name} {video.uploader.last_name} • {video.views} views </div>}
                  {component === 'history' ? <div className='playlist-video-description'>{video.description} </div>: null} 
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
              {component === "likes" ? <div className='playlist-header'><h1>Liked Videos</h1></div> :
                <div className='playlist-header'><h1>Watch history</h1></div>}
                <div className='playlist-count'>{videos.length} {numVideos} </div>
                <div className='playlist-user-name'>{user.first_name} {user.last_name}</div>
               
            </div>
           
                <div className='liked-vids-container'>

                {vids}
                </div>
        
            </div>
            </div>
            </div>
        )
    }
}
    
export default PlayList;