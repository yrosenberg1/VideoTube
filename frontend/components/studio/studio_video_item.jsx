import React from 'react';
import {Link} from 'react-router-dom';
import DeleteVideoContainer from './delete_video_container'; 
 
class StudioVideosItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            deleteOn: false
        }

        this.showButtons = this.showButtons.bind(this);
        this.hideButtons = this.hideButtons.bind(this);
        this.deleteVideo = this.deleteVideo.bind(this);
        this.cancelDelete = this.cancelDelete.bind(this);
    }

    showButtons(e){
        
        e.currentTarget.children[0].children[1].style["display"] = "none"
        e.currentTarget.children[0].children[2].style["display"] = "flex"
    }
    hideButtons(e){
        e.currentTarget.children[0].children[1].style["display"] = "block"
        e.currentTarget.children[0].children[2].style["display"] = "none" 
       
    }

    deleteVideo(e){
     
     this.setState({deleteOn: true})   
    }  
    
    cancelDelete(e){
        this.setState({deleteOn:false})
    }
     

    render(){
let {video} = this.props
let numLikes = video.likes.length
let numDislikes = video.dislikes.length
let total = numLikes + numDislikes
let ratio;
let slider;
let origRatio;
if (total === 0){
    ratio = "–"
   numLikes = null
} else {
    origRatio = (numLikes/ total) * 100
    ratio = Number(origRatio).toFixed(1) + "%"
    if (numLikes === 1){
        numLikes += " like"
    } else {
        numLikes += " likes"
    }    
     slider = numLikes ? <li>  <input type="range" name="likes-slider" id="likes-slider" min="0" max="100" step="1" value={origRatio} readOnly /></li> : null 
}

        return (
            <>
                        <div onMouseEnter={this.showButtons} onMouseLeave={this.hideButtons} className='video-row-container'>
                          <div className='video-details-container'>
                       <div className='video-thumbnail-container'><img src={window.youtube_one} /></div>
                       <div className='video-title-desc-container'>
                         <div className='video-title-container'>{video.title}</div>
                         <div className='video-des'>{video.description}</div> 
                         </div>
                        <div className='video-hover-container'>
                         {/* <div><Link to={`/studio/video/${video.id}/`}> <img src={window.create_hover} /></Link></div> */}
                         <div><Link to={`/studio/video/${video.id}/Details`}> <img src={window.create_hover} /></Link></div>
                         <div><Link to={`/studio/video/${video.id}/Comments`}><img src={window.comment_hover} /></Link></div>
                         <div><Link to={`/videos/${video.id}` }> <img src={window.gray_youtube_logo_hover} /></Link></div>
                         <div onClick={this.deleteVideo}> <img src={window.delete_hover} /></div>
                       </div>
                      </div>
                     <div className='video-date-container'>{video.date}</div>
                    <div className='video-views-container'>{video.views}</div>
                    <div className='video-comments-container'>{video.numComments}</div>
                     <div className='likes-dislikes-container'>
                             <li className='ratio'>{ratio}</li>
                             <li className='num-likes'>{numLikes}  </li>
                             {/* {slider} */}
                         </div>
                         </div>
                         {this.state.deleteOn  ?  < DeleteVideoContainer deleteOn={this.cancelDelete} modal={true} video={video}/> : null}
            </>
            )
    }
}


export default StudioVideosItem;