import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Channel from './channel';
import {fetchUserVideos} from "../../actions/video_actions";


const mSTP = (state, ownProps) => {
    // 
    return {
        userId: state.session.id,
        user: state.entities.users[ownProps.match.params.id],
        videos: state.entities.videos

    }
};

const mDTP = dispatch => {
    return {
        fetchUserVideos: userId => dispatch(fetchUserVideos(userId))

    }
};

export default withRouter(connect(mSTP, mDTP)(Channel));