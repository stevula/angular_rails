class ApiPostsController < ApplicationController
  def index
    render json: Post.all
  end
end
