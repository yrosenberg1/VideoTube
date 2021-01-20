import * as SessionApiUtil from '../util/session_api_util'


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser =>({
    action: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () =>({
    action: LOGOUT_CURRENT_USER
    
});

export const reveiveErrors = errors =>({
    action: RECEIVE_ERRORS,
    errors
});

export const signup = user => dispatch =>(
    SessionApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)))

);

export const login = user => dispatch =>(
    SessionApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)))

);

export const logout = () => dispatch =>(
    SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()))

);



