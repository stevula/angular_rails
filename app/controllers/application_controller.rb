class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  respond_to :json
  
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  def index
  end

  # def after_sign_in_path_for(resource)
  #   binding.pry
  #   sign_in_url = url_for(action: :after_create, controller: 'sessions', only_path: false, protocol: 'http')
  # end
end
