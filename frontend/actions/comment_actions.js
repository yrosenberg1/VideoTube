import * as CommentApiUtil from '../util/comments_api_util';
import * as LikeApiUtil from '../util/like_api_util';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments

});

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const removeComment = comment => ({
    type: DELETE_COMMENT,
    comment 
});

export const fetchComment = (videoId, comment) => dispatch => {
    return (
        CommentApiUtil.fetchComment(videoId, comment).then (
            comment => {
            return dispatch(receiveComment(comment))},
            error => {  return error })
                // return dispatch(receiveErrors(error.responseJSON))}
         )
};

export const fetchComments = videoId => dispatch => {
    return (
        CommentApiUtil.fetchComments(videoId).then (
        comments => {
            
            return dispatch(receiveComments(comments))},
            error => {return error })
        
        )
};


export const createComment = (videoId, comment) => dispatch => {
    
    return (
        CommentApiUtil.createComment(videoId, comment).then (
            comment => {
                return dispatch(receiveComment(comment))},
                error => { return error})
        )
    
};

export const deleteComment = comment => dispatch => {
    return (
        CommentApiUtil.deleteComment(comment).then (
            comment => {
                return dispatch(removeComment(comment))},
                error => { return error})
            
        )
    
}; 

export const updateComment = comment => dispatch => {
    return (
     CommentApiUtil.updateComment(comment).then (
         comment => {
             dispatch(receiveComment(comment))},
             error => {return error})
         
     )

};

export const likeComment = (videoId, commentId) => dispatch => {
    
    return LikeApiUtil.likeComment(videoId, commentId).then(
      
           comment => { 
               return  dispatch(receiveComment(comment))},
           errors => {
                
               return errors}
    )
};

export const dislikeComment = (videoId, commentId) => dispatch => {
    return LikeApiUtil.dislikeComment(videoId, commentId).then(
      
           comment => { 
               return  dispatch(receiveComment(comment))},
           errors => {
                
               return errors}
    )
};

export const undoLikeComment = (videoId, commentId) => dispatch => {
    return LikeApiUtil.undoLikeComment(videoId, commentId).then(
      
           comment => { 
               return  dispatch(receiveComment(comment))},
           errors => {
                
               return errors}
    )
};

export const changeLikeComment = (videoId, commentId) => dispatch => {
    return LikeApiUtil.changeLikeComment(videoId, commentId).then(
      
           comment => { 
               return  dispatch(receiveComment(comment))},
           errors => {
                
               return errors}
    )
};