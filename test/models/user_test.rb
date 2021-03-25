# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  date_of_birth   :integer
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  phone_number    :integer
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email_and_session_token   (email,session_token) UNIQUE
#  index_users_on_first_name_and_last_name  (first_name,last_name)
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
