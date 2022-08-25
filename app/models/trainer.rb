class Trainer < ApplicationRecord
    has_secure_password
    has_many :pokemons, dependent: :destroy

    has_many :friend_requests_as_requestor,
        foreign_key: :requestor_id,
        class_name: "FriendRequest",
        dependent: :destroy
    
    has_many :friend_requests_as_receiver,
        foreign_key: :receiver_id,
        class_name: "FriendRequest",
        dependent: :destroy

    # has_many :friendships, ->(trainer) { where('friend_a_id: ? OR friend_b_id: ?', trainer.id, trainer.id) },
    #     class_name: "Friendship",
    #     dependent: :destroy

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :bio, length: { maximum: 300 }
end
