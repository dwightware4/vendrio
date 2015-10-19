# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  url        :string           not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Image < ActiveRecord::Base
  validates :url, :post_id, presence: true

  belongs_to :post
end
