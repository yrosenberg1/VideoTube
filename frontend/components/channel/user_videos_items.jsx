import React from 'react';
import {Link} from 'react-router-dom';

class UserVideosItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {video} = this.props;
        debugger
        return (
          
        <div> <Link to={`/videos/${video.id}` }>
            <li><img width='218' height="118"src={window.youtube_three} /></li>
            <li className='user-vid-item-title'>{video.title}</li>
            <li className='user-vid-info'><span>{video.views} views </span> • <span>{video.timestamp} ago</span></li>
            </Link></div>
        )
    }
}

export default UserVideosItem;
