class ApiUsersController < ApplicationController
  before_action :authenticate_user!, only: [:update, :destroy]

  def index
    render json: User.all
  end

  def show
  end

  def create
    user = User.new(user_params)

    # TODO: add some conditional logic here
    user.save
    
    render json: user
  end

  def update
  end

  def destroy
  end

  private 

  def user_params
  end
end
