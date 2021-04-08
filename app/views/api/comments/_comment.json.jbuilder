json.extract! comment, :video_id, :commenter_id, :parent_comment_id, :comment_body, :id
json.commenter comment.commenter, :first_name, :id, :last_name
json.timestamp comment.date_modifier
json.date comment.date_format
json.likes comment.filter_likes
json.dislikes comment.filter_dislikes