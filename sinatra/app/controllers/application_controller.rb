class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  set :session => true
  

  use Rack::Session::Cookie,
  expire_after: 600


  #Authorize
 
  def authorize
      if session[:user_id].blank?
        puts "Authorize called"
      message = {:error=> "Not authorized"}
     
      halt 401, message.to_json
    end
end



  # Add your routes here
  get "/" do
    { message: "Howdy World!" }.to_json
  end

end
 