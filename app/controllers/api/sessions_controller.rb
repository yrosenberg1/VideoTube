class Api::SessionsController < ApplicationController

def create
    @user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password]
    )

    if @user
        login(@user)
        # render # json user page
    else
        render json: @user.errors.full_messages
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end

end


def destroy
    @user = current_user

    if @user 
        logout
        # render #something? youtube renders login form.
    else
        render json: @user.errors.full_messages
    end     
end

end