class Api::PostsController < ApplicationController

  def index
    @posts = Post.all.order(created_at: :desc).includes(:images)
  end

  def show
    post = Post.find(params[:id])
    render json: post
  end

  def create
    post = Post.new(post_params)
    post.user_id = current_user.id
    post.save!
    if params[:images]
      params[:images].each do |image|
        Image.create!({url: image, post_id: post.id})
      end
    end

    @posts = Post.all.order(created_at: :desc)
    render :index
  end

  def destroy
    post = Post.find(params[:id])
    if post
      post.destroy
      @posts = Post.all.order(created_at: :desc)
      render :index
    end
  end

  def update
    post = Post.find(params[:id])
    if post
      post.update(post_params)
      @posts = Post.all.order(created_at: :desc)
      render :index
    end
  end

  private

  def post_params
    params.permit(:title, :description, :latitude, :longitude, :price, :category_id, :city, :state)
  end
end
