class Miniature < ActiveRecord::Base
    belongs_to :miniature_set
    belongs_to :user
end