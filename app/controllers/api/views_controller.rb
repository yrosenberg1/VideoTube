class Api::ViewsController < ApplicationController

    def create
        @view = View.new(views_params)
        if @view.save
            byebug
        else
            render json: @view.errors.full_messages, status: 422
        end
    end

    def update
        @view = View.find_by(video_id:params[:view][:video_id])
        byebug
        @view.num_views += 1
        byebug
        if @view.update(views_params)
            byebug
        else
            render json: @view.errors.full_messages, status: 422
        end
    end


    def show
        @view = View.find_by(video_id:params[:view][:video_id])
        if @view
        else
            render json: @view.errors.full_messages, status: 422
    
        end  
   end

   private
   def views_params
    params.require(:view).permit(:view, :video_id)
   end
end