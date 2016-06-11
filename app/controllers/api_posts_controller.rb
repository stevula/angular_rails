class ApiPostsController < ApplicationController
  before_action :authenticate_user!, only: [:update, :destroy]

  def index
    render json: Post.all
  end

  def show
    post = Post.find(params[:id])
    render json: post
  end

  def create
    post = Post.new(post_params)

    # TODO: add some conditional logic here
    post.save
    
    render json: post
  end

  def update
  end

  def destroy
  end

  private

  def post_params
    params.require(:api_post).permit(
      :title, :media_type, :author, :category, :link, :body
    )
  end
end
