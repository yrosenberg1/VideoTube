class CreateVideoHistory < ActiveRecord::Migration[5.2]
  def change
    create_table :video_histories do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.timestamps
  end

    add_index :video_histories, [:user_id, :video_id], unique: true
   
    
  end
end
