# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  latitude    :float            not null
#  longitude   :float            not null
#  price       :integer          not null
#  user_id     :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
