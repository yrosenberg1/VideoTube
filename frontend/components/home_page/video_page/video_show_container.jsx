import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../../actions/video_actions';
import {likeVideo, dislikeVideo, undoLike, changeLike} from '../../../actions/video_actions';
// import correct actions here

const msp = (state, ownProps) => {
    debugger
    return {
        videos: state.entities.videos,
        videoId: ownProps.match.params.id,
        userId: state.session.id

    }
}

const mdp = dispatch => {
    
    return {
        fetchVideo: videoId => dispatch(fetchVideo(videoId)),
        likeVideo: videoId => dispatch(likeVideo(videoId)),
        dislikeVideo: videoId => dispatch(dislikeVideo(videoId)),
        undoLike: videoId => dispatch(undoLike(videoId)),
        changeLike: videoId => dispatch(changeLike(videoId))
    }
}

export default connect(msp, mdp)(VideoShow);
