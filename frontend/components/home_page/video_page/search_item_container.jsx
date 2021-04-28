import {connect } from 'react-redux';
import {fetchSearchVideos} from './../../../actions/video_actions';
import SearchIndex from './search_index';
// import needed actions...


const msp = (state, ownProps) => {
    debugger
    return {
        videos: state.entities.videos
    }
}

const mdp = dispatch => {
    return {
        fetchSearchVideos: search => dispatch(fetchSearchVideos(search))
    }
}

export default connect(msp, mdp)(SearchIndex);
