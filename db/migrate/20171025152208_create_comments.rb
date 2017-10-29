class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.references :post, foreign_key: {to_table: :posts}, index: true
  		t.references :user, foreign_key: {to_table: :users}, index: true
      t.string :comment

      t.timestamps
    end
  end
end
