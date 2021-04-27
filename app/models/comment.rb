# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  comment_body      :text             not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  commenter_id      :integer          not null
#  parent_comment_id :integer
#  video_id          :integer          not null
#
# Indexes
#
#  index_comments_on_commenter_id       (commenter_id)
#  index_comments_on_parent_comment_id  (parent_comment_id)
#  index_comments_on_video_id           (video_id)
#

class Comment < ApplicationRecord
    include ActionView::Helpers::DateHelper

    validates :video_id, :commenter_id, :comment_body, presence: true

    belongs_to :commenter,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :User

    belongs_to :video,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Video

    has_many :replies,
    primary_key: :id,
    foreign_key: :parent_comment_id,
    class_name: :Comment

    has_many :likes, as: :likeable


    def date_modifier
  
        distance_of_time_in_words(self.created_at, Time.now)
       
      end
      
      def date_format
      self.created_at.to_date.to_s(:long)
      end

      def filter_likes
        self.likes.select {|like| like.like_dislike == true }
      end
      
      def filter_dislikes
        self.likes.select {|dislike| dislike.like_dislike == false}
      end

      def reply_comments
        self.replies
      end

      def video
        
        @video = Video.find(self.video_id)
       
        
    end
end
