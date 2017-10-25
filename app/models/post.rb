class Post < ApplicationRecord
  belongs_to :user, :optional => true
  has_many :comments
  mount_uploader :image, ImageUploader
end
