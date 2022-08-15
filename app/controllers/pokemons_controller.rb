class PokemonsController < ApplicationController
    wrap_parameters format: []

    def create
        pokemon = Pokemon.create!(pokemon_params)
        render json: pokemon, status: :created
    end

    private

    def pokemon_params
        params.permit(:name, :height, :weight, :image, :poketype, :base_experience, :trainer_id)
    end
end
