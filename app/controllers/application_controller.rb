class ApplicationController < ActionController::Base
    
    protect_from_forgery with: :exception
    # protect_from_forgery with: :null_session
    helper_method :current_user, :logged_in?

    private

    def current_user
        return nil if !session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def logout
        session[:session_token] = nil
        @current_user.reset_session_token!
    end

    def require_signed_in
        unless logged_in?     
        render json: {base: ['not signed in']}, status: 404
        end
    end


end
