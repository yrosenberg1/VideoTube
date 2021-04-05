import React from 'react';
import { deleteComment } from '../../actions/comment_actions';
import { Redirect } from 'react-router-dom';

class Comment extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            // video_id: this.props.video
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount(){
        this.props.fetchComments(this.props.videoId)
        
    }


    componentDidUpdate(prevProps, prevState){

    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e){
        debugger
        e.preventDefault();

        if (this.props.user){
            let comment = {
                video_id: this.props.videoId,
                commenter_id: this.props.user.id,
                comment_body: this.state.text
                

            }
            debugger
            this.props.createComment(this.props.videoId, comment)
            // this.setState({ text: "" })
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
        

      let videoComments =  comments.map((comment, i) => {
          debugger
            return (
                <ul className='user-comments' key={i}>
                     <li ><button className='comment-thumbnail'>{comment.commenter.first_name[0]}</button></li>
                    <li>{comment.commenter.first_name} {comment.commenter.last_name} {comment.timestamp} ago</li>
                    <p> {comment.comment_body}</p>
                   
                    <li>  <i className="far fa-thumbs-up"> </i></li>
                        <li>  <i className="far fa-thumbs-down"> </i></li>
                        <li><button>REPLY</button></li>
                </ul>
            )
        })

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
                   
                    <form className='comment-form' onSubmit={this.handleSubmit}>
                        <textarea
                        className='comment-textarea'
                            onChange={this.update('text')}
                       
                            placeholder="Add a public comment..."
                            >

                            </textarea>
                            <br/>
                          <div className= 'new-comment-buttons'>
                            <button className='comment-cancel'>Cancel</button>
                            <button className='comment-submit'>Comment</button>
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