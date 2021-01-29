class Api::VideosController < ApplicationController
    def create
        @video = Video.new(video_params)

        if @video.save
            render :show
        else
            render 
            json: @video.errors.full_messages, status: 422
        end
    end


    

    def index
        @videos = Video.all
        render :index
    end


    def  show
        @video = Video.find(params[:id])
        if @video 
            render :show
        else
            render json: ["No Video Found"], status: 401
        end
    end

    private

    def video_params
        params.require(:video).permit(:title, :description, :uploader_id)
    end

end