class Video < ApplicationRecord
    include ActionView::Helpers::DateHelper
    validates :uploader_id, :title, :description, presence: true


    belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User

    has_many :comments,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Comment

def date_modifier
  
  distance_of_time_in_words(self.created_at, Time.now)
 
end

def date_format
self.created_at.to_date.to_s(:long)
end

end