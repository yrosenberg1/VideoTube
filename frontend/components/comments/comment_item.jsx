import React from 'react';

class CommentItem extends React.Component {
    constructor(props) {
        super(props)
    
    }


    render(){
        debugger
        let {comment} = this.props
        
        return (
            <div>
            <li ><button className='comment-thumbnail'>{comment.commenter.first_name[0]}</button></li>
                    <li>{comment.commenter.first_name} {comment.commenter.last_name} {comment.timestamp} ago</li>
                    <p> {comment.comment_body}</p>
                   
                    <li><button onClick={() => this.handleLikeComment()}>  <i className="far fa-thumbs-up"> </i></button></li>
                    <li><button onClick={() => this.handleDislikeComment()}>  <i className="far fa-thumbs-down"> </i></button></li>
                    <li><button>REPLY</button></li> 
                    </div>
        )
    }

}

export default CommentItem;