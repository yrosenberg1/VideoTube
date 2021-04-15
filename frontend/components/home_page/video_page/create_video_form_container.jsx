import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import VideoForm from './video_form';
import {uploadVideo} from '../../../actions/video_actions';

const mSTP = (state, ownProps) => {
    
    return {
        userId: state.session.id,
        user: state.entities.users[ownProps.match.params.id],
        formType: 'Upload Video'
    }
};

const mDTP = dispatch => {
    return {
        uploadVideo: video => dispatch(uploadVideo(video)) 
    }
};

export default connect(mSTP, mDTP)(VideoForm);