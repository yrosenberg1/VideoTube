import {RECEIVE_COMMENTS, RECEIVE_COMMENT, DELETE_COMMENT} from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments;
            break;
        
        case RECEIVE_COMMENT:
            
            newState[action.comment.id] = action.comment
        return newState
        break;
        case DELETE_COMMENT:
            delete newState[action.comment]
            return newState;
        default:
            return state;
    }

}

export default commentsReducer;