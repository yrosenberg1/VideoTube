class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            
            render 'api/comments/show'
        else
            render json: @comment.errors.full_messages, status: 422
            byebug
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
    private

    def comment_params
        params.require(:comment).permit(:video_id, :comment_id, :parent_comment_id, :comment_body)

    end
end