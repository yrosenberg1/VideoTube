class Video < ApplicationRecord
    validates :uploader_id, :title, :description, presence: true

    has_one_attached :video

    has_many :likes,
       foreign_key: video_id,
       class_name: :Like

    has_many :comments,
      foreign_key: video_id,
      class_name: :comment 

    belongs_to :uploader,
       foreign_key: :uploader_id,
       class_name: :user 


      
      
end