require 'bundler/inline'

gemfile do
  source 'https://rubygems.org'
  gem 'webrick'
end

srv = WEBrick::HTTPServer.new(
  :BindAddress => '127.0.0.1',
  :Port => 20080
)

srv.mount_proc('/') do |_req, res|
  res.set_redirect(WEBrick::HTTPStatus::MovedPermanently, '/arknights/index.html')
end

srv.mount('/arknights', WEBrick::HTTPServlet::FileHandler, './build')

trap("INT"){ srv.shutdown }
srv.start
