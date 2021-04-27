class CreateViews < ActiveRecord::Migration[5.2]
  def change
    create_table :views do |t|
      t.integer :video_id, null: false
      t.integer :num_views, null: false, default: 0 
      t.timestamps
    end

    add_index :views, :num_views
  end
end
