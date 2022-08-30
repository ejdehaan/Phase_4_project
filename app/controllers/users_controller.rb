class UsersController < ApplicationController
    
  def show
    user = User.find(session[:user_id])
    render json: user
  end

  def index
    user = User.all
    render json: user
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:username, :first_name, :last_name, :email_address, :password, :password_confirmation)
  end

end

# Create a User with strong params (from private method)
# If user.valid?, render json , send status 200/ok or created
# session[:user_id] = user.id
