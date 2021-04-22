import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import UploadVideo from './upload_video';

import {uploadVideo} from '../../actions/video_actions'
import {openModal, closeModal} from '../../actions/modal_actions';
const mSTP = (state, ownProps) => {
    
    return {
        userId: state.session.id,
        user: state.entities.users[ownProps.match.params.id],
        formType: 'Upload Video',
        videoInfo: ownProps.video
    }
};

const mDTP = dispatch => {
    return {
        uploadVideo: video => dispatch(uploadVideo(video)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())  
    }
};

export default withRouter(connect(mSTP, mDTP)(UploadVideo));