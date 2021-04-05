import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import CommentContainer from '../../comments/comment_container';

class VideoShow extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchVideo(this.props.videoId)
    }

    // componentDidUpdate(){
    //     this.props.fetchVideo(this.props.videoId)
    //     debugger
    // }
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
          <div className='video-show-body'>

             <div className='video-show-main-container'>
              <div className='video-body'>
                <div><img className='video-screen' src={window.youtube_one} /></div>
                <div>
                    <div className='video-main-details'>
                        {/* supposed to have 4 child divs: 
                        1.video title 
                        2. likes and other video info 
                        2.uploader info
                        3. comments */}
                        <div className='video-info-render'>
                        <div  className='video-main-title'><p> {video.title}</p></div>
                        <div className='video-user-interactions'>
                            <ul className='video-views'>
                        <li> 0 views {'\u2022'} {string[0].slice(0,3) + " " + string[1] + " " + string[2]}</li>
                        
                        <li>  <i className="far fa-thumbs-up"> </i></li>
                        <li>  <i className="far fa-thumbs-down"> </i></li>
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
            
             <div className='video-show-right-side-container'>

             </div>
          </div>    
    
       </div>
    )
}
}
export default VideoShow;