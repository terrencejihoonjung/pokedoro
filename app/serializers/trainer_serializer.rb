class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio, :has_pokemon

  has_many :pokemons
  has_many :receivers
  has_many :requestors
end
