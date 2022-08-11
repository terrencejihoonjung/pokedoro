class ApplicationController < ActionController::API
    include ActionController::Cookies

    client = Pexels::Client.new(ENV["PEXELS_API_KEY"]) 
end
