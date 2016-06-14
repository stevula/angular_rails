class Api::SessionsController < Devise::SessionsController
  # will leave as is since this project is mainly for angular practice
  prepend_before_filter :require_no_authentication, :only => [:create]
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

  # hack to prevent inherited devise method from redirecting to non-existent page when already signed in
  def require_no_authentication
    assert_is_devise_resource!
    return unless is_navigational_format?
    no_input = devise_mapping.no_input_strategies

    authenticated = if no_input.present?
      args = no_input.dup.push scope: resource_name
      warden.authenticate?(*args)
    else
      warden.authenticated?(resource_name)
    end

    if authenticated && resource = warden.user(resource_name)
      flash[:alert] = I18n.t("devise.failure.already_authenticated")
    end
  end
end
