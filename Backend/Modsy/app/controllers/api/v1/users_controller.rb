class Api::V1::UsersController < ApplicationController

  # before_action :signin, only: [:show, :update, :destroy]
  # skip_before_action :verify_authenticity_token


  # GET /articles

  def index
  
  @users = User.pagination_request(params[:page])
   render json: { total_pages: @users.total_pages, users: @users }
    respond_to  do |format|
      format.html
      format.js
    end

  end

  # GET /articles/1

  def show

   render json: @user

  end

  def signin
    @user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password]) 
      render json: @user
    else
      render json: {message: 'Email or password is incorrect'}  
    end
  end

  # POST /articles

  # def create
  #   binding.pry
  #  @user = User.new(user_params)

  #  if @user.save

  #   render json: @user, status: :created, location: api_v1_user_url(@user)

  #  else

  #   render json: @user.errors, status: :unprocessable_entity

  #  end

  # end


  def create
# binding.pry
   @user = User.new(user_params)

   if @user.save

    render json: @user, status: :created, location: api_v1_user_url(@user)

   else

    render json: {message: 'Email already exists. Please log in instead.'} 

    # render json: { @user.errors: e.response.body.errors }, status: 400

   end

  end


  # PATCH/PUT /articles/1

  def update

   if @user.update(user_params)

    render json: @user

   else

    render json: @user.errors, status: :unprocessable_entity

   end

  end

 # DELETE /articles/1

  def destroy

   @user.destroy

  end

  private

  # Use callbacks to share common setup or constraints between actions.

  # def set_user

  #  @user = User.find(params[:id])

  # end

  # Only allow a trusted parameter “white list” through.

  def user_params

  params.require(:user).permit(:email, :password)

  end

  end