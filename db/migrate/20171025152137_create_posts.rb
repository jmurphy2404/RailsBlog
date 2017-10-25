class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.references :user, foreign_key: true
      t.string :body
      t.string :title
      t.string :image
      t.string :location

      t.timestamps
    end
  end
end
