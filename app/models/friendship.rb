class Friendship < ApplicationRecord
    belongs_to :friend_a, class_name: "Trainer"
    belongs_to :friend_b, class_name: "Trainer"

    validate :friend_exists?

    def friend_exists?
        Friendship.all.each do |friend|
            if (friend.friend_a_id == friend_a_id && friend.friend_b_id == friend_b_id) || 
            (friend.friend_a_id == friend_b_id && friend.friend_b_id == friend_a_id)
                errors.add(:requestor_id, "You are already friends with this trainer")
            end
        end
    end
end
