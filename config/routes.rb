Rails.application.routes.draw do
  get 'images/destroy'

  root to: "static_pages#root"

  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]

  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:index, :show, :create, :destroy, :update]
    resources :categories, only: [:index]
    resources :images, only: [:destroy]
  end
end
