import { connect } from 'react-redux';
import LogInForm from './login_form';
import { login } from '../../actions/session_actions';

const mSTP = ({errors}) =>({
errors: errors.session,
formType: 'login'
})


const mDTP = dispatch =>({
 form: user => dispatch(login(user))
})


export default connect(mSTP, mDTP)(LogInForm);