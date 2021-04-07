# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  like_dislike  :boolean          not null
#  likeable_type :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  likeable_id   :bigint
#  liker_id      :integer          not null
#
# Indexes
#
#  index_likes_on_likeable_type_and_likeable_id               (likeable_type,likeable_id)
#  index_likes_on_liker_id_and_likeable_id_and_likeable_type  (liker_id,likeable_id,likeable_type) UNIQUE
#

class Like < ApplicationRecord

    validates :liker_id, :likeable_type, :likeable_id, presence: true
    validates :like_dislike, inclusion: { in: [true, false] }

    belongs_to :likeable, polymorphic: true

    
    belongs_to :liker,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :User
    
end
