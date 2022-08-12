class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio, :has_pokemon
end
