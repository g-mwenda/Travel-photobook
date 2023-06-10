class UsersController < ApplicationController

    get "/users" do
      
       users = User.all
       users.to_json()
    end


     post "/users/adduser" do
        _username=params[:username]
        _password=params[:password]
        _email=params[:email]


        if (_username.present? && _email.present? && _password.present?)

            check_username = User.exists?(username: _username)
            check_email = User.exists?(email: _email)
            if check_username == true
                status 406 
                message = {:error=> "Username exists"}
                message.to_json()

            elsif check_email
                status 406
                message = {:error=> "Email exists"}
                message.to_json()


            else

                user = User.create(
                username: _username,
                email: _email,
             
                password: _password
                 )
                   if user 
                        message = {:success => "User has been created successfully"}
                        message.to_json()
                    else 
                      message = {:error=> "Error saving the user"}
                    message.to_json()
                     end
                 end

                   
                    else 
                        status 406
                        message = {:error=> "All values are required"}
                        message.to_json()
            
            end

    end


     # Get current user
     get "/current_user" do
        user = User.find_by(id: session[:user_id])
         
        if user
          {:currentUser => user}.to_json

        else
          message = {:error=> "Not logged in"}
                  message.to_json
        end
    end

end 