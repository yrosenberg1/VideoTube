import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup, receiveErrors } from '../../actions/session_actions';

const mSTP = ({ errors }) => ({
errors: errors.session,
formType: 'signup'
});



const mDTP = dispatch =>({
 form: user => dispatch(signup(user)),
 clearErrors: errors => dispatch(receiveErrors(errors))
})


export default connect(mSTP, mDTP)(SignUpForm);