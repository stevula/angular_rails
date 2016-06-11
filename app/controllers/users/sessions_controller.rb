class Users::SessionsController < Devise::SessionsController
# before_action :configure_sign_in_params, only: [:create]
  respond_to :json

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # override default Devise method in order to render json
  # POST /resource/sign_in
  def create
    user = User.find_for_database_authentication(email: user_params[:email])

    if user && user.valid_password?(user_params[:password])
      sign_in(user)
      render json: user
    else
      render status: :unauthorized
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
