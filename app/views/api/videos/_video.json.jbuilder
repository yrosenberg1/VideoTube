
json.extract! video, :uploader_id, :title, :description, :id
json.views  video.views
json.uploader  video.uploader, :first_name, :last_name
json.timestamp video.date_modifier
json.date video.date_format
json.likes video.filter_likes
json.dislikes video.filter_dislikes
json.numComments video.num_comments
# json.videoUrl url_for(video.video)