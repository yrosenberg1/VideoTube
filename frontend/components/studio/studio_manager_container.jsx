import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import StudioManager from './studio_manager';
import {uploadVideo} from '../../actions/video_actions';
import {openModal} from '../../actions/modal_actions';


const mSTP = (state, ownProps) => {
    
    return {
        userId: state.session.id,
        user: state.entities.users[ownProps.match.params.id],
        
      
    }
};

const mDTP = dispatch => {
    return {
        uploadVideo: video => dispatch(uploadVideo(video)),
        openModal: modal => dispatch(openModal(modal))  
    }
};

export default withRouter(connect(mSTP, mDTP)(StudioManager));