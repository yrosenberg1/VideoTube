import {RECEIVE_VIDEO, RECEIVE_VIDEOS, REMOVE_VIDEO} from '../actions/video_actions';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch (action.type) {
        // case RECEIVE_VIDEO:
            
         
       
       case RECEIVE_VIDEO:         
            newState[action.video.id] = action.video
           return newState;

        case RECEIVE_VIDEOS:
            return action.videos;

        case REMOVE_VIDEO:
            delete newState[action.video]
            return newState
            
    
        default:
            return state;
    }
}

export default videosReducer;