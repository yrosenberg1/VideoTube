import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../../actions/video_actions';
// import correct actions here

const msp = (state, ownProps) => {
    
    return {
        videos: state.entities.videos,
        videoId: ownProps.match.params.id

    }
}

const mdp = dispatch => {
    
    return {
        fetchVideo: videoId => dispatch(fetchVideo(videoId))
    }
}

export default connect(msp, mdp)(VideoShow);
