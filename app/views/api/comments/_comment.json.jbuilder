json.extract! comment, :video_id, :commenter_id, :parent_comment_id, :comment_body, :id
json.commenter comment.commenter, :first_name, :id, :last_name
json.timestamp comment.date_modifier
json.date comment.date_format
json.likes comment.filter_likes
json.dislikes comment.filter_dislikes
json.replies comment.reply_comments.each do |reply|
    
    json.extract! reply, :video_id, :commenter_id, :parent_comment_id, :comment_body, :id
    json.commenter reply.commenter, :first_name, :id, :last_name
    json.timestamp reply.date_modifier
    json.date reply.date_format
    json.likes reply.filter_likes
    json.dislikes reply.filter_dislikes
    
end