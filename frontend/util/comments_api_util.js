

export const fetchComment = (video, comment) => (
    $.ajax({
        method: 'GET',
        url: `api/videos/${video}/comments/${comment.id}`

    })
);

export const fetchComments = videoId => (
    $.ajax({
        method: 'GET',
        url: `api/videos/${videoId}/comments`

    })
);

export const createComment = (video, comment) => (
    $.ajax({
        method: 'POST',
        url: `api/videos/${video}/comments`,
        data: {comment}
    })
);

export const deleteComment = comment => (
    $.ajax({
        method: 'DELETE',
        url: `api/comments/${comment.id}`
    })
);

export const updateComment = comment => (
    $.ajax({
        method: 'PATCH',
        url: `api/comments/${comment.id}`,
        data: {comment}
    })
);
