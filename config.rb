###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

activate :livereload
activate :autoprefixer

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end


activate :deploy do |deploy|
	deploy.build_before = true # default: false
  deploy.deploy_method   = :ftp
  deploy.host            = 'ftp.nicholasblock.com'
  deploy.port 		 	 = 21
  deploy.path            = '/nicholasblock.com/'
  deploy.user            = 'nblock0330'
  deploy.password        = "#{ENV['PASSWORD']}"
end

