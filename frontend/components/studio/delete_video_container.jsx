import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import DeleteVideo from './delete_video';
import {deleteVideo} from './../../actions/video_actions';


const mSTP = (state, ownProps) => {
    
    return {
      
        video: ownProps.video,
        modal: ownProps.modal,
        cancelDel: ownProps.canceldelete
      
    }
};

const mDTP = dispatch => {
    return {
        deleteVideo: videoId => dispatch(deleteVideo(videoId))
    }
};

export default withRouter(connect(mSTP, mDTP)(DeleteVideo));