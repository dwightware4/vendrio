class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save
      sign_in(user)
      redirect_to root_url
    else
      flash[:errors] = user.errors.full_messages
      redirect_to new_user_url
    end
  end

  def edit
    @user = current_user
  end

  def show
    @user = current_user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
