require 'camel_json'

class Post < ActiveRecord::Base
  include CamelJson

  # TODO: validations (link format, etc)
end
