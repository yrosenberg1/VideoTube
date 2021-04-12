import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import SearchBar from './search_bar';
import {fetchSearchVideos} from './../../../actions/video_actions'



const mSTP = (state, ownProps) => {
    debugger
    return {
        videos: state.entities.videos,
    }
    
};

const mDTP = dispatch => {
    return {
        fetchSearchVideos: search => dispatch(fetchSearchVideos(search))
    }
}
    
    
    export default withRouter(connect(mSTP, mDTP)(SearchBar));