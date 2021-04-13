import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Channel from './channel';


const mSTP = (state, ownProps) => {
    // debugger
    return {
        userId: state.session.id,
        user: state.entities.users[ownProps.match.params.id],

    }
};

const mDTP = dispatch => {
    return {

    }
};

export default withRouter(connect(mSTP, mDTP)(Channel));