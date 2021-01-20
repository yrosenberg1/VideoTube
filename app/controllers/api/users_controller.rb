class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save 
            login(@user)
            # render #a json page for user login
        else
            render json: @user.errors.full_messages
        end
    end
    
    private
    
    def user_params
        params.require(:user).permit(:email, :first_name, :lastname, :phone_number, :date_of_birth, :password)
    end
    
end
