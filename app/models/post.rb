require 'camel_json'

class Post < ActiveRecord::Base
  include CamelJson

  belongs_to :user
  # TODO: validations (link format, etc)
end
