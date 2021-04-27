import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import CommentContainer from '../../comments/comment_container';
import SideLinksContainer from './../side_links/side_links_container';
import { addView } from '../../../util/views_api_util';

class VideoShow extends React.Component{
    constructor(props){
    super(props)

        

        this.handleLike = this.handleLike.bind(this)
        this.handleDislike = this.handleDislike.bind(this)
        this.addView = this.addView.bind(this)
    }

    componentDidMount(){
        this.props.fetchVideo(this.props.videoId)
    }

    // componentDidUpdate(){
    //     this.props.fetchVideo(this.props.videoId)
    //     debugger
    // }

    // setLikesArray(){
    //     this.props.videos[this.props.videoId].likes.map(like => {
        
    //         return (
    //             like.liker_id
    //         )
    //     })
    // }
    // setDislikesArray(){
    //   this.props.videos[this.props.videoId].dislikes.map(dislike => {
        
    //         return (
    //             dislike.liker_id
    //         )
    //     })
    // }

    addView(){
        let view = {
            video_id: this.props.videoId
        }

        this.props.addView(view)
        debugger
    }

    handleLike(){
        
      const likerIdsArray = this.props.videos[this.props.videoId].likes.map(like => {
            // debugger
            return (
                like.liker_id
            )
        })
      const dislikesIdsArray = this.props.videos[this.props.videoId].dislikes.map(dislike => {
            // debugger
            return (
                dislike.liker_id
            )
        })
        
        if (likerIdsArray.includes(this.props.userId)){
            
            this.props.undoLike(this.props.videoId)
        } else if (dislikesIdsArray.includes(this.props.userId)){
            
            this.props.changeLike((this.props.videoId))
        } else {
       
        this.props.likeVideo(this.props.videoId)
        }
    }

    handleDislike(){
        const likerIdsArray = this.props.videos[this.props.videoId].likes.map(like => {
            // debugger
            return (
                like.liker_id
            )
        })
      const dislikesIdsArray = this.props.videos[this.props.videoId].dislikes.map(dislike => {
            // debugger
            return (
                dislike.liker_id
            )
        })
        if (dislikesIdsArray.includes(this.props.userId)){
            this.props.undoLike(this.props.videoId)
        } else if (likerIdsArray.includes(this.props.userId)){
            this.props.changeLike((this.props.videoId))
        } else {
      
        this.props.dislikeVideo(this.props.videoId)
        }
    }

    render(){
        
        if (Object.entries(this.props.videos).length === 0 ){
            
            return null;
        } 
        let string;
       
       const video = this.props.videos[this.props.videoId]
       if (video) {
           
         string = video.date.split(" ")
         
       }
       
       
       const uploader = video.uploader

        return (
            
        <div className='home-page-container'>
        
         < NavBar />
         <div className='side-bar-video-container'>
                < SideLinksContainer />
           
          <div className='video-show-body'>

             <div className='video-show-main-container'>
              <div className='video-body'>
                <div><img className='video-screen' src={window.youtube_one} /></div>
                
                 {/* <div>
                     <video onPlay={this.addView} className='video-screen' controls>
                         <source src={video.videoUrl} type='video/mp4'/></video>
                 </div> */}
                <div>
                    <div className='video-main-details'>
                        
                        <div className='video-info-render'>
                        <div  className='video-main-title'><p> {video.title}</p></div>
                        <div className='video-user-interactions'>
                            <ul className='video-views'>
                             <div><li> {video.views} views {'\u2022'} {string[0].slice(0,3) + " " + string[1] + " " + string[2]}</li></div>
                        <div className='commments-handler-container'>
                        <li><button onClick={() => this.handleLike()}>  <img src={window.grayThumbsUp}/> <p> {video.likes.length}</p></button></li>
                        <li><button onClick={() => this.handleDislike()}>   <img src={window.grayThumbsDown}/><p> {video.dislikes.length}</p></button></li>
                        </div>
                        </ul>

                        </div>
                        </div>
                        <div className='video-uploader-info'>
                       <div className='video-profile-name'>
                       <li ><i className="far fa-user"></i></li>
                    
                        <li  className='video-uploader-name'><p>{uploader.first_name + " " + uploader.last_name}</p></li>
                        </div>
                        <li>
                          <p className='video-description'>{video.description}</p>  
                            
                        </li>
                        <li></li>
                        </div>
                        <CommentContainer/>    
                       
                        
                       
      
      
                      
                    </div></div>
              </div>
             </div>
            
             <div className='video-show-right-side-container'></div>
             </div>
             <div className='right-side-container'></div>
          </div>    
    
       </div>
    )
}
}
export default VideoShow;