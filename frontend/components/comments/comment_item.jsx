import React from 'react';

class CommentItem extends React.Component {
    constructor(props) {
        super(props)
    
        this.handleLikeComment = this.handleLikeComment.bind(this);
        this.handleDislikeComment = this.handleDislikeComment.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if (JSON.stringify(this.props.comments) !== JSON.stringify(prevProps.comments)){
            
            this.props.fetchComments(this.props.videoId)
            }
    }

    handleLikeComment(){
        let {comment} = this.props
        
        const commentLikesArray = comment.likes.map(like => {
            return (
                like.liker_id
            )
        })

        const commentDislikesArray = comment.dislikes.map(dislike => {
            return (
                dislike.liker_id
            )
        })

        if (commentLikesArray.includes(this.props.user.id)){
            
            this.props.undoLikeComment(this.props.videoId, comment.id)
        } else if (commentDislikesArray.includes(this.props.user.id)){
            this.props.changeLikeComment(this.props.videoId, comment.id)
        } else {
            
            this.props.likeComment(comment.video_id, comment.id)
            // this.props.likeComment(comment.video_id, comment.id)
            
        }
        
    }

    handleDislikeComment(){
        
        let {comment} = this.props
     
        const commentLikesArray = comment.likes.map(like => {
            return (
                like.liker_id
            )
        })

        const commentDislikesArray = comment.dislikes.map(dislike => {
            return (
                dislike.liker_id
            )
        })

        if (commentLikesArray.includes(this.props.user.id)){
            
            this.props.changeLikeComment(this.props.videoId, comment.id)
        } else if (commentDislikesArray.includes(this.props.user.id)){
            this.props.undoLikeComment(this.props.videoId, comment.id)
        } else {
            
            this.props.dislikeComment(comment.video_id, comment.id)
          
            
        }
        
    }


    render(){
        
        let {comment} = this.props
        
        
        return (
            <div>
            <li ><button className='comment-thumbnail'>{comment.commenter.first_name[0]}</button></li>
                    <li>{comment.commenter.first_name} {comment.commenter.last_name} {comment.timestamp} ago</li>
                    <p> {comment.comment_body}</p>
                   
                    <li><button onClick={() => this.handleLikeComment()}>  <i className="far fa-thumbs-up"> </i> {comment.likes.length}</button></li>
                    <li><button onClick={() => this.handleDislikeComment()}>  <i className="far fa-thumbs-down"> </i> {comment.dislikes.length}</button></li>
                    <li><button>REPLY</button></li> 
                    </div>
        )
    }

}

export default CommentItem;