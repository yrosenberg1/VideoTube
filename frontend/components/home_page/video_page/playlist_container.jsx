import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import PlayList from './playlist';
import {fetchUserLikedVideos, fetchUserWatchedVideos} from './../../../actions/video_actions'



const mSTP = (state, ownProps) => {
    
    return {
        userId: state.session.id,
        user: state.entities.users[state.session.id],
        videos: state.entities.videos
    }
    
};

const mDTP = dispatch => {
    return {
        fetchUserLikedVideos: userId => dispatch(fetchUserLikedVideos(userId)),
        fetchUserWatchedVideos: userId => dispatch(fetchUserWatchedVideos(userId))
    }
}
    
    
    export default withRouter(connect(mSTP, mDTP)(PlayList));