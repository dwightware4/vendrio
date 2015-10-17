class AddThumbnailsToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :thumbnails, :string
  end
end
