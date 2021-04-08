# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  title       :string           not null
#  views       :integer          not null
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
    validates :uploader_id, :title, :description, :views, presence: true


    belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User

    has_many :comments,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Comment

    has_many :likes, as: :likeable


def date_modifier
  
  distance_of_time_in_words(self.created_at, Time.now)
 
end

def date_format
self.created_at.to_date.to_s(:long)
end



def add_views
  self.views += 1
end

def filter_likes
  self.likes.select {|like| like.like_dislike == true }
end

def filter_dislikes
  self.likes.select {|dislike| dislike.like_dislike == false}
end

end