import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import { openModal } from '../../../actions/modal_actions';
import {logout} from '../../../actions/session_actions';

import LogIn from './log_in';

const mSTP = ({session, entities:{users}}) =>({
    currentUser: users[session.id]
    })
    
    
    const mDTP = dispatch =>({
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    })
    
    
    export default withRouter(connect(mSTP, mDTP)(LogIn));