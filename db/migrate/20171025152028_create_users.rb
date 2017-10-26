class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :fullname
      t.string :username
      t.string :password
      t.string :image

      t.timestamps
    end
  end
end
