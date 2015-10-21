class AddPublicIdToImages < ActiveRecord::Migration
  def change
    add_column :images, :public_id, :string
  end
end
