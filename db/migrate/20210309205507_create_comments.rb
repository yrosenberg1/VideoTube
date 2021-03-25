class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :video_id, null: false
      t.integer :commenter_id, null:false
      t.integer :parent_comment_id
      t.text :comment_body, null: false
      t.timestamps
    end

    add_index :comments, :video_id
    add_index :comments, :commenter_id
    add_index :comments, :parent_comment_id


  end
end
