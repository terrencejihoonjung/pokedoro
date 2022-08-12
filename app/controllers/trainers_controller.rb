class TrainersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        trainer = Trainer.create!(trainer_params)
        session[:user_id] = trainer.id
        render json: trainer, status: :created
    end

    def show
        render json: @current_trainer
    end

    private
    
    def trainer_params
        params.permit(:username, :password, :password_confirmation , :bio , :email )
    end
end
