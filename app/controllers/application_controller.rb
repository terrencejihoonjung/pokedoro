class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    before_action :authorize
    client = Pexels::Client.new(ENV["PEXELS_API_KEY"]) 

    private

    def authorize
        @current_trainer = Trainer.find(session[:user_id])
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_trainer
      end
    
      def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
      end
    
      def render_not_found_response(exception)
        render json: { error: exception.message }, status: :not_found
      end
end
