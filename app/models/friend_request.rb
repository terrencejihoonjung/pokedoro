class FriendRequest < ApplicationRecord
    belongs_to :requestor, class_name: "Trainer"
    belongs_to :receiver, class_name: "Trainer"

    validate :request_exists?

    def request_exists?
        FriendRequest.all.each do |request|
            if (request.requestor_id == requestor_id && request.receiver_id == receiver_id) || 
            (request.requestor_id == receiver_id && request.receiver_id == requestor_id)
                errors.add(:requestor_id, "... A pending friend request or relationship already exists between you and this trainer")
            end
        end
    end

end
