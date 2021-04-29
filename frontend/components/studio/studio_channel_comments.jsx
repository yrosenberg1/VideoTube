import React from 'react';
import {Link} from 'react-router-dom';
import StudioCommentItemContainer from './studio_comment_item_container';

class StudioChannelComments extends React.Component{
    constructor(props){
        super(props)
    }


componentDidMount(){
    this.props.fetchUserComments(this.props.userId)

}

render(){
        let {comments} = this.props;
        
        comments = Object.values(comments)
       comments = comments.map((comment, idx) => {
            if(comment.parent_comment_id === null){
                let video = comment.video
                return (
                    <div key={idx} className='studio-channel-comments-container'>
                    <ul className='studio-user-comments' key={idx}>
                         <StudioCommentItemContainer comment={comment} />
                    </ul>
                    <div className='studio-channel-comments-vid-container'>
                      
                        <div>{video.title}</div>
                        <div>{video.description}</div>
                       
                      
                    </div>
                    </div>
                )
            }
        })
//   
   
    
    return (
        <div>
                <div className='studio-main-container'>
                                    <div className='studio-main-header'>
                                        <div className='channel-header-container'> <h1> Channel comments</h1> </div>
                                        <div className='upload-header-container'>  <p>Published</p> </div>
                                        <div className='studio-main-filter-container'>
                                             {/* <p>Filter</p> */}
                                       </div>   
          {comments}
        </div>
        </div>
      </div>
                                                             
    )
}

}

export default StudioChannelComments;