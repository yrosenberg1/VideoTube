import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import { openModal } from '../../actions/modal_actions';
import {logout} from '../../actions/session_actions';
 import StudioNavBar from './studio_navbar';



const mSTP = (state, ownProps) =>{
    
    return {
      user:  state.entities.users[state.session.id],
      userId: state.session.id
    }
};
    
    
    const mDTP = dispatch =>({
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    })
    
    
    export default withRouter(connect(mSTP, mDTP)(StudioNavBar));