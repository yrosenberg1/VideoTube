import React from 'react';
import {Link} from 'react-router-dom';
import StudioVideoItem from './studio_video_item';

class StudioMain extends React.Component {
    constructor(props){
        super(props)
        this.showButtons = this.showButtons.bind(this);
        this.hideButtons = this.hideButtons.bind(this);
        this.deleteVideo = this.deleteVideo.bind(this);
    }

    componentDidMount(){
        this.props.fetchUserVideos(this.props.userId)
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
        debugger
        e.preventDefault();
        debugger
        this.props.openModal('deleteVideo')
    }

    render(){
        
        const videos = Object.values(this.props.videos)
        const channelContentTable = videos.map((video, i) => {
            // let numLikes = video.likes.length
            // let numDislikes = video.dislikes.length
            // let total = numLikes + numDislikes
            // let ratio;
            // let slider;
            // let origRatio;
            // if (total === 0){
            //     ratio = "–"
            //    numLikes = null
            // } else {
            //     origRatio = (numLikes/ total) * 100
            //     ratio = Number(origRatio).toFixed(1) + "%"
            //     if (numLikes === 1){
            //         numLikes += " like"
            //     } else {
            //         numLikes += " likes"
            //     }    
            //      slider = numLikes ? <li>  <input type="range" name="likes-slider" id="likes-slider" min="0" max="100" step="1" value={origRatio} readOnly /></li> : null 
            // }
            return (
        //         <ul className='video-row-ul' key={`${video.id,i}`}>

        //             <div onMouseEnter={this.showButtons} onMouseLeave={this.hideButtons} className='video-row-container'>
        //              <div className='video-details-container'>
        //               <div className='video-thumbnail-container'><img src={window.youtube_one} /></div>
        //               <div className='video-title-desc-container'>
        //                 <div className='video-title-container'>{video.title}</div>
        //                 <div className='video-des'>{video.description}</div> 
        //                 </div>
        //                 <div className='video-hover-container'>
        //                 <div itemProp={video.id} onClick={this.editVideo}> <img src={window.create_hover} /></div>
        //                 <div> <img src={window.comment_hover} /></div>
        //                 <div><Link to={`/videos/${video.id}` }> <img src={window.gray_youtube_logo_hover} /></Link></div>
        //                 <div itemProp={video.id} onClick={this.deleteVideo}> <img src={window.delete_hover} /></div>
        //               </div>
        //              </div>
        //             <div className='video-date-container'>{video.date}</div>
        //            <div className='video-views-container'>{video.views}</div>
        //            <div className='video-comments-container'>{video.numComments}</div>
        //             <div className='likes-dislikes-container'>
        //                     <li className='ratio'>{ratio}</li>
        //                     <li className='num-likes'>{numLikes}  </li>
        //                     {/* {slider} */}
        //                 </div>
        //                 </div>
        //         </ul>
        //     )
        // }) 
        <ul className='video-row-ul' key={`${video.id,i}`}> 
            <StudioVideoItem 
                video={video}
                openModal={this.props.openModal}
             />
        </ul>)})
        return (
        <div className='studio-main-container'>
         <div className='studio-main-header'>
          <div className='channel-header-container'> <h1> Channel content</h1> </div>
          <div className='upload-header-container'>  <p>Uploads</p> </div>
         </div>
         <div className='studio-main-filter-container'>
             {/* <p>Filter</p> */}
         </div>   
            <div className='table-container'>
             <div className='video-table'>
                
                     <div className='table-header-container'>
                         <div className='video-header'>Video</div>
                         <div className='date-header'>Date</div>
                         <div className='views-header'>Views</div>
                         <div className='comments-header'>Comments</div>
                         <div className='likes-header'>Likes(vs. dislikes)</div>
                    </div>
                    {channelContentTable}
                 
             </div>
            </div>
        </div>
        )
    }
}


export default StudioMain;