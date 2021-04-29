# == Schema Information
#
# Table name: video_histories
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#  video_id   :integer          not null
#
# Indexes
#
#  index_video_histories_on_user_id_and_video_id  (user_id,video_id) UNIQUE
#

class VideoHistory < ApplicationRecord

    validates :user_id, :video_id, presence: true


    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video
end
