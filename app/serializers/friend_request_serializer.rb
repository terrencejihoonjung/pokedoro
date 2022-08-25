class FriendRequestSerializer < ActiveModel::Serializer
  attributes :id, :requestor_id, :receiver_id, :request_sent

  belongs_to :requestor
  belongs_to :receiver
end
