class Api::SessionsController < Devise::SessionsController
  # overrides inherited before filter, which was redirecting with #create.
  # not sure why this fixed it, unless user already authenticated, but that doesn't seem to be the case.
  prepend_before_filter :require_no_authentication, :only => [:new]
  before_filter :ensure_params_exist
  
  def create
    user = User.find_for_database_authentication(email: user_params[:email])
    return invalid_login_attempt unless user

    if user.valid_password?(user_params[:password])
      user.skip_confirmation!
      sign_in("user", user)
      render json: {
        success: true,
        email: user.email
      }
      return
    end
    invalid_login_attempt
  end
  
  def destroy
    sign_out(user_name)
  end

  protected

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def ensure_params_exist
    return unless user_params[:username].blank?
    render json: {success: false, message: "missing user_login parameter"}, status: 422
  end

  def invalid_login_attempt
    warden.custom_failure!
    render json:  {success: false, message: "Error with your login or password"}, status: 401
  end
end
