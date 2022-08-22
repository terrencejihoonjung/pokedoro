class FriendshipSerializer < ActiveModel::Serializer
  attributes :id, :friend_a_id, :friend_b_id

  belongs_to :friend_a
  belongs_to :friend_b
end
