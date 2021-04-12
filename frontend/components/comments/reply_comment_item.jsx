import React from 'react';


class ReplyCommentItem extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }

        this.handleLikeComment = this.handleLikeComment.bind(this);
        this.handleDislikeComment = this.handleDislikeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.replyButton = this.replyButton.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if (JSON.stringify(this.props.comments) !== JSON.stringify(prevProps.comments)){
            
            this.props.fetchComments(this.props.videoId)
            }
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e){
        
        e.preventDefault();

        if (this.props.user){
            let comment = {
                video_id: this.props.videoId,
                commenter_id: this.props.user.id,
                comment_body: this.state.text,
                parent_comment_id: this.props.comment.id
                

            }
            
        
       
            this.props.createComment(this.props.videoId, comment)
           
            this.setState({ text: "" })
            // debugger
        } else {
           
            this.props.history.push("/login")
            
            
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

    // replyButton(){
        
    //     let replies = this.props.comment.replies
    //     // this.props
    //     debugger
    //     if (!replies.length){
    //         debugger
    //     return null 
    //     } else {
    //         debugger
    //         replies.map((reply, i) => {
    //             return (
    //                 <ul className='user-comments' key={i}>
    //                     <ReplyCommentItemContainer comment = {this.props.comments[reply]} />
    //                 </ul>
    //             )
    //         })
           
    //     }
    // }

    render(){
        let {comment} = this.props
        debugger
        
        
        return (
            <div>
            <li ><button className='comment-thumbnail'>{comment.commenter.first_name[0]}</button></li>
                    <li>{comment.commenter.first_name} {comment.commenter.last_name} {comment.timestamp} ago</li>
                    <p> {comment.comment_body}</p>
                   
                    <li><button onClick={() => this.handleLikeComment()}>  <i className="far fa-thumbs-up"> </i> {comment.likes.length !== 0 ? comment.likes.length : null}</button></li>
                    <li><button onClick={() => this.handleDislikeComment()}>  <i className="far fa-thumbs-down"> </i> {comment.dislikes.length !== 0 ? comment.dislikes.length : null}</button></li>
                    <li><button >REPLY</button></li> 
                    <div>
                    <form className='reply-comment-form' onSubmit={this.handleSubmit}>
                        <textarea
                        className='comment-textarea'
                            onChange={this.update('text')}
                            value={this.state.text}
                            placeholder="Add a public reply..."
                            >

                            </textarea>
                            <br/>
                          <div className= 'new-comment-buttons'>
                            <button className='comment-cancel'>Cancel</button>
                            <button className='comment-submit'>Comment</button>
                            </div>
                    </form></div>
                    {/* {this.replyButton()} */}

                    </div>
        )
    }

}

export default ReplyCommentItem;