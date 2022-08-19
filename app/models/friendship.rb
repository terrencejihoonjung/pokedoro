class Friendship < ApplicationRecord
    belongs_to :friend_a, class_name: "Trainer"
    belongs_to :friend_b, class_name: "Trainer"
end
