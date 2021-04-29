# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  uploader_id :integer          not null
#
# Indexes
#
#  index_videos_on_created_at   (created_at)
#  index_videos_on_title        (title)
#  index_videos_on_uploader_id  (uploader_id)
#

class Video < ApplicationRecord
    include ActionView::Helpers::DateHelper
    validates :uploader_id, :title, :description, presence: true
    validate :ensure_video

    belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User

    has_many :comments,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Comment

    has_many :watched,
    foreign_key: :video_id,
    class_name: :VideoHistory

    has_one :view,
    foreign_key: :video_id,
    class_name: :View

    has_many :likes, as: :likeable

    has_one_attached :video

def ensure_video
  unless self.video.attached?
    errors[:video] << "must be attached"
  end
end

def date_modifier
  
  distance_of_time_in_words(self.created_at, Time.now)
 
end

def date_format
self.created_at.to_date.to_s(:long)
end



def views
  # if !self.view
    
  #   View.create({video_id:self.id})
    
  #   self.view.num_views
  # else
    
  self.view.num_views 
  
end

def filter_likes
  self.likes.select {|like| like.like_dislike == true }
end

def filter_dislikes
  self.likes.select {|dislike| dislike.like_dislike == false}
end

def num_comments
  self.comments.length
end

end
