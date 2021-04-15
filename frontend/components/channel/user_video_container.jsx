import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import UserVideos from './user_videos';
import {fetchUserVideos} from './../../actions/video_actions';


const mSTP = (state, ownProps) => {
    
    return {
      videos: state.entities.videos 

    }
};

const mDTP = dispatch => {
    return {
        fetchUserVideos: userId => dispatch(fetchUserVideos(userId))

    }
};

export default withRouter(connect(mSTP, mDTP)(UserVideos));