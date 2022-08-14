class PokemonsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        pokemon = Pokemon.create!(pokemon_params)
        render json: pokemon, status: :created
    end

    private

    def pokemon_params
        params.permit(:name, :height, :weight, :image, :type, :base_experience, :trainer_id)
    end
end
