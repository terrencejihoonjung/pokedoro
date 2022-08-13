class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :height, :weight, :image, :stat, :type, :base_experience
end
