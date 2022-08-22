class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio, :has_pokemon

  has_many :pokemons
  has_many :friend_requests_as_requestor
  has_many :friend_requests_as_receiver
end
