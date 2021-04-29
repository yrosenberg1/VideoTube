import React from 'react';
import ReplyCommentItemContainer from './reply_comment_item_container';

class CommentItem extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            text: "",
            toggleBtn: false

        }

        this.handleLikeComment = this.handleLikeComment.bind(this);
        this.handleDislikeComment = this.handleDislikeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openReplies = this.openReplies.bind(this);
        this.closeReplies = this.closeReplies.bind(this);
        this.updateWrapper = this.updateWrapper.bind(this)
        this.replyButton = this.replyButton.bind(this);
        this.toggleOn = this.toggleOn.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if (JSON.stringify(this.props.comments) !== JSON.stringify(prevProps.comments)){
            
            this.props.fetchComments(this.props.videoId)
            }
    }

    openReplies(e){
        
        e.target.parentElement.parentElement.nextElementSibling.children[0].style["display"] = 'block'
    }
        
   closeReplies(e){
       
       e.target.parentElement.parentElement.style["display"] = 'none'
       this.setState({text: ""})
    }
        
   updateWrapper(e){
       
       e.target.parentElement.dataset.replicatedValue = e.target.value
   }
    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    toggleOn(e){
        e.preventDefault();
        if (this.state.toggleBtn === false){
            this.setState({
                toggleBtn: true})
            } else {
                this.setState({
                    toggleBtn: false})
                }
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
            // 
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

    replyButton(){
       debugger
        
        let replies = this.props.comment.replies
        debugger
        
        // if (!replies.length){
            
        // return null 
        // } else {
        //     

        //   return (
        //       <div className=''></div>
        //   )  
           let replyComments = replies.map((reply, i) => {
                
                return (
                    
                    <ul className='user-reply-comments' key={i}>
                        <ReplyCommentItemContainer comment={reply} />
                    
                    </ul>
                )
            }, this)
           
            return (replyComments)
        // }
    }

    render(){
        
        let {comment} = this.props
        let {replies} = this.props.comment
        let text = this.state.text
        let numReplies = replies.length === 1 ? "reply" : replies.length + " replies"
        let toggled = this.state.toggleBtn ?   <div onClick={this.toggleOn} className='reply-toggle-btn'> Hide {numReplies} </div> : <div onClick={this.toggleOn} className='reply-toggle-btn'> View {numReplies}</div> 
        let replyButton = replies.length ? toggled : null
       
      
        let row = (this.state.text.length / 170) + 1
        
        return (
            <div>
               
            <div className='comment-profile'><li ><button className='comment-thumbnail'>{comment.commenter.first_name[0]}</button></li>
                    <li className='name-li'><p>{comment.commenter.first_name} {comment.commenter.last_name} </p><p className='date-p'>  {comment.timestamp} ago</p></li></div>
                    <p className='comment-body'> {comment.comment_body}</p>
                    <ul className='comment-user-interact'>
                    <li><button onClick={() => this.handleLikeComment()}>  <img src={window.grayThumbsUp}/> <p>{comment.likes.length !== 0 ? comment.likes.length : null}</p></button></li>
                    <li><button onClick={() => this.handleDislikeComment()}>  <img src={window.grayThumbsDown}/> <p>{comment.dislikes.length !== 0 ? comment.dislikes.length : null}</p></button></li>
                    <li ><button onClick={this.openReplies}>reply</button></li> </ul>
                    <div>
                    <form className='reply-comment-form' onSubmit={this.handleSubmit}>
                       <div className='textarea-wrapper'>
                        <textarea
                        rows = {`${row}`}
                        className='comment-textarea'
                            onChange={this.update('text')}
                            onInput={this.updateWrapper}
                            value={this.state.text}
                            placeholder="Add a public reply..."
                            >

                            </textarea></div>
                            <br/>
                          <div className= 'reply-comment-buttons'>
                            <button type="button" onClick={this.closeReplies} className='comment-cancel-button'>Cancel</button>
                            <button type="submit" className={text.length ? 'active-button' : 'comment-submit'}>Reply</button>
                            </div>
                    </form></div>
                    {replyButton}
                    { this.state.toggleBtn ? this.replyButton() : null}
                   
                    </div>
        )
    }

}

export default CommentItem;