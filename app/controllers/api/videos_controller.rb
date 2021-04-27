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
        if @video.update(video_params)
            render 'api/videos/show'
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def index 
        
        if params[:userId] && (params["likes"] == "vids")
            liked_vids = Like.where(["like_dislike = ? and liker_id = ? and likeable_type = ?","true", params[:userId], "Video"])
            @videos = liked_vids.map {|like| like.likeable}
            
        elsif params[:userId] && (params["watched"] == "vids")   
          watched_vids = User.find(params[:id]).watched_videos
          @videos = watched_vids.map {|watch| watch.video}
          
        elsif params[:userId]
            
            @videos = Video.where("uploader_id": params[:userId])
        else
            
        @videos = Video.all
        end
        
        render 'api/videos/index'
      
    end

    def show
        @video = Video.find(params[:id])
      if @video
        render 'api/videos/show'
      else
        render json: @video.errors.full_messages, status: 422
      end

    end

    def search
        @videos = Video.where("title LIKE ?", "%" + params[:keyword] + "%")
        
        render 'api/videos/index'
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
        params.require(:video).permit(:uploader_id,:title, :description, :video)
    end
end