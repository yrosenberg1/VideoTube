import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup } from '../../actions/session_actions';

const mSTP = (state, ownProps) =>({
errors: state.errors.session,
formType: 'signup'
})


const mDTP = dispatch =>({
 form: user => dispatch(signup(user))
})


export default connect(mSTP, mDTP)(SignUpForm);