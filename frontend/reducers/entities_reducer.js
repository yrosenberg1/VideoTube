import {combineReducers} from 'redux';
import commentsReducer from './comments_reducer';
import usersReducer from './users_reducer';
import videosReducer from './video_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    comments: commentsReducer,
    videos: videosReducer,
});

export default entitiesReducer;