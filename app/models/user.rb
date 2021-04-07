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

class User < ApplicationRecord

    validates :first_name, :last_name, :email, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 8}, allow_nil: true

    
    has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like
    
    has_many :comments,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :Comment
    
    has_many :videos,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :Video 
    

    attr_reader :password
    after_initialize :ensure_session_token
    
    
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def reset_session_token!
      self.generate_session_token
      self.save!
      self.session_token
    end

    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      return nil if !user
      user.is_password?(password) ? user : nil
    end

     
    
    def generate_session_token
      self.session_token = SecureRandom.urlsafe_base64
    end
    
    
    
    def ensure_session_token
      self.session_token = SecureRandom.urlsafe_base64
    end
  end
