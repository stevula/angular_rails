Rails.application.routes.draw do
  # mount_devise_token_auth_for 'User', at: 'auth'
  root 'application#index'

  namespace :api do
    scope '/posts' do
      get '/' => 'posts#index'
      post '/' => 'posts#create'
      
      scope '/:id' do
        get '/' => 'posts#show'
        patch '/' => 'posts#update'
        delete '/' => 'posts#destroy'
      end
    end

    
    devise_for :users, :controllers => {sessions: 'api/sessions'} do
      # get '/' => 'users#index'
      # post '/signup' => 'users#create'

      post '/sign_in' => 'sessions#create'
      delete '/sign_out' => 'devise/sessions#destroy'
      # get '/after_sign_in' => 'sessions#after_create'

      # scope '/:id' do
        # get '/' => 'users#show'
        # patch '/' => 'users#update'
        # delete '/' => 'users#destroy'
      # end
    end

    # part of a workaround due to the redirect action in Devise sign_in
    scope '/users' do
      get '/after_sign_in' => 'sessions#after_create'
    end
  end

  # namespace :api do
  #   devise_for :sessions
  # end

  # hand off non-api routes to Angular
  get '*path' => 'application#index'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
