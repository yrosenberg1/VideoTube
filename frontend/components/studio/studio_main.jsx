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
        
        e.preventDefault();
        
        this.props.openModal('deleteVideo')
    }

    render(){
        
        const videos = Object.values(this.props.videos)
        const channelContentTable = videos.map((video, i) => {
          
            return (
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
          <div className='channel-header-container'> <h1> Video details</h1> </div>
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