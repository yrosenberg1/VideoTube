class Api::CommentsController < ApplicationController
    def create
        
        @comment = Comment.new(comment_params)
        
        if @comment.save
            
            render 'api/comments/show'
        else
            render json: @comment.errors.full_messages, status: 422
            
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        # if @comment.destroy
    end

    def update
        @comment = Comment.find(params[:id])
        @comment.update(comment_params)
    end

    def index 
        
        if params[:video_id]
            video_comments = Video.find(params[:video_id]).comments
        @comments = video_comments
        
        render 'api/comments/index'
        else 
            render json: @comments.errors.full_messages, status: 422
        end
    end

    def like
        byebug
        @like = Like.new(like_dislike:true, liker_id:current_user.id, likeable_id: params[:comment_id], likeable_type: 'Comment')
        if @like.save
            redirect_to api_comment_url(params[:comment_id])
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def dislike
        @dislike = Like.new(like_dislike:false, liker_id:current_user.id, likeable_id: params[:commment_id], likeable_type: 'Comment')
        if @dislike.save
            redirect_to api_commment_url(params[:comment_id])
        else
            render json: @dislike.errors.full_messages, status: 422
        end
    end

    def undo
        @like = Like.find_by(liker_id: current_user.id, likeable_id: params[:comment_id], likeable_type: "Comment")
        
        if @like.delete
            
            redirect_to api_comment_url(params[:comment_id])
        else
            
            render json: @like.errors.full_messages, status: 422
        end
    end

    def change
        @like = Like.find_by(liker_id: current_user.id, likeable_id: params[:comment_id], likeable_type: "Comment")
        if @like.like_dislike
            @like.like_dislike = false
        else
            @like.like_dislike = true
        end
        if @like.save
            redirect_to api_comment_url(params[:comment_id])
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:video_id, :commenter_id, :parent_comment_id, :comment_body)

    end
end