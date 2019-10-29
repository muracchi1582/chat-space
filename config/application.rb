require_relative 'boot'
require 'rails/all'

Bundler.require(*Rails.groups)

module ChatSpace
  class Application < Rails::Application
    config.generators do |g|
      g.stylesheets false
      g.javascripts false
      g.helper false
      g.test_framework false
    end
    I18n.enforce_available_locales = false
    config.time_zone = 'Tokyo'
    config.i18n.default_locale = :ja
  end
end
