class Post < ApplicationRecord
  belongs_to :user, :optional => true
  has_many :comments, :dependent => :destroy
  mount_uploader :image, ImageUploader
end



## user comments, 
## delete comments by others on user posts, 
## delete user posts, 
## delete user itself 