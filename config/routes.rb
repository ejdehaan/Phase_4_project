Rails.application.routes.draw do
  
  


  resources :posts, only:  [:index, :create, :update, :destroy]

  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
