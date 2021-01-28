import React from 'react';
import {Link} from 'react-router-dom';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component{
    constructor(props){
        super(props)
        
    }

    // componentDidMount(){
    //   this.props.
    // }

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
           
           return (
            <div className='video-index-container'>
               {rows.map(row => {
                   return(
                    <ul key={row} className='row'>
                        {row.map(video => ( 
                            <VideoIndexItem video={video} key={`${video}`} />
                            
                        ))}
                    </ul>
                )})})
            </div>
        )
    }}
    
export default VideoIndex;