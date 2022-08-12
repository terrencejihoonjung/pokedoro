class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :bio
end
