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
    post = Post.new(post_params)
    post.user_id = current_user.id
    post.save!
    render json: Post.all
  end

  private

  def post_params
    params.permit(:title, :description, :latitude, :longitude, :price, :category_id)
  end
end
