import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import EditVideo from './edit_video';
import {updateVideo, fetchVideo } from './../../actions/video_actions';



const mSTP = (state, ownProps) => {
    debugger
    return {
        userId: state.session.id,
        video: state.entities.videos[ownProps.match.params.id],
        videoId: ownProps.match.params.id,
        formType: 'Edit Video',
              
    }
};

const mDTP = dispatch => {
    return {
        updateVideo: video => dispatch(updateVideo(video)),
        fetchVideo: videoId => dispatch(fetchVideo(videoId))
    }
}

export default withRouter(connect(mSTP, mDTP)(EditVideo));
