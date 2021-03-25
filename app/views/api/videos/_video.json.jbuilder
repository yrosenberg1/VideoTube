
json.extract! video, :uploader_id, :title, :description, :id
json.uploader  video.uploader, :first_name, :last_name
json.timestamp video.date_modifier
json.date video.date_format
