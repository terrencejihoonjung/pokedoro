class FriendRequestsController < ApplicationController

    def create
        friend_request = FriendRequest.create!(requestor_id: params[:requestor_id], receiver_id: params[:receiver_id])
        render json: friend_request, status: :created
    end

    def destroy
        friend_request = FriendRequest.find(params[:id])
        friend_request.destroy
        head :no_content
    end
end
