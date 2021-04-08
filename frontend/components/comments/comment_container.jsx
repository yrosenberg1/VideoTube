import {connect} from 'react-redux';
import Comment from './comment';
import {withRouter} from 'react-router';
import {fetchComment, fetchComments, createComment, deleteComment, likeComment, dislikeComment, undoLikeComment, changeLikeComment} from '../../actions/comment_actions';


const msp = (state, ownProps) => {
    
    return {
        videos: state.entities.videos,
        comments: state.entities.comments,
        videoId: ownProps.match.params.id,
        video: state.entities.videos[ownProps.match.params.id],
        user: state.entities.users[state.session.id]
        
    }
};

const mdp = dispatch => {
    return {
        fetchComment: comment => dispatch(fetchComment(comment)),
        fetchComments: videoId => dispatch(fetchComments(videoId)),
        createComment: (videoId, comment) => dispatch(createComment(videoId, comment)),
        deleteComment: comment => dispatch(deleteComment(comment)),
        likeComment:  (videoId, commentId) => dispatch(likeComment((videoId, commentId))),
        dislikeComment:  (videoId, commentId) => dispatch(dislikeComment((videoId, commentId))),
        undoLikeComment:  (videoId, commentId) => dispatch(undoLikeComment((videoId, commentId))),
        changeLikeComment:  (videoId, commentId) => dispatch(changeLikeComment((videoId, commentId)))

    }
}

export default withRouter(connect(msp, mdp)(Comment));