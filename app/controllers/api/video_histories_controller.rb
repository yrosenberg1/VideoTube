class Api::VideoHistoriesController < ApplicationController


    def create
        @history = VideoHistory.new(video_history_params)

        if @history.save 
            render json: ["saved to db"]
        else
            render json: ["Already in database"]
        end
    end

    private
    def video_history_params
        params.require(:history).permit(:user_id, :video_id)
    end
end