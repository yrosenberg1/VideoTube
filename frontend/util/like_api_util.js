export const likeVideo = videoId => (
    $.ajax({
        method: 'POST',
        url: `api/videos/${videoId}/like`
    })
);

export const dislikeVideo = videoId => (
    $.ajax({
        method: 'POST',
        url: `api/videos/${videoId}/dislike`
    })
);
export const undoLike = videoId => (
    $.ajax({
        method: 'POST',
        url: `api/videos/${videoId}/undo`
    })
);
export const changeLike = videoId => (
    $.ajax({
        method: 'POST',
        url: `api/videos/${videoId}/change`
    })
);

export const likeComment = (videoId, commentId) => (
    $.ajax({
        method: 'POST',
        url: `api/videos/${videoId}/comments/${commentId}/like`
    })
);

export const dislikeComment = (videoId, commentId) => (
    $.ajax({
        method: 'POST',
        url: `api/videos/${videoId}/comments/${commentId}/dislike`
    })
);

export const undoLikeComment = (videoId, commentId) => (
    $.ajax({
        method: 'POST',
        url: `api/videos/${videoId}/comments/${commentId}/undo`
    })
);

export const changeLikeComment = (videoId, commentId) => (
    $.ajax({
        method: 'POST',
        url: `api/videos/${videoId}/comments/${commentId}/change`
    })
);