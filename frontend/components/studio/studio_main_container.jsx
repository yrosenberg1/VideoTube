import {connect} from 'react-redux';
import {withRouter} from 'react-router';
// import { openModal } from '../../../actions/modal_actions';
// import {logout} from '../../../actions/session_actions';
import StudioMain from './studio_main';
import {fetchUserVideos} from './../../actions/video_actions';



const mSTP = (state, ownProps) =>{
    
    return {
        user:  state.entities.users[state.session.id],
        userId: state.session.id,
        videos: state.entities.videos
    }
};
    
    
    const mDTP = dispatch =>({
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        fetchUserVideos: userId => dispatch(fetchUserVideos(userId))
    })
    
    
    export default withRouter(connect(mSTP, mDTP)(StudioMain));