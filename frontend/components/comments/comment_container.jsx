import {connect} from 'react-redux';
import Comment from './comment';
import {withRouter} from 'react-router';
import {fetchComment, fetchComments, createComment, deleteComment} from '../../actions/comment_actions';


const msp = (state, ownProps) => {
    debugger
    return {
        videos: state.entities.videos,
        comments: state.entities.comments,
        videoId: ownProps.match.params.id,
        user: state.entities.users[state.session.id]
        
    }
};

const mdp = dispatch => {
    return {
        fetchComment: comment => dispatch(fetchComment(comment)),
        fetchComments: videoId => dispatch(fetchComments(videoId)),
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: comment => dispatch(deleteComment(comment))
    }
}

export default withRouter(connect(msp, mdp)(Comment));