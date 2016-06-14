class Api::SessionsController < Devise::SessionsController
  prepend_before_filter :require_no_authentication, :only => [:create]
  before_filter :ensure_params_exist, except: [:destroy]
  skip_before_filter :verify_signed_out_user
  
  def create
    user = User.find_for_database_authentication(email: params[:user][:email])
    p "user data found in db: ", user
    return invalid_login_attempt unless user

    if user.valid_password?(params[:user][:password])
      # TODO: remove after confirmations added
      user.skip_confirmation!
      p "user had valid password"

      sign_in("user", user)
      p "user signed in: ", user
      render json: user
      return
    end

    invalid_login_attempt
  end
  
  def destroy
    sign_out(warden.user)
    p "user signed out"
    render nothing: true, status: :ok
    return
  end

  protected

  def ensure_params_exist
    p "missing user[username] param"
    return unless params[:user][:username].blank?
    render json: {success: false, message: "missing username parameter"}, status: 422
  end

  def invalid_login_attempt
    p "invalid login attempt"
    warden.custom_failure!
    render json:  {success: false, message: "Error with your login or password"}, status: 401
  end

  # override inherited devise method from redirecting to non-existent page when already signed in
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
      p "user already signed in: ", warden.user
      flash[:alert] = I18n.t("devise.failure.already_authenticated")
    end
  end
end
