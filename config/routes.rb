Rails.application.routes.draw do
  resources :pokemons, only: [:create]
  resources :trainers, only: [:create, :index, :show, :update]
  resources :friend_requests, only: [:index, :create, :destroy]
  resources :friendships, only: [:create]

  get '/me', to: 'trainers#show'
  delete '/logout', to: 'sessions#destroy'
  post '/login', to: 'sessions#create'
  post '/signup', to: 'trainers#create'

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
