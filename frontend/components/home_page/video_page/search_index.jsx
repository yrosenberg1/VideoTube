
import React from 'react';
import VideoIndexItem from './video_index_item';
import NavBar from './../nav_bar/nav_bar';
import SideLinksContainer from './../side_links/side_links_container';

class SearchIndex extends React.Component{
    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        
       if (!Object.entries(this.props.videos).length){
           
  this.props.fetchSearchVideos(this.props.match.params.query)
    }
    
    }

    rowSplit(){
        
        const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

       let rowArrays = [];
              while (array.length > 0){
               rowArrays.push(array.splice(0,4));
               
              }
              return rowArrays
         };

    render(){
        const rows = this.rowSplit();
        let {videos} = this.props;
        videos = Object.values(videos)
        let videosIndex = videos.map((video, idx) => {
            return (
             
                    <div key={idx} className='video-search-li'>
                        <VideoIndexItem key={idx} video={video} />
                    </div>


              
            )
        })
        
        return (
            <div className='home-page-container'>
        < NavBar />
    <div className='side-bar-video-container'>
    < SideLinksContainer />
            
               <div className='video-index-container'>
            <ul className='video-index-search-flex'>
            {videosIndex}

            </ul>
               </div>
    </div> 
    </div>       
        )
    }
}

export default SearchIndex;
