Rails.application.routes.draw do
  resources :trainers, only: [:create, :show]

  post '/me', to: 'trainers#show'
  delete '/logout', to: 'sessions#destroy'
  get '/login', to: 'sessions#create'
  post '/signup', to: 'trainers#create'

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
