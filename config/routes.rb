Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }
  get '/' => 'home#index', as: :root
  resources :comments
  resources :posts
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end