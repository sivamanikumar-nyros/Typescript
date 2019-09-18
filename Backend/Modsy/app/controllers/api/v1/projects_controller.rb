class Api::V1::ProjectsController < ApplicationController

  before_action :set_project, only: [:show, :update, :destroy]
  # skip_before_action :verify_authenticity_token

  # GET /articles

  def index
  
  # @projects = Project.pagination_request(params[:page])
  #  render json: { total_pages: @projects.total_pages, projects: @projects }
  #   respond_to  do |format|
  #     format.html
  #     format.js
  #   end
    @projects = Project.all
    # render json: Project.new(roomname: @projects), adapter: :json
    # render json: @projects, root: "data"
    render json: @projects, adapter: :json

  end

  # GET /articles/1

  def show

   render json: @project

  end

  # POST /articles

  def create

   @project = Project.new(project_params)

   if @project.save

    render json: @project, status: :created, location: api_v1_project_url(@project)

   else

    render json: @project.errors, status: :unprocessable_entity

   end

  end

  # PATCH/PUT /articles/1

  def update

   if @project.update(project_params)

    render json: @project

   else

    render json: @project.errors, status: :unprocessable_entity

   end

  end

 # DELETE /articles/1

  def destroy

   @project.destroy

  end

  private

  # Use callbacks to share common setup or constraints between actions.

  def set_article

   @project = Project.find(params[:id])

  end

  # Only allow a trusted parameter “white list” through.

  def project_params

  params.require(:project).permit(:roomName)

  end

  end