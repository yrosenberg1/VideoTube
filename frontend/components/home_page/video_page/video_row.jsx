import React from 'react';
import {Link} from 'react-router-dom';
import VideoIndexItem from './video_index_item'

class VideoRow extends React.Component{
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //   this.props.
    // }

    render(){

        return (
            <div className='video-row-container'>
                <ul>
                {/* {videos.map(video => (
                    < VideoIndexItem />
                ))} */}

                < VideoIndexItem />
                
                </ul>




            </div>

        )
    }
}

export default VideoRow;