import { connect } from 'react-redux';
import LogInForm from './login_form';
import { login, receiveErrors } from '../../actions/session_actions';

const mSTP = ({errors}) =>({
errors: errors.session,
formType: 'login'
})


const mDTP = dispatch =>({
 form: user => dispatch(login(user)),
 clearErrors: errors => dispatch(receiveErrors(errors))
})


export default connect(mSTP, mDTP)(LogInForm);