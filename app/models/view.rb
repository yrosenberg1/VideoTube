# == Schema Information
#
# Table name: views
#
#  id         :bigint           not null, primary key
#  num_views  :integer          default(0), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  video_id   :integer          not null
#
# Indexes
#
#  index_views_on_num_views  (num_views)
#




class View <  ApplicationRecord
validates :video_id, :num_views, presence: true



belongs_to :video,
foreign_key: :video_id,
class_name: :Video

end
