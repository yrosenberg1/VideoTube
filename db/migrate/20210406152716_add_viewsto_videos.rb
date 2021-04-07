class AddViewstoVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :views, :integer
    # change_column_null :videos, :views, :default => 0, :null => false 
    change_column_null :videos, :views, false, 0 

  end
end
