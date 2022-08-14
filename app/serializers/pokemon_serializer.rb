class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :height, :weight, :image, :type, :base_experience, :trainer_id
end
