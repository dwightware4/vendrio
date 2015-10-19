class RemoveImagesFromPosts < ActiveRecord::Migration
  def change
    remove_column :posts, :thumbnails
    remove_column :posts, :images
  end
end
