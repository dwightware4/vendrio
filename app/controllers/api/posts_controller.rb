class Api::PostsController < ApplicationController

  def index
    posts = Post.all.order(created_at: :desc)
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
    render json: Post.all.order(created_at: :desc)
  end

  def destroy
    post = Post.find(params[:id])
    if post
      post.destroy
      render json: Post.all.order(created_at: :desc)
    end
  end

  def update
    post = Post.find(params[:id])
    if post
      post.update(post_params)
      render json: Post.all.order(created_at: :desc)
    end
  end

  private

  def post_params
    params.permit(:title, :description, :latitude, :longitude, :price, :category_id)
  end
end
