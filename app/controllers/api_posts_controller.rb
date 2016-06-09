class ApiPostsController < ApplicationController
  def index
    render json: Post.all
  end

  def create
    post = Post.new(post_params)
    post.save
    render json: Post.all
  end

  private

  def post_params
    params.permit(:title, :media_type, :author)
  end
end
