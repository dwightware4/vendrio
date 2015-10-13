class Api::PostsController < ApplicationController

  def index
    posts = Post.all
    render json: posts
  end

  def show
    post = Post.find(params[:id])
    render json: post
  end

  def create
    post = Post.create!(post_params)
    render json: post
  end

  private

  def post_params
    params.require(:posts).permit(:title, :description, :latitude, :longitude, :price)
  end
end
