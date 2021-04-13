import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import VideoForm from './video_form';
import {uploadVideo} from '../../../actions/video_actions';

const mSTP = (state, ownProps) => {
    debugger
    return {
        newVideo: {
            title: '',
            description: '',
            uploader_id: ""

        },
        formType: 'Upload Video'
    }
};

const mDTP = dispatch => {
    return {
        uploadVideo: video => dispatch(uploadVideo(video)) 
    }
};

export default connect(mSTP, mDTP)(VideoForm);