Rails.application.routes.draw do
  root to: "static_pages#root"

  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]

  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:index, :show, :create, :destroy]    
  end
end
