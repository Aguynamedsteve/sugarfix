# == Schema Information
#
# Table name: businesses
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  img_url       :string
#  address       :string           not null
#  cross_streets :string
#  neighborhood  :string
#  lat           :float            not null
#  long          :float            not null
#  phone         :string
#  site_url      :string
#  menu_url      :string
#  category      :string           not null
#  rating        :float            not null
#  cost          :string           not null
#  hours         :text             not null
#  health_score  :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
