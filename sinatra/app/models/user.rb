class User < ActiveRecord::Base 
    has_many :miniatures
    has_secure_password
end