import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import SearchBar from './search_bar';
import {fetchSearchVideos, fetchVideos} from './../../../actions/video_actions'



const mSTP = (state, ownProps) => {
    
    return {
        videos: state.entities.videos,
    }
    
};

const mDTP = dispatch => {
    return {
        fetchSearchVideos: search => dispatch(fetchSearchVideos(search)),
        fetchVideos: () => dispatch(fetchVideos())
    }
}
    
    
    export default withRouter(connect(mSTP, mDTP)(SearchBar));