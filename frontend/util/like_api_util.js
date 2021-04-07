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

