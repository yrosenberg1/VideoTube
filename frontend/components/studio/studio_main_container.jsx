import {connect} from 'react-redux';
import {withRouter} from 'react-router';
// import { openModal } from '../../../actions/modal_actions';
// import {logout} from '../../../actions/session_actions';
import StudioMain from './studio_main';



const mSTP = (state, ownProps) =>{

    return {
    
    }
};
    
    
    const mDTP = dispatch =>({
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    })
    
    
    export default withRouter(connect(mSTP, mDTP)(StudioMain));