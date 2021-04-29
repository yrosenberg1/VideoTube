import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, createWatchVideo } from './../../../actions/video_actions'
import {likeVideo, dislikeVideo, undoLike, changeLike} from '../../../actions/video_actions';
import {addView} from '../../../actions/view_actions';
// import correct actions here

const msp = (state, ownProps) => {
    
    return {
        videos: state.entities.videos,
        videoId: ownProps.match.params.id,
        video: state.entities.videos[ownProps.match.params.id],
        userId: state.session.id
    }
    
}

const mdp = dispatch => {
    
    return {
        fetchVideo: videoId => dispatch(fetchVideo(videoId)),
        likeVideo: videoId => dispatch(likeVideo(videoId)),
        dislikeVideo: videoId => dispatch(dislikeVideo(videoId)),
        undoLike: videoId => dispatch(undoLike(videoId)),
        changeLike: videoId => dispatch(changeLike(videoId)),
        addView: view => dispatch(addView(view)),
        createWatchVideo: history => dispatch(createWatchVideo(history))
    }
}

export default connect(msp, mdp)(VideoShow);
