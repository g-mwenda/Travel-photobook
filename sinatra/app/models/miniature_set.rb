class MiniatureSet < ActiveRecord::Base
    has_many :miniatures, dependent: :destroy
    belongs_to :user
end