# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  url        :string           not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  public_id  :string
#

require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
