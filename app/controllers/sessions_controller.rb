class SessionsController < ApplicationController

  def new
    if signed_in?
      redirect_to user_url(current_user)
    else
    render :new
    end
  end

  def create
    user = User.find_by_credentials(user_params)
    if user
      sign_in(user)
      redirect_to user_url(user)
    else
      flash.now[:errors] = ["User not found"]
      render :new
    end
  end

  def destroy
    sign_out
    redirect_to new_session_url
  end

  private

  def user_params
    params.require("user").permit(:username, :password)
  end
end
