class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :height, :weight, :image, :poketype, :base_experience, :trainer_id
end
