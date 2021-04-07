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
      if @video.add_views
        @video.save
        render 'api/videos/show'
      else
        render json: @video.errors.full_messages, status: 422
      end

    end

    def like
        @like = Like.new(like_dislike:true, liker_id:current_user.id, likeable_id: params[:video_id], likeable_type: 'Video')
        if @like.save
            redirect_to api_video_url(params[:video_id])
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def dislike
        @dislike = Like.new(like_dislike:false, liker_id:current_user.id, likeable_id: params[:video_id], likeable_type: 'Video')
        if @dislike.save
            redirect_to api_video_url(params[:video_id])
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def undo
        @like = Like.find_by(liker_id: current_user.id, likeable_id: params[:video_id], likeable_type: "Video")
        if @like.delete
            redirect_to api_video_url(params[:video_id])
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def change
        @like = Like.find_by(liker_id: current_user.id, likeable_id: params[:video_id], likeable_type: "Video")
        if @like.like_dislike
            @like.like_dislike = false
        else
            @like.like_dislike = true
        end
        if @like.save
            redirect_to api_video_url(params[:video_id])
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    private
    def video_params
        params.require(:video).permit(:uploader_id,:title, :description)
    end
end