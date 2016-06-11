class ApiSessionsController < ApplicationController
  # before_action :authenticate_user!

  def create
    render json: current_user
  end

  def destroy
  end
end
