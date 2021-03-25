class Api::VideosController < ApplicationController

    def create 
        @video = Video.new(video_params)

        if @video.save
            render 'api/videos/show'
        else 
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        @video = Video.find(params[:id])
    if    @video.destroy
    else
        render json: @video.errors.full_messages, status: 422
    end    

    end

    def update
        @video = Video.find(params[:id])
        if @video.update(comment_params)
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def index 
        @videos = Video.all
        
        render 'api/videos/index'
      
    end

    def show
        @video = Video.find(params[:id])
        render 'api/videos/show'
    end

    private
    def video_params
        params.require(:video).permit(:uploader_id,:title, :description)
    end
end