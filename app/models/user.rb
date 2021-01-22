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
      BCrypt::Password.new(password).is_password?(self.password_digest)
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