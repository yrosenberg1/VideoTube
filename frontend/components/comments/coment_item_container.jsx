import { connect } from 'react-redux';
import CommentItem from './comment_item';
import {withRouter} from 'react-router';
import {fetchComment, fetchComments, createComment, deleteComment, likeComment, dislikeComment, undoLikeComment, changeLikeComment} from '../../actions/comment_actions';

const msp = (state, ownProps) => {
    
    return {
        videos: state.entities.videos,
        comments: state.entities.comments,
        videoId: ownProps.match.params.id,
        video: state.entities.videos[ownProps.match.params.id],
        user: state.entities.users[state.session.id],
        commentId: ownProps.comment.id

        
    }
};

const mdp = dispatch => {
    
    return {
        likeComment:  (videoId, commentId) => dispatch(likeComment(videoId, commentId)),
        dislikeComment:  (videoId, commentId) => dispatch(dislikeComment(videoId, commentId)),
        undoLikeComment:  (videoId, commentId) => dispatch(undoLikeComment(videoId, commentId)),
        changeLikeComment:  (videoId, commentId) => dispatch(changeLikeComment(videoId, commentId)),
        fetchComments: videoId => dispatch(fetchComments(videoId))

    }
}

export default withRouter(connect(msp, mdp)(CommentItem));