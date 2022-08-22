class FriendshipsController < ApplicationController

    def create
        friendship = Friendship.create!(friendship_params)
        render json: friendship, status: :created
    end

    private

    def friendship_params
        params.permit(friend_a_id: params[:friend_a_id], friend_b_id: params[:friend_b_id])
    end

end
