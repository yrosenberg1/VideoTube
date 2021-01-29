import * as SessionApiUtil from '../util/session_api_util'


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser =>({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () =>({
    type: LOGOUT_CURRENT_USER
    
});

export const receiveErrors = errors =>({
    type: RECEIVE_ERRORS,
    errors
});

export const signup = user => dispatch =>{
    
    return (

    SessionApiUtil.signup(user).then(user =>{
        // console.log(user)
        return dispatch(receiveCurrentUser(user))},
    error =>{
        // console.log(error.responseJSON)
        const test = receiveErrors(error.responseJSON)
        // console.log(test)
        return dispatch(receiveErrors(error.responseJSON))}
    ))};

// export const login = user => dispatch =>(
//     SessionApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user))),
//     error => ( dispatch(receiveErrors(error.responseJSON)))

// );
export const login = user => dispatch =>{
    // console.log('test')
    return (

    SessionApiUtil.login(user).then(user =>{
        // console.log(user)
        return dispatch(receiveCurrentUser(user))},
    error =>{
        // console.log(error.responseJSON)
        const test = receiveErrors(error.responseJSON)
        // console.log(test)
        return dispatch(receiveErrors(error.responseJSON))}
    ))};

export const logout = () => dispatch =>(
    SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()))

);



