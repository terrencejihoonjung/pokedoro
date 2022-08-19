class FriendRequestSerializer < ActiveModel::Serializer
  attributes :id, :requestor_id, :receiver_id

  belongs_to :requestor
end
