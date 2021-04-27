import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import StudioChannelComments from './studio_channel_comments'
import {uploadVideo} from '../../actions/video_actions';
import {openModal} from '../../actions/modal_actions';
import {fetchUserVideos} from './../../actions/video_actions';
import {fetchUserComments} from './../../actions/comment_actions'


const mSTP = (state, ownProps) => {
    
    return {
        userId: state.session.id,
        user: state.entities.users[ownProps.match.params.id],
        comments: state.entities.comments
        
      
    }
};

const mDTP = dispatch => {
    return {
        uploadVideo: video => dispatch(uploadVideo(video)),
        openModal: modal => dispatch(openModal(modal)),
        fetchUserVideos: userId => dispatch(fetchUserVideos(userId)),
        fetchUserComments: userId => dispatch(fetchUserComments(userId))  
    }
};

export default withRouter(connect(mSTP, mDTP)(StudioChannelComments));