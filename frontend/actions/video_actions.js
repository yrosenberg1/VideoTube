import * as VideoApiUtil from '../util/video_api_util';

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';


export const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video 
});

export const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos 
});

export const removeVideo = videoId => ({
    type: REMOVE_VIDEO,
    videoId

});

export const fetchVideos = () => dispatch => {
    return VideoApiUtil.fetchVideos().then(
        videos => {  
            return dispatch(receiveVideos(videos))},
        errors => { return errors}

        
    )
};

export const fetchVideo = videoId => dispatch => {
    return VideoApiUtil.fetchVideo(videoId).then(
        video => { return dispatch(receiveVideo(video))},
        errors => {return errors}
    )
};

export const uploadVideo = video => dispatch => {
    return VideoApiUtil.uploadVideo(video).then(
        video => {return dispatch(receiveVideo(video))},
        errors => { return errors}
    )
};

export const updateVideo = video => dispatch => {
    return VideoApiUtil.updateVideo(video).then(
        video => { return dispatch(receiveVideo(video))},
        errors => { return errors}
    )
};

export const deleteVideo = videoId => dispatch => {
    return VideoApiUtil.deleteVideo(videoId).then(
        () => { return dispatch(removeVideo(videoId))},
        errors => {return errors}
    )
};