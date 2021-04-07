// import * as LikeApiUtil from '../util/like_api_util';

//  import receiveVideo, {RECEIVE_VIDEO} from '../actions/video_actions';

//  export const likeVideo = videoId => dispatch => {
//      return LikeApiUtil.likeVideo(videoId).then(
       
//             video => { debugger
//                 return  dispatch(receiveVideo(video))}
//             //     ,
//             // errors => {
//             //     debugger 
//             //     return errors}
//      )
//  };

//  export const dislikeVideo = videoId => dispatch => {
//     return LikeApiUtil.dislikeVideo(videoId).then(
//         video =>{
//             return dispatch(receiveVideo(video))},
//             errors => {return errors}
//     )
// };

// export const undoLike = videoId => dispatch => {
//     return LikeApiUtil.undoLike(videoId).then(
//         video =>{
//             return dispatch(receiveVideo(video))},
//             errors => {return errors}
//     )
// };

// export const changeLike = videoId => dispatch => {
//     return LikeApiUtil.changeLike(videoId).then(
//         video =>{
//             return dispatch(receiveVideo(video))},
//             errors => {return errors}
//     )
// };