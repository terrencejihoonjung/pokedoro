class FriendshipsController < ApplicationController
    wrap_parameters format: []

    def create
        friendship = Friendship.create!(friendship_params)
        render json: friendship, status: :created
    end

    def index 
        render json: Friendship.all, status: :ok
    end

    def destroy
        friendship = Friendship.find(params[:id])
        friendship.destroy
        head :no_content
    end

    private

    def friendship_params
        params.permit(:friend_a_id, :friend_b_id, :request_sent)
    end

end
