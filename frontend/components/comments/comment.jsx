import React from 'react';
import { deleteComment } from '../../actions/comment_actions';

class Comment extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            // video_id: this.props.video
        }

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
        e.preventDefault();
    }


    render(){
        debugger
        let comments = Object.values(this.props.comments)

      let videoComments =  comments.map((comment, i) => {
            return (
                <ul className='user-comments' key={i}>
                    <p> {comment.comment_body}</p>
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
                  
                       <li ><button className='comment-thumbnail'>{this.props.user.first_name[0]}</button></li>
                   
                    <form className='comment-form' onSubmit={this.handleSubmit}>
                        <textarea
                        className='comment-textarea'
                            onChange={this.update('text')}
                            // value={this.state}
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