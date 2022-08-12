class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        trainer = Trainer.find_by(username: params[:username])
        if trainer&.authenticate(params[:password])
          session[:user_id] = trainer.id
          render json: trainer
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end
