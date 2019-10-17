Rails.application.routes.draw do
  root 'messages#index'
  resources :messages, only: [:index] do
  end
end
