class Api::ImagesController < ApplicationController
  def destroy
    image = Image.find(params[:id])
    image.destroy
    @posts = Post.all.order(created_at: :desc).includes(:images)
    render :index
  end
end
