import React from 'react';
import { deleteComment } from '../../actions/comment_actions';
import { Redirect } from 'react-router-dom';
import CommentItemContainer from './coment_item_container';

class Comment extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputFocus = this.inputFocus.bind(this);
        this.closeButtons = this.closeButtons.bind(this);
        
       
    }


    componentDidMount(){
        this.props.fetchComments(this.props.videoId)
        
    }


    componentDidUpdate(prevProps, prevState){

    }

    inputFocus(e){
        
        e.currentTarget.parentElement.nextElementSibling.nextElementSibling.style["display"] = 'block'
    }
    
    closeButtons(e){
        e.target.parentElement.style["display"] = 'none'
        this.setState({text: ""})
    
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
                comment_body: this.state.text
                

            }
            
        
            this.props.createComment(this.props.videoId, comment)
           
            this.setState({ text: "" })
            
        } else {
           
            this.props.history.push("/login")
            
            
        }
        
    }


    renderprofile(){
        if(this.props.user){
            return   <li ><button className='comment-thumbnail'>{this.props.user.first_name[0]}</button></li>
         } else {
          return  <li className='logged-out-commenter-profile' ><button><i className="fas fa-user"></i></button></li>

         }
        
    }

    render(){
        let comments = Object.values(this.props.comments)
        let text = this.state.text
        let row = (this.state.text.length / 170) + 1        
        
      let videoComments =  comments.map((comment, i) => {
          
          if (comment.parent_comment_id === null){
            return (
                <ul className='user-comments' key={i}>
                    
                     <CommentItemContainer comment={comment} /> 
                </ul>
            )}
        }, this)

        return (
            <div className='comment-container'>
                <div className='comment'>
                    <div className='create-comment-container'>
                    {/* <CreateCommentContainer/>      */}
                   <div className='header-container'> 
                        <h2>{comments.length} Comments</h2>
                   </div>
                   <div className='new-comment-container'>
                  
                       {/* <li ><button className='comment-thumbnail'>{this.props.user.first_name[0]}</button></li> */}
                       {this.renderprofile()}
                   
                    <form className='comment-form' onSubmit={(e) => text.length ? this.handleSubmit(e) : () => false}>
                    <div className='textarea-wrapper'>
                        <textarea
                        rows = {`${row}`}
                        className='comment-textarea'
                            onFocus={this.inputFocus}
                            onChange={this.update('text')}
                            value={this.state.text}
                            placeholder="Add a public comment..."
                            >

                            </textarea></div>
                            <br/>
                          <div className= 'new-comment-buttons'>
                            <button type='button' onClick={this.closeButtons} className='comment-cancel'>Cancel</button>
                            <button className={text.length ? 'active-button' : 'comment-submit'}>Comment</button>
                            </div>
                    </form>
                    </div>
                    {videoComments}
                    </div>
                </div>

            </div>
        )
    };
};

export default Comment;