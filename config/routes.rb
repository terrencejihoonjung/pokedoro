Rails.application.routes.draw do
  resources :pokemons
  resources :trainers, only: [:create, :show]

  get '/me', to: 'trainers#show'
  delete '/logout', to: 'sessions#destroy'
  post '/login', to: 'sessions#create'
  post '/signup', to: 'trainers#create'

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
