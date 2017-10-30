class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.references :user, foreign_key: {to_table: :users}, index: true
      t.string :body
      t.string :title
      t.string :image
      t.string :location
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
    