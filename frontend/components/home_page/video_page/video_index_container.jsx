import {connect } from 'react-redux';
import { fetchVideos } from '../../../actions/video_actions';
import VideoIndex from './video_index';
// import needed actions...


const msp = (state, ownProps) => {
    
    return {
        videos: state.entities.videos
    }
}

const mdp = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos())
    }
}

export default connect(msp, mdp)(VideoIndex);

