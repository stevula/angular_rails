class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :media_type, null: false
      t.string :category, default: "random"
      t.string :title, null: false
      t.string :author, null: false
      t.integer :upvotes, default: 0
      t.string :link
      t.text :body

      t.timestamps null: false
    end
  end
end
