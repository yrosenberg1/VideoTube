class Api::SessionsController < ApplicationController

def create
    
    @user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password]
    )

    if @user
        
        login(@user)
       render "api/users/show"
       
    else
        render json: ["Wrong email or password. Try again."], status: 401
    end
end

def destroy
    @user = current_user

    if @user 
        logout
        render "api/users/show"
    else
        render json: ["Nobody is currently signed in."], status: 404
    end     
end



    # private

    # def user_params
    #     params.require(:user).permit(:email, :password)
    # end

end

