import React from 'react';
import StudioReplyItemContainer from './studio_reply_item_container';

class StudioCommentItem extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            text: "",
            toggleBtn: false

        }
        this.replyForm = React.createRef();
        this.openReplies = this.openReplies.bind(this);
        this.closeReplies = this.closeReplies.bind(this);
        this.handleLikeComment = this.handleLikeComment.bind(this);
        this.handleDislikeComment = this.handleDislikeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleOn = this.toggleOn.bind(this);
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

    openReplies(e){
        
        e.preventDefault()
        this.replyForm.current.style["display"] = "flex"
        
    }
    closeReplies(e){
        
        e.preventDefault()
        this.replyForm.current.style["display"] = "none"
     
        
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
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

    handleSubmit(e){
        
        e.preventDefault();

        if (this.props.user){
            debugger
            let comment = {
                video_id: this.props.videoId,
                commenter_id: this.props.user.id,
                comment_body: this.state.text,
                parent_comment_id: this.props.comment.id
                

            }
            
        
       
            this.props.createComment(this.props.videoId, comment).then(() => this.props.fetchComments(this.props.videoId))
           
            this.setState({ text: "" })
            this.replyForm.current.style["display"] = "none"
            // debugger
        } else {
           
            this.props.history.push("/login")
            
            
        }
        
    }
    render() {

let {comment} = this.props;
let commenter = comment.commenter;
let {user} = this.props;
let replies = comment.replies;
let word = replies.length === 1 ? "reply" : "replies"
let numLikes = comment.likes.length === 0 ? null : comment.likes.length

let text = this.state.text
debugger
        return (
            <div className='comment-section'>
                <div className='comment-thread'>
                    <div className='comment-thumbnail'><p>{commenter.first_name[0]}</p></div>
                    <div className='comment-body-container'>
                        <div className='comment-meta-data'>{commenter.first_name} {commenter.last_name} • {comment.timestamp} ago</div>
                        <div className='comment-text'>{comment.comment_body}</div>
                        <div className='comment-actions'>
                            <button onClick={this.openReplies} className='studio-reply-btn'>reply </button> 
                           {replies.length ? <button onClick={this.toggleOn} className='studio-open-replies-btn'>{replies.length} {word}</button> : null}
                            <button onClick={() => this.handleLikeComment()} className='studio-like-comment'><img src={window.grayThumbsUp}/> </button>
                            <div  className='studio-like-ct'>{numLikes}</div>
                            <button onClick={() => this.handleDislikeComment()} className='studio-dislike-comment'><img src={window.grayThumbsDown}/></button>
                        </div>
                    </div>
                </div>
                <div className='studio-create-reply-container'>
                <div ref={this.replyForm} className='studio-comment-box'>
                    <div className='studio-comment-reply-icon'><p>{user.first_name[0]}</p></div>
                    <div className='studio-comment-reply-container'>
                     
                <form className='studio-comment-form' onSubmit={this.handleSubmit}>
                       {/* <div className='textarea-wrapper'> */}
                       <div className='studio-reply-form-outline'>
                       <div className='studio-reply-container-instruct'><p>Reply</p></div>
                        <textarea
                        
                        className='studio-comment-textarea'
                            onChange={this.update('text')}
                            // onInput={this.updateWrapper}
                            value={this.state.text}
                            placeholder="Add a public reply..."
                            >

                            </textarea>
                            {/* </div> */}
                            </div>
                           
                          <div className= 'studio-reply-comment-buttons'>
                            
                            <button type="button" onClick={this.closeReplies} className='comment-cancel-button'>Cancel</button>
                            <button type="submit" className={text.length ? 'studio-comment-active-button' : 'studio-comment-inactive-btn'}>Reply</button>
                            </div>
                    </form>
                    </div>
                    </div>
                </div>
                <div className='studio-comment-replies-container'>
                      {this.state.toggleBtn ? ( replies.map((reply, idx) =>{
                        
                          return (
                              <ul className='studio-user-reply-comments' key={idx}>
                                  <StudioReplyItemContainer 
                                    comment={reply} 
                                   
                                    /> 
                                  </ul>
//                          
                          )
                      }) ): null}  
                </div>
            </div>
            )
        }


    }
    
    


export default StudioCommentItem;