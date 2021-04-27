import React from 'react';


class ReplyCommentItem extends React.Component {
    constructor(props) {
        super(props)
        let {comment} = this.props
        let name = comment.commenter
        this.state = {
            text: `@${name.first_name} ${name.last_name}`
        }

        this.handleLikeComment = this.handleLikeComment.bind(this);
        this.handleDislikeComment = this.handleDislikeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openReplies = this.openReplies.bind(this);
        this.closeReplies = this.closeReplies.bind(this);
        this.updateWrapper = this.updateWrapper.bind(this)
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
                parent_comment_id: this.props.comment.parent_comment_id
                

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

    openReplies(e){
        
        e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[0].style["display"] = 'block'
    }
        
    closeReplies(e){
        
      e.target.parentElement.parentElement.style["display"] = 'none'
    //   e.target.parentElement.previousElementSibling.previousElementSibling.value = ""

      let {comment} = this.props
      let name = comment.commenter
      this.setState({text: `@${name.first_name} ${name.last_name}`})
   }
        
   updateWrapper(e){
       
    e.target.parentElement.dataset.replicatedValue = e.target.value
}
   
    render(){
        let {comment} = this.props
        let name = comment.commenter
        
        let text = this.state.text
        let string =text.split(" ").join("")
        let spaceLength = (text.length - string.length) * 0.5
        let stringLength = string.length 
        let row = ((spaceLength + stringLength) / 175) + 1
        console.log(`row:${row}`)
        console.log(`length:${this.state.text.length}`)
        console.log(spaceLength)
        console.log(stringLength)

        return (
            <div>
           <div className='reply-container'><div> <li><button className='comment-thumbnail'>{comment.commenter.first_name[0]}</button></li> </div>
               <div>     <li className='name-li'><p>{comment.commenter.first_name} {comment.commenter.last_name} </p><p className='date-p'>{comment.timestamp} ago</p></li>
                    <p className="comment-body"> {comment.comment_body}</p>
                   <ul className='reply-user-interact'>
                    <li><button onClick={() => this.handleLikeComment()}>  <img src={window.grayThumbsUp}/><p>{comment.likes.length !== 0 ? comment.likes.length : null}</p></button></li>
                    <li><button onClick={() => this.handleDislikeComment()}> <img src={window.grayThumbsDown}/><p> {comment.dislikes.length !== 0 ? comment.dislikes.length : null}</p></button></li>
                    <li><button  onClick={this.openReplies}>REPLY</button></li></ul> </div></div>
                    <div>
                    <form className='reply-comment-form' onSubmit={this.handleSubmit}>
                    <div className='textarea-wrapper'>
                        <textarea
                        className='comment-textarea'
                            rows = {`${row}`}
                            onChange={this.update('text')}
                            value={this.state.text}
                            onInput={this.updateWrapper}
                            placeholder="Add a public reply..."
                            >

                            </textarea></div>
                            <br/>
                          <div className= 'reply-comment-buttons'>
                            <button type="button" onClick={this.closeReplies} className='comment-cancel'>Cancel</button>
                            <button className={text.length ? 'active-button' : 'comment-submit'}>Reply</button>
                            </div>
                    </form></div>
                    {/* {this.replyButton()} */}

                    </div>
        )
    }

}

export default ReplyCommentItem;