import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import DeleteVideo from './delete_video';



const mSTP = (state, ownProps) => {
    
    return {
        userId: state.session.id,
        user: state.entities.users[ownProps.match.params.id],
        video: ownProps.video,
        modal: ownProps.modal,
        cancelDel: ownProps.canceldelete
      
    }
};

const mDTP = dispatch => {
    return {
        
    }
};

export default withRouter(connect(mSTP, mDTP)(DeleteVideo));