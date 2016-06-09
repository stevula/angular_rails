class ApiPostsController < ApplicationController
  def index
    render json: Post.all
  end

  def show
    post = Post.find(params[:id])
    p post
    render json: post
  end

  def create
    post = Post.new(post_params)

    # TODO: add some conditional logic here
    post.save
    
    render json: post
  end

  private

  def post_params
    params.require(:api_post).permit(:title, :media_type, :author)
  end
end
